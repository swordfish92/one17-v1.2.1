import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KpiWeightMatrixModel = runtime.Types.Result.DefaultSelection<Prisma.$KpiWeightMatrixPayload>;
export type AggregateKpiWeightMatrix = {
    _count: KpiWeightMatrixCountAggregateOutputType | null;
    _avg: KpiWeightMatrixAvgAggregateOutputType | null;
    _sum: KpiWeightMatrixSumAggregateOutputType | null;
    _min: KpiWeightMatrixMinAggregateOutputType | null;
    _max: KpiWeightMatrixMaxAggregateOutputType | null;
};
export type KpiWeightMatrixAvgAggregateOutputType = {
    weightPct: runtime.Decimal | null;
    version: number | null;
};
export type KpiWeightMatrixSumAggregateOutputType = {
    weightPct: runtime.Decimal | null;
    version: number | null;
};
export type KpiWeightMatrixMinAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    tier: $Enums.PmsTier | null;
    kpiClass: $Enums.KpiClass | null;
    weightPct: runtime.Decimal | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type KpiWeightMatrixMaxAggregateOutputType = {
    id: string | null;
    orgUnitCode: string | null;
    tier: $Enums.PmsTier | null;
    kpiClass: $Enums.KpiClass | null;
    weightPct: runtime.Decimal | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type KpiWeightMatrixCountAggregateOutputType = {
    id: number;
    orgUnitCode: number;
    tier: number;
    kpiClass: number;
    weightPct: number;
    version: number;
    status: number;
    createdByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type KpiWeightMatrixAvgAggregateInputType = {
    weightPct?: true;
    version?: true;
};
export type KpiWeightMatrixSumAggregateInputType = {
    weightPct?: true;
    version?: true;
};
export type KpiWeightMatrixMinAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    tier?: true;
    kpiClass?: true;
    weightPct?: true;
    version?: true;
    status?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type KpiWeightMatrixMaxAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    tier?: true;
    kpiClass?: true;
    weightPct?: true;
    version?: true;
    status?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type KpiWeightMatrixCountAggregateInputType = {
    id?: true;
    orgUnitCode?: true;
    tier?: true;
    kpiClass?: true;
    weightPct?: true;
    version?: true;
    status?: true;
    createdByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type KpiWeightMatrixAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithRelationInput | Prisma.KpiWeightMatrixOrderByWithRelationInput[];
    cursor?: Prisma.KpiWeightMatrixWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KpiWeightMatrixCountAggregateInputType;
    _avg?: KpiWeightMatrixAvgAggregateInputType;
    _sum?: KpiWeightMatrixSumAggregateInputType;
    _min?: KpiWeightMatrixMinAggregateInputType;
    _max?: KpiWeightMatrixMaxAggregateInputType;
};
export type GetKpiWeightMatrixAggregateType<T extends KpiWeightMatrixAggregateArgs> = {
    [P in keyof T & keyof AggregateKpiWeightMatrix]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKpiWeightMatrix[P]> : Prisma.GetScalarType<T[P], AggregateKpiWeightMatrix[P]>;
};
export type KpiWeightMatrixGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithAggregationInput | Prisma.KpiWeightMatrixOrderByWithAggregationInput[];
    by: Prisma.KpiWeightMatrixScalarFieldEnum[] | Prisma.KpiWeightMatrixScalarFieldEnum;
    having?: Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KpiWeightMatrixCountAggregateInputType | true;
    _avg?: KpiWeightMatrixAvgAggregateInputType;
    _sum?: KpiWeightMatrixSumAggregateInputType;
    _min?: KpiWeightMatrixMinAggregateInputType;
    _max?: KpiWeightMatrixMaxAggregateInputType;
};
export type KpiWeightMatrixGroupByOutputType = {
    id: string;
    orgUnitCode: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal;
    version: number;
    status: $Enums.GovernedItemStatus;
    createdByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: KpiWeightMatrixCountAggregateOutputType | null;
    _avg: KpiWeightMatrixAvgAggregateOutputType | null;
    _sum: KpiWeightMatrixSumAggregateOutputType | null;
    _min: KpiWeightMatrixMinAggregateOutputType | null;
    _max: KpiWeightMatrixMaxAggregateOutputType | null;
};
export type GetKpiWeightMatrixGroupByPayload<T extends KpiWeightMatrixGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KpiWeightMatrixGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KpiWeightMatrixGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KpiWeightMatrixGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KpiWeightMatrixGroupByOutputType[P]>;
}>>;
export type KpiWeightMatrixWhereInput = {
    AND?: Prisma.KpiWeightMatrixWhereInput | Prisma.KpiWeightMatrixWhereInput[];
    OR?: Prisma.KpiWeightMatrixWhereInput[];
    NOT?: Prisma.KpiWeightMatrixWhereInput | Prisma.KpiWeightMatrixWhereInput[];
    id?: Prisma.UuidFilter<"KpiWeightMatrix"> | string;
    orgUnitCode?: Prisma.StringFilter<"KpiWeightMatrix"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiWeightMatrix"> | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiWeightMatrix"> | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFilter<"KpiWeightMatrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFilter<"KpiWeightMatrix"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiWeightMatrix"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KpiWeightMatrix"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
};
export type KpiWeightMatrixOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    orgUnit?: Prisma.OrgUnitOrderByWithRelationInput;
};
export type KpiWeightMatrixWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orgUnitCode_tier_kpiClass_version?: Prisma.KpiWeightMatrixOrgUnitCodeTierKpiClassVersionCompoundUniqueInput;
    AND?: Prisma.KpiWeightMatrixWhereInput | Prisma.KpiWeightMatrixWhereInput[];
    OR?: Prisma.KpiWeightMatrixWhereInput[];
    NOT?: Prisma.KpiWeightMatrixWhereInput | Prisma.KpiWeightMatrixWhereInput[];
    orgUnitCode?: Prisma.StringFilter<"KpiWeightMatrix"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiWeightMatrix"> | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiWeightMatrix"> | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFilter<"KpiWeightMatrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFilter<"KpiWeightMatrix"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiWeightMatrix"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KpiWeightMatrix"> | Date | string;
    orgUnit?: Prisma.XOR<Prisma.OrgUnitScalarRelationFilter, Prisma.OrgUnitWhereInput>;
}, "id" | "orgUnitCode_tier_kpiClass_version">;
export type KpiWeightMatrixOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.KpiWeightMatrixCountOrderByAggregateInput;
    _avg?: Prisma.KpiWeightMatrixAvgOrderByAggregateInput;
    _max?: Prisma.KpiWeightMatrixMaxOrderByAggregateInput;
    _min?: Prisma.KpiWeightMatrixMinOrderByAggregateInput;
    _sum?: Prisma.KpiWeightMatrixSumOrderByAggregateInput;
};
export type KpiWeightMatrixScalarWhereWithAggregatesInput = {
    AND?: Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput | Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput[];
    OR?: Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput | Prisma.KpiWeightMatrixScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"KpiWeightMatrix"> | string;
    orgUnitCode?: Prisma.StringWithAggregatesFilter<"KpiWeightMatrix"> | string;
    tier?: Prisma.EnumPmsTierWithAggregatesFilter<"KpiWeightMatrix"> | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassWithAggregatesFilter<"KpiWeightMatrix"> | $Enums.KpiClass;
    weightPct?: Prisma.DecimalWithAggregatesFilter<"KpiWeightMatrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntWithAggregatesFilter<"KpiWeightMatrix"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"KpiWeightMatrix"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidNullableWithAggregatesFilter<"KpiWeightMatrix"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"KpiWeightMatrix"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"KpiWeightMatrix"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"KpiWeightMatrix"> | Date | string;
};
export type KpiWeightMatrixCreateInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    orgUnit: Prisma.OrgUnitCreateNestedOneWithoutWeightRowsInput;
};
export type KpiWeightMatrixUncheckedCreateInput = {
    id?: string;
    orgUnitCode: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type KpiWeightMatrixUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    orgUnit?: Prisma.OrgUnitUpdateOneRequiredWithoutWeightRowsNestedInput;
};
export type KpiWeightMatrixUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixCreateManyInput = {
    id?: string;
    orgUnitCode: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type KpiWeightMatrixUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    orgUnitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixListRelationFilter = {
    every?: Prisma.KpiWeightMatrixWhereInput;
    some?: Prisma.KpiWeightMatrixWhereInput;
    none?: Prisma.KpiWeightMatrixWhereInput;
};
export type KpiWeightMatrixOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KpiWeightMatrixOrgUnitCodeTierKpiClassVersionCompoundUniqueInput = {
    orgUnitCode: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    version: number;
};
export type KpiWeightMatrixCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiWeightMatrixAvgOrderByAggregateInput = {
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type KpiWeightMatrixMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiWeightMatrixMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    tier?: Prisma.SortOrder;
    kpiClass?: Prisma.SortOrder;
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type KpiWeightMatrixSumOrderByAggregateInput = {
    weightPct?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
};
export type KpiWeightMatrixCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput> | Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput[] | Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput | Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.KpiWeightMatrixCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
};
export type KpiWeightMatrixUncheckedCreateNestedManyWithoutOrgUnitInput = {
    create?: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput> | Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput[] | Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput | Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput[];
    createMany?: Prisma.KpiWeightMatrixCreateManyOrgUnitInputEnvelope;
    connect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
};
export type KpiWeightMatrixUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput> | Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput[] | Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput | Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.KpiWeightMatrixUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.KpiWeightMatrixCreateManyOrgUnitInputEnvelope;
    set?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    disconnect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    delete?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    connect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    update?: Prisma.KpiWeightMatrixUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.KpiWeightMatrixUpdateManyWithWhereWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.KpiWeightMatrixScalarWhereInput | Prisma.KpiWeightMatrixScalarWhereInput[];
};
export type KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitNestedInput = {
    create?: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput> | Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput[] | Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput[];
    connectOrCreate?: Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput | Prisma.KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput[];
    upsert?: Prisma.KpiWeightMatrixUpsertWithWhereUniqueWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpsertWithWhereUniqueWithoutOrgUnitInput[];
    createMany?: Prisma.KpiWeightMatrixCreateManyOrgUnitInputEnvelope;
    set?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    disconnect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    delete?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    connect?: Prisma.KpiWeightMatrixWhereUniqueInput | Prisma.KpiWeightMatrixWhereUniqueInput[];
    update?: Prisma.KpiWeightMatrixUpdateWithWhereUniqueWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpdateWithWhereUniqueWithoutOrgUnitInput[];
    updateMany?: Prisma.KpiWeightMatrixUpdateManyWithWhereWithoutOrgUnitInput | Prisma.KpiWeightMatrixUpdateManyWithWhereWithoutOrgUnitInput[];
    deleteMany?: Prisma.KpiWeightMatrixScalarWhereInput | Prisma.KpiWeightMatrixScalarWhereInput[];
};
export type KpiWeightMatrixCreateWithoutOrgUnitInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type KpiWeightMatrixCreateOrConnectWithoutOrgUnitInput = {
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput>;
};
export type KpiWeightMatrixCreateManyOrgUnitInputEnvelope = {
    data: Prisma.KpiWeightMatrixCreateManyOrgUnitInput | Prisma.KpiWeightMatrixCreateManyOrgUnitInput[];
    skipDuplicates?: boolean;
};
export type KpiWeightMatrixUpsertWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
    update: Prisma.XOR<Prisma.KpiWeightMatrixUpdateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedUpdateWithoutOrgUnitInput>;
    create: Prisma.XOR<Prisma.KpiWeightMatrixCreateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedCreateWithoutOrgUnitInput>;
};
export type KpiWeightMatrixUpdateWithWhereUniqueWithoutOrgUnitInput = {
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
    data: Prisma.XOR<Prisma.KpiWeightMatrixUpdateWithoutOrgUnitInput, Prisma.KpiWeightMatrixUncheckedUpdateWithoutOrgUnitInput>;
};
export type KpiWeightMatrixUpdateManyWithWhereWithoutOrgUnitInput = {
    where: Prisma.KpiWeightMatrixScalarWhereInput;
    data: Prisma.XOR<Prisma.KpiWeightMatrixUpdateManyMutationInput, Prisma.KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitInput>;
};
export type KpiWeightMatrixScalarWhereInput = {
    AND?: Prisma.KpiWeightMatrixScalarWhereInput | Prisma.KpiWeightMatrixScalarWhereInput[];
    OR?: Prisma.KpiWeightMatrixScalarWhereInput[];
    NOT?: Prisma.KpiWeightMatrixScalarWhereInput | Prisma.KpiWeightMatrixScalarWhereInput[];
    id?: Prisma.UuidFilter<"KpiWeightMatrix"> | string;
    orgUnitCode?: Prisma.StringFilter<"KpiWeightMatrix"> | string;
    tier?: Prisma.EnumPmsTierFilter<"KpiWeightMatrix"> | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFilter<"KpiWeightMatrix"> | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFilter<"KpiWeightMatrix"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFilter<"KpiWeightMatrix"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"KpiWeightMatrix"> | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"KpiWeightMatrix"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"KpiWeightMatrix"> | Date | string;
};
export type KpiWeightMatrixCreateManyOrgUnitInput = {
    id?: string;
    tier: $Enums.PmsTier;
    kpiClass: $Enums.KpiClass;
    weightPct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    createdByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type KpiWeightMatrixUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixUncheckedUpdateWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixUncheckedUpdateManyWithoutOrgUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tier?: Prisma.EnumPmsTierFieldUpdateOperationsInput | $Enums.PmsTier;
    kpiClass?: Prisma.EnumKpiClassFieldUpdateOperationsInput | $Enums.KpiClass;
    weightPct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    createdByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KpiWeightMatrixSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    tier?: boolean;
    kpiClass?: boolean;
    weightPct?: boolean;
    version?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiWeightMatrix"]>;
export type KpiWeightMatrixSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    tier?: boolean;
    kpiClass?: boolean;
    weightPct?: boolean;
    version?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiWeightMatrix"]>;
export type KpiWeightMatrixSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    orgUnitCode?: boolean;
    tier?: boolean;
    kpiClass?: boolean;
    weightPct?: boolean;
    version?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kpiWeightMatrix"]>;
export type KpiWeightMatrixSelectScalar = {
    id?: boolean;
    orgUnitCode?: boolean;
    tier?: boolean;
    kpiClass?: boolean;
    weightPct?: boolean;
    version?: boolean;
    status?: boolean;
    createdByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type KpiWeightMatrixOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "orgUnitCode" | "tier" | "kpiClass" | "weightPct" | "version" | "status" | "createdByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["kpiWeightMatrix"]>;
export type KpiWeightMatrixInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type KpiWeightMatrixIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type KpiWeightMatrixIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    orgUnit?: boolean | Prisma.OrgUnitDefaultArgs<ExtArgs>;
};
export type $KpiWeightMatrixPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KpiWeightMatrix";
    objects: {
        orgUnit: Prisma.$OrgUnitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        orgUnitCode: string;
        tier: $Enums.PmsTier;
        kpiClass: $Enums.KpiClass;
        weightPct: runtime.Decimal;
        version: number;
        status: $Enums.GovernedItemStatus;
        createdByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["kpiWeightMatrix"]>;
    composites: {};
};
export type KpiWeightMatrixGetPayload<S extends boolean | null | undefined | KpiWeightMatrixDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload, S>;
export type KpiWeightMatrixCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KpiWeightMatrixFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KpiWeightMatrixCountAggregateInputType | true;
};
export interface KpiWeightMatrixDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KpiWeightMatrix'];
        meta: {
            name: 'KpiWeightMatrix';
        };
    };
    findUnique<T extends KpiWeightMatrixFindUniqueArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KpiWeightMatrixFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KpiWeightMatrixFindFirstArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixFindFirstArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KpiWeightMatrixFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KpiWeightMatrixFindManyArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KpiWeightMatrixCreateArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixCreateArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KpiWeightMatrixCreateManyArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KpiWeightMatrixCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KpiWeightMatrixDeleteArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixDeleteArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KpiWeightMatrixUpdateArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixUpdateArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KpiWeightMatrixDeleteManyArgs>(args?: Prisma.SelectSubset<T, KpiWeightMatrixDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KpiWeightMatrixUpdateManyArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KpiWeightMatrixUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KpiWeightMatrixUpsertArgs>(args: Prisma.SelectSubset<T, KpiWeightMatrixUpsertArgs<ExtArgs>>): Prisma.Prisma__KpiWeightMatrixClient<runtime.Types.Result.GetResult<Prisma.$KpiWeightMatrixPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KpiWeightMatrixCountArgs>(args?: Prisma.Subset<T, KpiWeightMatrixCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KpiWeightMatrixCountAggregateOutputType> : number>;
    aggregate<T extends KpiWeightMatrixAggregateArgs>(args: Prisma.Subset<T, KpiWeightMatrixAggregateArgs>): Prisma.PrismaPromise<GetKpiWeightMatrixAggregateType<T>>;
    groupBy<T extends KpiWeightMatrixGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KpiWeightMatrixGroupByArgs['orderBy'];
    } : {
        orderBy?: KpiWeightMatrixGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KpiWeightMatrixGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKpiWeightMatrixGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KpiWeightMatrixFieldRefs;
}
export interface Prisma__KpiWeightMatrixClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    orgUnit<T extends Prisma.OrgUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrgUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__OrgUnitClient<runtime.Types.Result.GetResult<Prisma.$OrgUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KpiWeightMatrixFieldRefs {
    readonly id: Prisma.FieldRef<"KpiWeightMatrix", 'String'>;
    readonly orgUnitCode: Prisma.FieldRef<"KpiWeightMatrix", 'String'>;
    readonly tier: Prisma.FieldRef<"KpiWeightMatrix", 'PmsTier'>;
    readonly kpiClass: Prisma.FieldRef<"KpiWeightMatrix", 'KpiClass'>;
    readonly weightPct: Prisma.FieldRef<"KpiWeightMatrix", 'Decimal'>;
    readonly version: Prisma.FieldRef<"KpiWeightMatrix", 'Int'>;
    readonly status: Prisma.FieldRef<"KpiWeightMatrix", 'GovernedItemStatus'>;
    readonly createdByUserId: Prisma.FieldRef<"KpiWeightMatrix", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"KpiWeightMatrix", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"KpiWeightMatrix", 'String'>;
    readonly createdAt: Prisma.FieldRef<"KpiWeightMatrix", 'DateTime'>;
}
export type KpiWeightMatrixFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
};
export type KpiWeightMatrixFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
};
export type KpiWeightMatrixFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithRelationInput | Prisma.KpiWeightMatrixOrderByWithRelationInput[];
    cursor?: Prisma.KpiWeightMatrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiWeightMatrixScalarFieldEnum | Prisma.KpiWeightMatrixScalarFieldEnum[];
};
export type KpiWeightMatrixFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithRelationInput | Prisma.KpiWeightMatrixOrderByWithRelationInput[];
    cursor?: Prisma.KpiWeightMatrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiWeightMatrixScalarFieldEnum | Prisma.KpiWeightMatrixScalarFieldEnum[];
};
export type KpiWeightMatrixFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where?: Prisma.KpiWeightMatrixWhereInput;
    orderBy?: Prisma.KpiWeightMatrixOrderByWithRelationInput | Prisma.KpiWeightMatrixOrderByWithRelationInput[];
    cursor?: Prisma.KpiWeightMatrixWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KpiWeightMatrixScalarFieldEnum | Prisma.KpiWeightMatrixScalarFieldEnum[];
};
export type KpiWeightMatrixCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiWeightMatrixCreateInput, Prisma.KpiWeightMatrixUncheckedCreateInput>;
};
export type KpiWeightMatrixCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KpiWeightMatrixCreateManyInput | Prisma.KpiWeightMatrixCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KpiWeightMatrixCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    data: Prisma.KpiWeightMatrixCreateManyInput | Prisma.KpiWeightMatrixCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KpiWeightMatrixIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KpiWeightMatrixUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiWeightMatrixUpdateInput, Prisma.KpiWeightMatrixUncheckedUpdateInput>;
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
};
export type KpiWeightMatrixUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KpiWeightMatrixUpdateManyMutationInput, Prisma.KpiWeightMatrixUncheckedUpdateManyInput>;
    where?: Prisma.KpiWeightMatrixWhereInput;
    limit?: number;
};
export type KpiWeightMatrixUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KpiWeightMatrixUpdateManyMutationInput, Prisma.KpiWeightMatrixUncheckedUpdateManyInput>;
    where?: Prisma.KpiWeightMatrixWhereInput;
    limit?: number;
    include?: Prisma.KpiWeightMatrixIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KpiWeightMatrixUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
    create: Prisma.XOR<Prisma.KpiWeightMatrixCreateInput, Prisma.KpiWeightMatrixUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KpiWeightMatrixUpdateInput, Prisma.KpiWeightMatrixUncheckedUpdateInput>;
};
export type KpiWeightMatrixDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
    where: Prisma.KpiWeightMatrixWhereUniqueInput;
};
export type KpiWeightMatrixDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KpiWeightMatrixWhereInput;
    limit?: number;
};
export type KpiWeightMatrixDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KpiWeightMatrixSelect<ExtArgs> | null;
    omit?: Prisma.KpiWeightMatrixOmit<ExtArgs> | null;
    include?: Prisma.KpiWeightMatrixInclude<ExtArgs> | null;
};
