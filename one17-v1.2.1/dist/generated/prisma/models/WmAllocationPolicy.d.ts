import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmAllocationPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$WmAllocationPolicyPayload>;
export type AggregateWmAllocationPolicy = {
    _count: WmAllocationPolicyCountAggregateOutputType | null;
    _avg: WmAllocationPolicyAvgAggregateOutputType | null;
    _sum: WmAllocationPolicySumAggregateOutputType | null;
    _min: WmAllocationPolicyMinAggregateOutputType | null;
    _max: WmAllocationPolicyMaxAggregateOutputType | null;
};
export type WmAllocationPolicyAvgAggregateOutputType = {
    version: number | null;
};
export type WmAllocationPolicySumAggregateOutputType = {
    version: number | null;
};
export type WmAllocationPolicyMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    riskBand: $Enums.WmRiskBand | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmAllocationPolicyMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    version: number | null;
    riskBand: $Enums.WmRiskBand | null;
    isActive: boolean | null;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type WmAllocationPolicyCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    version: number;
    targetAllocations: number;
    riskBand: number;
    isActive: number;
    clientAcknowledgedAt: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type WmAllocationPolicyAvgAggregateInputType = {
    version?: true;
};
export type WmAllocationPolicySumAggregateInputType = {
    version?: true;
};
export type WmAllocationPolicyMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmAllocationPolicyMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type WmAllocationPolicyCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    version?: true;
    targetAllocations?: true;
    riskBand?: true;
    isActive?: true;
    clientAcknowledgedAt?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type WmAllocationPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAllocationPolicyWhereInput;
    orderBy?: Prisma.WmAllocationPolicyOrderByWithRelationInput | Prisma.WmAllocationPolicyOrderByWithRelationInput[];
    cursor?: Prisma.WmAllocationPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmAllocationPolicyCountAggregateInputType;
    _avg?: WmAllocationPolicyAvgAggregateInputType;
    _sum?: WmAllocationPolicySumAggregateInputType;
    _min?: WmAllocationPolicyMinAggregateInputType;
    _max?: WmAllocationPolicyMaxAggregateInputType;
};
export type GetWmAllocationPolicyAggregateType<T extends WmAllocationPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateWmAllocationPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmAllocationPolicy[P]> : Prisma.GetScalarType<T[P], AggregateWmAllocationPolicy[P]>;
};
export type WmAllocationPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAllocationPolicyWhereInput;
    orderBy?: Prisma.WmAllocationPolicyOrderByWithAggregationInput | Prisma.WmAllocationPolicyOrderByWithAggregationInput[];
    by: Prisma.WmAllocationPolicyScalarFieldEnum[] | Prisma.WmAllocationPolicyScalarFieldEnum;
    having?: Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmAllocationPolicyCountAggregateInputType | true;
    _avg?: WmAllocationPolicyAvgAggregateInputType;
    _sum?: WmAllocationPolicySumAggregateInputType;
    _min?: WmAllocationPolicyMinAggregateInputType;
    _max?: WmAllocationPolicyMaxAggregateInputType;
};
export type WmAllocationPolicyGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    version: number;
    targetAllocations: runtime.JsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive: boolean;
    clientAcknowledgedAt: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: WmAllocationPolicyCountAggregateOutputType | null;
    _avg: WmAllocationPolicyAvgAggregateOutputType | null;
    _sum: WmAllocationPolicySumAggregateOutputType | null;
    _min: WmAllocationPolicyMinAggregateOutputType | null;
    _max: WmAllocationPolicyMaxAggregateOutputType | null;
};
export type GetWmAllocationPolicyGroupByPayload<T extends WmAllocationPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmAllocationPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmAllocationPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmAllocationPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmAllocationPolicyGroupByOutputType[P]>;
}>>;
export type WmAllocationPolicyWhereInput = {
    AND?: Prisma.WmAllocationPolicyWhereInput | Prisma.WmAllocationPolicyWhereInput[];
    OR?: Prisma.WmAllocationPolicyWhereInput[];
    NOT?: Prisma.WmAllocationPolicyWhereInput | Prisma.WmAllocationPolicyWhereInput[];
    id?: Prisma.UuidFilter<"WmAllocationPolicy"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmAllocationPolicy"> | string;
    version?: Prisma.IntFilter<"WmAllocationPolicy"> | number;
    targetAllocations?: Prisma.JsonFilter<"WmAllocationPolicy">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmAllocationPolicy"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmAllocationPolicy"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmAllocationPolicy"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmAllocationPolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmAllocationPolicy"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
};
export type WmAllocationPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    targetAllocations?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
};
export type WmAllocationPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    wmClientProfileId_version?: Prisma.WmAllocationPolicyWmClientProfileIdVersionCompoundUniqueInput;
    AND?: Prisma.WmAllocationPolicyWhereInput | Prisma.WmAllocationPolicyWhereInput[];
    OR?: Prisma.WmAllocationPolicyWhereInput[];
    NOT?: Prisma.WmAllocationPolicyWhereInput | Prisma.WmAllocationPolicyWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmAllocationPolicy"> | string;
    version?: Prisma.IntFilter<"WmAllocationPolicy"> | number;
    targetAllocations?: Prisma.JsonFilter<"WmAllocationPolicy">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmAllocationPolicy"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmAllocationPolicy"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmAllocationPolicy"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmAllocationPolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmAllocationPolicy"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
}, "id" | "wmClientProfileId_version">;
export type WmAllocationPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    targetAllocations?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmAllocationPolicyCountOrderByAggregateInput;
    _avg?: Prisma.WmAllocationPolicyAvgOrderByAggregateInput;
    _max?: Prisma.WmAllocationPolicyMaxOrderByAggregateInput;
    _min?: Prisma.WmAllocationPolicyMinOrderByAggregateInput;
    _sum?: Prisma.WmAllocationPolicySumOrderByAggregateInput;
};
export type WmAllocationPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput | Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput | Prisma.WmAllocationPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmAllocationPolicy"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmAllocationPolicy"> | string;
    version?: Prisma.IntWithAggregatesFilter<"WmAllocationPolicy"> | number;
    targetAllocations?: Prisma.JsonWithAggregatesFilter<"WmAllocationPolicy">;
    riskBand?: Prisma.EnumWmRiskBandWithAggregatesFilter<"WmAllocationPolicy"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolWithAggregatesFilter<"WmAllocationPolicy"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmAllocationPolicy"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"WmAllocationPolicy"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmAllocationPolicy"> | Date | string;
};
export type WmAllocationPolicyCreateInput = {
    id?: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutAllocationPoliciesInput;
};
export type WmAllocationPolicyUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmAllocationPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutAllocationPoliciesNestedInput;
};
export type WmAllocationPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicyCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmAllocationPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicyListRelationFilter = {
    every?: Prisma.WmAllocationPolicyWhereInput;
    some?: Prisma.WmAllocationPolicyWhereInput;
    none?: Prisma.WmAllocationPolicyWhereInput;
};
export type WmAllocationPolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmAllocationPolicyWmClientProfileIdVersionCompoundUniqueInput = {
    wmClientProfileId: string;
    version: number;
};
export type WmAllocationPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    targetAllocations?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAllocationPolicyAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmAllocationPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAllocationPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    riskBand?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    clientAcknowledgedAt?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAllocationPolicySumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type WmAllocationPolicyCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput[] | Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAllocationPolicyCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
};
export type WmAllocationPolicyUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput[] | Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAllocationPolicyCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
};
export type WmAllocationPolicyUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput[] | Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmAllocationPolicyUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAllocationPolicyCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    disconnect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    delete?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    connect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    update?: Prisma.WmAllocationPolicyUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmAllocationPolicyUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmAllocationPolicyScalarWhereInput | Prisma.WmAllocationPolicyScalarWhereInput[];
};
export type WmAllocationPolicyUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput[] | Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmAllocationPolicyUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAllocationPolicyCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    disconnect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    delete?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    connect?: Prisma.WmAllocationPolicyWhereUniqueInput | Prisma.WmAllocationPolicyWhereUniqueInput[];
    update?: Prisma.WmAllocationPolicyUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmAllocationPolicyUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmAllocationPolicyUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmAllocationPolicyScalarWhereInput | Prisma.WmAllocationPolicyScalarWhereInput[];
};
export type EnumWmRiskBandFieldUpdateOperationsInput = {
    set?: $Enums.WmRiskBand;
};
export type WmAllocationPolicyCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmAllocationPolicyCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmAllocationPolicyCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmAllocationPolicyCreateManyWmClientProfileInput | Prisma.WmAllocationPolicyCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmAllocationPolicyUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmAllocationPolicyUpdateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmAllocationPolicyCreateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmAllocationPolicyUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmAllocationPolicyUpdateWithoutWmClientProfileInput, Prisma.WmAllocationPolicyUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmAllocationPolicyUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmAllocationPolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.WmAllocationPolicyUpdateManyMutationInput, Prisma.WmAllocationPolicyUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmAllocationPolicyScalarWhereInput = {
    AND?: Prisma.WmAllocationPolicyScalarWhereInput | Prisma.WmAllocationPolicyScalarWhereInput[];
    OR?: Prisma.WmAllocationPolicyScalarWhereInput[];
    NOT?: Prisma.WmAllocationPolicyScalarWhereInput | Prisma.WmAllocationPolicyScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmAllocationPolicy"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmAllocationPolicy"> | string;
    version?: Prisma.IntFilter<"WmAllocationPolicy"> | number;
    targetAllocations?: Prisma.JsonFilter<"WmAllocationPolicy">;
    riskBand?: Prisma.EnumWmRiskBandFilter<"WmAllocationPolicy"> | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFilter<"WmAllocationPolicy"> | boolean;
    clientAcknowledgedAt?: Prisma.DateTimeNullableFilter<"WmAllocationPolicy"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"WmAllocationPolicy"> | string;
    createdAt?: Prisma.DateTimeFilter<"WmAllocationPolicy"> | Date | string;
};
export type WmAllocationPolicyCreateManyWmClientProfileInput = {
    id?: string;
    version: number;
    targetAllocations: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand: $Enums.WmRiskBand;
    isActive?: boolean;
    clientAcknowledgedAt?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type WmAllocationPolicyUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicyUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicyUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    targetAllocations?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    riskBand?: Prisma.EnumWmRiskBandFieldUpdateOperationsInput | $Enums.WmRiskBand;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    clientAcknowledgedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAllocationPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    targetAllocations?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAllocationPolicy"]>;
export type WmAllocationPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    targetAllocations?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAllocationPolicy"]>;
export type WmAllocationPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    targetAllocations?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAllocationPolicy"]>;
export type WmAllocationPolicySelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    version?: boolean;
    targetAllocations?: boolean;
    riskBand?: boolean;
    isActive?: boolean;
    clientAcknowledgedAt?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type WmAllocationPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "version" | "targetAllocations" | "riskBand" | "isActive" | "clientAcknowledgedAt" | "createdByUserId" | "createdAt", ExtArgs["result"]["wmAllocationPolicy"]>;
export type WmAllocationPolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmAllocationPolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmAllocationPolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type $WmAllocationPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmAllocationPolicy";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        version: number;
        targetAllocations: runtime.JsonValue;
        riskBand: $Enums.WmRiskBand;
        isActive: boolean;
        clientAcknowledgedAt: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["wmAllocationPolicy"]>;
    composites: {};
};
export type WmAllocationPolicyGetPayload<S extends boolean | null | undefined | WmAllocationPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload, S>;
export type WmAllocationPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmAllocationPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmAllocationPolicyCountAggregateInputType | true;
};
export interface WmAllocationPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmAllocationPolicy'];
        meta: {
            name: 'WmAllocationPolicy';
        };
    };
    findUnique<T extends WmAllocationPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmAllocationPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmAllocationPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmAllocationPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmAllocationPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmAllocationPolicyCreateArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmAllocationPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmAllocationPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmAllocationPolicyDeleteArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmAllocationPolicyUpdateArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmAllocationPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmAllocationPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmAllocationPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmAllocationPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmAllocationPolicyUpsertArgs>(args: Prisma.SelectSubset<T, WmAllocationPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__WmAllocationPolicyClient<runtime.Types.Result.GetResult<Prisma.$WmAllocationPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmAllocationPolicyCountArgs>(args?: Prisma.Subset<T, WmAllocationPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmAllocationPolicyCountAggregateOutputType> : number>;
    aggregate<T extends WmAllocationPolicyAggregateArgs>(args: Prisma.Subset<T, WmAllocationPolicyAggregateArgs>): Prisma.PrismaPromise<GetWmAllocationPolicyAggregateType<T>>;
    groupBy<T extends WmAllocationPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmAllocationPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: WmAllocationPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmAllocationPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmAllocationPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmAllocationPolicyFieldRefs;
}
export interface Prisma__WmAllocationPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmAllocationPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"WmAllocationPolicy", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmAllocationPolicy", 'String'>;
    readonly version: Prisma.FieldRef<"WmAllocationPolicy", 'Int'>;
    readonly targetAllocations: Prisma.FieldRef<"WmAllocationPolicy", 'Json'>;
    readonly riskBand: Prisma.FieldRef<"WmAllocationPolicy", 'WmRiskBand'>;
    readonly isActive: Prisma.FieldRef<"WmAllocationPolicy", 'Boolean'>;
    readonly clientAcknowledgedAt: Prisma.FieldRef<"WmAllocationPolicy", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"WmAllocationPolicy", 'String'>;
    readonly createdAt: Prisma.FieldRef<"WmAllocationPolicy", 'DateTime'>;
}
export type WmAllocationPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
};
export type WmAllocationPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
};
export type WmAllocationPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where?: Prisma.WmAllocationPolicyWhereInput;
    orderBy?: Prisma.WmAllocationPolicyOrderByWithRelationInput | Prisma.WmAllocationPolicyOrderByWithRelationInput[];
    cursor?: Prisma.WmAllocationPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAllocationPolicyScalarFieldEnum | Prisma.WmAllocationPolicyScalarFieldEnum[];
};
export type WmAllocationPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where?: Prisma.WmAllocationPolicyWhereInput;
    orderBy?: Prisma.WmAllocationPolicyOrderByWithRelationInput | Prisma.WmAllocationPolicyOrderByWithRelationInput[];
    cursor?: Prisma.WmAllocationPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAllocationPolicyScalarFieldEnum | Prisma.WmAllocationPolicyScalarFieldEnum[];
};
export type WmAllocationPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where?: Prisma.WmAllocationPolicyWhereInput;
    orderBy?: Prisma.WmAllocationPolicyOrderByWithRelationInput | Prisma.WmAllocationPolicyOrderByWithRelationInput[];
    cursor?: Prisma.WmAllocationPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAllocationPolicyScalarFieldEnum | Prisma.WmAllocationPolicyScalarFieldEnum[];
};
export type WmAllocationPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAllocationPolicyCreateInput, Prisma.WmAllocationPolicyUncheckedCreateInput>;
};
export type WmAllocationPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmAllocationPolicyCreateManyInput | Prisma.WmAllocationPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmAllocationPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    data: Prisma.WmAllocationPolicyCreateManyInput | Prisma.WmAllocationPolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmAllocationPolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmAllocationPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAllocationPolicyUpdateInput, Prisma.WmAllocationPolicyUncheckedUpdateInput>;
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
};
export type WmAllocationPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmAllocationPolicyUpdateManyMutationInput, Prisma.WmAllocationPolicyUncheckedUpdateManyInput>;
    where?: Prisma.WmAllocationPolicyWhereInput;
    limit?: number;
};
export type WmAllocationPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAllocationPolicyUpdateManyMutationInput, Prisma.WmAllocationPolicyUncheckedUpdateManyInput>;
    where?: Prisma.WmAllocationPolicyWhereInput;
    limit?: number;
    include?: Prisma.WmAllocationPolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmAllocationPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmAllocationPolicyCreateInput, Prisma.WmAllocationPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmAllocationPolicyUpdateInput, Prisma.WmAllocationPolicyUncheckedUpdateInput>;
};
export type WmAllocationPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
    where: Prisma.WmAllocationPolicyWhereUniqueInput;
};
export type WmAllocationPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAllocationPolicyWhereInput;
    limit?: number;
};
export type WmAllocationPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAllocationPolicySelect<ExtArgs> | null;
    omit?: Prisma.WmAllocationPolicyOmit<ExtArgs> | null;
    include?: Prisma.WmAllocationPolicyInclude<ExtArgs> | null;
};
