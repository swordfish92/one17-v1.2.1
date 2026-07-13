import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ExecOversightPolicyModel = runtime.Types.Result.DefaultSelection<Prisma.$ExecOversightPolicyPayload>;
export type AggregateExecOversightPolicy = {
    _count: ExecOversightPolicyCountAggregateOutputType | null;
    _avg: ExecOversightPolicyAvgAggregateOutputType | null;
    _sum: ExecOversightPolicySumAggregateOutputType | null;
    _min: ExecOversightPolicyMinAggregateOutputType | null;
    _max: ExecOversightPolicyMaxAggregateOutputType | null;
};
export type ExecOversightPolicyAvgAggregateOutputType = {
    version: number | null;
};
export type ExecOversightPolicySumAggregateOutputType = {
    version: number | null;
};
export type ExecOversightPolicyMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
};
export type ExecOversightPolicyMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date | null;
};
export type ExecOversightPolicyCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    grantedRoleCodes: number;
    proposedByUserId: number;
    approvedByUserId: number;
    approvedAt: number;
    createdAt: number;
    _all: number;
};
export type ExecOversightPolicyAvgAggregateInputType = {
    version?: true;
};
export type ExecOversightPolicySumAggregateInputType = {
    version?: true;
};
export type ExecOversightPolicyMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
};
export type ExecOversightPolicyMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
};
export type ExecOversightPolicyCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    grantedRoleCodes?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    approvedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type ExecOversightPolicyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightPolicyWhereInput;
    orderBy?: Prisma.ExecOversightPolicyOrderByWithRelationInput | Prisma.ExecOversightPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ExecOversightPolicyCountAggregateInputType;
    _avg?: ExecOversightPolicyAvgAggregateInputType;
    _sum?: ExecOversightPolicySumAggregateInputType;
    _min?: ExecOversightPolicyMinAggregateInputType;
    _max?: ExecOversightPolicyMaxAggregateInputType;
};
export type GetExecOversightPolicyAggregateType<T extends ExecOversightPolicyAggregateArgs> = {
    [P in keyof T & keyof AggregateExecOversightPolicy]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExecOversightPolicy[P]> : Prisma.GetScalarType<T[P], AggregateExecOversightPolicy[P]>;
};
export type ExecOversightPolicyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightPolicyWhereInput;
    orderBy?: Prisma.ExecOversightPolicyOrderByWithAggregationInput | Prisma.ExecOversightPolicyOrderByWithAggregationInput[];
    by: Prisma.ExecOversightPolicyScalarFieldEnum[] | Prisma.ExecOversightPolicyScalarFieldEnum;
    having?: Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ExecOversightPolicyCountAggregateInputType | true;
    _avg?: ExecOversightPolicyAvgAggregateInputType;
    _sum?: ExecOversightPolicySumAggregateInputType;
    _min?: ExecOversightPolicyMinAggregateInputType;
    _max?: ExecOversightPolicyMaxAggregateInputType;
};
export type ExecOversightPolicyGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    grantedRoleCodes: runtime.JsonValue;
    proposedByUserId: string;
    approvedByUserId: string | null;
    approvedAt: Date | null;
    createdAt: Date;
    _count: ExecOversightPolicyCountAggregateOutputType | null;
    _avg: ExecOversightPolicyAvgAggregateOutputType | null;
    _sum: ExecOversightPolicySumAggregateOutputType | null;
    _min: ExecOversightPolicyMinAggregateOutputType | null;
    _max: ExecOversightPolicyMaxAggregateOutputType | null;
};
export type GetExecOversightPolicyGroupByPayload<T extends ExecOversightPolicyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ExecOversightPolicyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ExecOversightPolicyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ExecOversightPolicyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ExecOversightPolicyGroupByOutputType[P]>;
}>>;
export type ExecOversightPolicyWhereInput = {
    AND?: Prisma.ExecOversightPolicyWhereInput | Prisma.ExecOversightPolicyWhereInput[];
    OR?: Prisma.ExecOversightPolicyWhereInput[];
    NOT?: Prisma.ExecOversightPolicyWhereInput | Prisma.ExecOversightPolicyWhereInput[];
    id?: Prisma.UuidFilter<"ExecOversightPolicy"> | string;
    version?: Prisma.IntFilter<"ExecOversightPolicy"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ExecOversightPolicy"> | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonFilter<"ExecOversightPolicy">;
    proposedByUserId?: Prisma.UuidFilter<"ExecOversightPolicy"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ExecOversightPolicy"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ExecOversightPolicy"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExecOversightPolicy"> | Date | string;
    proposedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedByUser?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type ExecOversightPolicyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    grantedRoleCodes?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedByUser?: Prisma.AppUserOrderByWithRelationInput;
    approvedByUser?: Prisma.AppUserOrderByWithRelationInput;
};
export type ExecOversightPolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    AND?: Prisma.ExecOversightPolicyWhereInput | Prisma.ExecOversightPolicyWhereInput[];
    OR?: Prisma.ExecOversightPolicyWhereInput[];
    NOT?: Prisma.ExecOversightPolicyWhereInput | Prisma.ExecOversightPolicyWhereInput[];
    status?: Prisma.EnumGovernedItemStatusFilter<"ExecOversightPolicy"> | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonFilter<"ExecOversightPolicy">;
    proposedByUserId?: Prisma.UuidFilter<"ExecOversightPolicy"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ExecOversightPolicy"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ExecOversightPolicy"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExecOversightPolicy"> | Date | string;
    proposedByUser?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedByUser?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "version">;
export type ExecOversightPolicyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    grantedRoleCodes?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ExecOversightPolicyCountOrderByAggregateInput;
    _avg?: Prisma.ExecOversightPolicyAvgOrderByAggregateInput;
    _max?: Prisma.ExecOversightPolicyMaxOrderByAggregateInput;
    _min?: Prisma.ExecOversightPolicyMinOrderByAggregateInput;
    _sum?: Prisma.ExecOversightPolicySumOrderByAggregateInput;
};
export type ExecOversightPolicyScalarWhereWithAggregatesInput = {
    AND?: Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput | Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput[];
    OR?: Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput | Prisma.ExecOversightPolicyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ExecOversightPolicy"> | string;
    version?: Prisma.IntWithAggregatesFilter<"ExecOversightPolicy"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"ExecOversightPolicy"> | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonWithAggregatesFilter<"ExecOversightPolicy">;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"ExecOversightPolicy"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ExecOversightPolicy"> | string | null;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ExecOversightPolicy"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ExecOversightPolicy"> | Date | string;
};
export type ExecOversightPolicyCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    proposedByUser: Prisma.AppUserCreateNestedOneWithoutExecOversightPoliciesProposedInput;
    approvedByUser?: Prisma.AppUserCreateNestedOneWithoutExecOversightPoliciesApprovedInput;
};
export type ExecOversightPolicyUncheckedCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUser?: Prisma.AppUserUpdateOneRequiredWithoutExecOversightPoliciesProposedNestedInput;
    approvedByUser?: Prisma.AppUserUpdateOneWithoutExecOversightPoliciesApprovedNestedInput;
};
export type ExecOversightPolicyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyCreateManyInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyListRelationFilter = {
    every?: Prisma.ExecOversightPolicyWhereInput;
    some?: Prisma.ExecOversightPolicyWhereInput;
    none?: Prisma.ExecOversightPolicyWhereInput;
};
export type ExecOversightPolicyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ExecOversightPolicyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    grantedRoleCodes?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExecOversightPolicyAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ExecOversightPolicyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExecOversightPolicyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ExecOversightPolicySumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ExecOversightPolicyCreateNestedManyWithoutProposedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyProposedByUserInputEnvelope;
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
};
export type ExecOversightPolicyCreateNestedManyWithoutApprovedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyApprovedByUserInputEnvelope;
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
};
export type ExecOversightPolicyUncheckedCreateNestedManyWithoutProposedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyProposedByUserInputEnvelope;
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
};
export type ExecOversightPolicyUncheckedCreateNestedManyWithoutApprovedByUserInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyApprovedByUserInputEnvelope;
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
};
export type ExecOversightPolicyUpdateManyWithoutProposedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput[];
    upsert?: Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutProposedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyProposedByUserInputEnvelope;
    set?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    delete?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    update?: Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutProposedByUserInput[];
    updateMany?: Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutProposedByUserInput[];
    deleteMany?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
};
export type ExecOversightPolicyUpdateManyWithoutApprovedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput[];
    upsert?: Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutApprovedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyApprovedByUserInputEnvelope;
    set?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    delete?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    update?: Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutApprovedByUserInput[];
    updateMany?: Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutApprovedByUserInput[];
    deleteMany?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
};
export type ExecOversightPolicyUncheckedUpdateManyWithoutProposedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput[];
    upsert?: Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutProposedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyProposedByUserInputEnvelope;
    set?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    delete?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    update?: Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutProposedByUserInput[];
    updateMany?: Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutProposedByUserInput | Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutProposedByUserInput[];
    deleteMany?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
};
export type ExecOversightPolicyUncheckedUpdateManyWithoutApprovedByUserNestedInput = {
    create?: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput> | Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput[] | Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput[];
    connectOrCreate?: Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput | Prisma.ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput[];
    upsert?: Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpsertWithWhereUniqueWithoutApprovedByUserInput[];
    createMany?: Prisma.ExecOversightPolicyCreateManyApprovedByUserInputEnvelope;
    set?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    disconnect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    delete?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    connect?: Prisma.ExecOversightPolicyWhereUniqueInput | Prisma.ExecOversightPolicyWhereUniqueInput[];
    update?: Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpdateWithWhereUniqueWithoutApprovedByUserInput[];
    updateMany?: Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutApprovedByUserInput | Prisma.ExecOversightPolicyUpdateManyWithWhereWithoutApprovedByUserInput[];
    deleteMany?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
};
export type ExecOversightPolicyCreateWithoutProposedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    approvedByUser?: Prisma.AppUserCreateNestedOneWithoutExecOversightPoliciesApprovedInput;
};
export type ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyCreateOrConnectWithoutProposedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput>;
};
export type ExecOversightPolicyCreateManyProposedByUserInputEnvelope = {
    data: Prisma.ExecOversightPolicyCreateManyProposedByUserInput | Prisma.ExecOversightPolicyCreateManyProposedByUserInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightPolicyCreateWithoutApprovedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
    proposedByUser: Prisma.AppUserCreateNestedOneWithoutExecOversightPoliciesProposedInput;
};
export type ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyCreateOrConnectWithoutApprovedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput>;
};
export type ExecOversightPolicyCreateManyApprovedByUserInputEnvelope = {
    data: Prisma.ExecOversightPolicyCreateManyApprovedByUserInput | Prisma.ExecOversightPolicyCreateManyApprovedByUserInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightPolicyUpsertWithWhereUniqueWithoutProposedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExecOversightPolicyUpdateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedUpdateWithoutProposedByUserInput>;
    create: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutProposedByUserInput>;
};
export type ExecOversightPolicyUpdateWithWhereUniqueWithoutProposedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateWithoutProposedByUserInput, Prisma.ExecOversightPolicyUncheckedUpdateWithoutProposedByUserInput>;
};
export type ExecOversightPolicyUpdateManyWithWhereWithoutProposedByUserInput = {
    where: Prisma.ExecOversightPolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateManyMutationInput, Prisma.ExecOversightPolicyUncheckedUpdateManyWithoutProposedByUserInput>;
};
export type ExecOversightPolicyScalarWhereInput = {
    AND?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
    OR?: Prisma.ExecOversightPolicyScalarWhereInput[];
    NOT?: Prisma.ExecOversightPolicyScalarWhereInput | Prisma.ExecOversightPolicyScalarWhereInput[];
    id?: Prisma.UuidFilter<"ExecOversightPolicy"> | string;
    version?: Prisma.IntFilter<"ExecOversightPolicy"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"ExecOversightPolicy"> | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonFilter<"ExecOversightPolicy">;
    proposedByUserId?: Prisma.UuidFilter<"ExecOversightPolicy"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"ExecOversightPolicy"> | string | null;
    approvedAt?: Prisma.DateTimeNullableFilter<"ExecOversightPolicy"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ExecOversightPolicy"> | Date | string;
};
export type ExecOversightPolicyUpsertWithWhereUniqueWithoutApprovedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ExecOversightPolicyUpdateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedUpdateWithoutApprovedByUserInput>;
    create: Prisma.XOR<Prisma.ExecOversightPolicyCreateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedCreateWithoutApprovedByUserInput>;
};
export type ExecOversightPolicyUpdateWithWhereUniqueWithoutApprovedByUserInput = {
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateWithoutApprovedByUserInput, Prisma.ExecOversightPolicyUncheckedUpdateWithoutApprovedByUserInput>;
};
export type ExecOversightPolicyUpdateManyWithWhereWithoutApprovedByUserInput = {
    where: Prisma.ExecOversightPolicyScalarWhereInput;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateManyMutationInput, Prisma.ExecOversightPolicyUncheckedUpdateManyWithoutApprovedByUserInput>;
};
export type ExecOversightPolicyCreateManyProposedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedByUserId?: string | null;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyCreateManyApprovedByUserInput = {
    id?: string;
    version: number;
    status?: $Enums.GovernedItemStatus;
    grantedRoleCodes: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId: string;
    approvedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type ExecOversightPolicyUpdateWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedByUser?: Prisma.AppUserUpdateOneWithoutExecOversightPoliciesApprovedNestedInput;
};
export type ExecOversightPolicyUncheckedUpdateWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyUncheckedUpdateManyWithoutProposedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyUpdateWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedByUser?: Prisma.AppUserUpdateOneRequiredWithoutExecOversightPoliciesProposedNestedInput;
};
export type ExecOversightPolicyUncheckedUpdateWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicyUncheckedUpdateManyWithoutApprovedByUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    grantedRoleCodes?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ExecOversightPolicySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    grantedRoleCodes?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightPolicy"]>;
export type ExecOversightPolicySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    grantedRoleCodes?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightPolicy"]>;
export type ExecOversightPolicySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    grantedRoleCodes?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
}, ExtArgs["result"]["execOversightPolicy"]>;
export type ExecOversightPolicySelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    grantedRoleCodes?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    approvedAt?: boolean;
    createdAt?: boolean;
};
export type ExecOversightPolicyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "grantedRoleCodes" | "proposedByUserId" | "approvedByUserId" | "approvedAt" | "createdAt", ExtArgs["result"]["execOversightPolicy"]>;
export type ExecOversightPolicyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
};
export type ExecOversightPolicyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
};
export type ExecOversightPolicyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedByUser?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedByUser?: boolean | Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>;
};
export type $ExecOversightPolicyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ExecOversightPolicy";
    objects: {
        proposedByUser: Prisma.$AppUserPayload<ExtArgs>;
        approvedByUser: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        grantedRoleCodes: runtime.JsonValue;
        proposedByUserId: string;
        approvedByUserId: string | null;
        approvedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["execOversightPolicy"]>;
    composites: {};
};
export type ExecOversightPolicyGetPayload<S extends boolean | null | undefined | ExecOversightPolicyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload, S>;
export type ExecOversightPolicyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ExecOversightPolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ExecOversightPolicyCountAggregateInputType | true;
};
export interface ExecOversightPolicyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ExecOversightPolicy'];
        meta: {
            name: 'ExecOversightPolicy';
        };
    };
    findUnique<T extends ExecOversightPolicyFindUniqueArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ExecOversightPolicyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ExecOversightPolicyFindFirstArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyFindFirstArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ExecOversightPolicyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ExecOversightPolicyFindManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ExecOversightPolicyCreateArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyCreateArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ExecOversightPolicyCreateManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ExecOversightPolicyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ExecOversightPolicyDeleteArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyDeleteArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ExecOversightPolicyUpdateArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyUpdateArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ExecOversightPolicyDeleteManyArgs>(args?: Prisma.SelectSubset<T, ExecOversightPolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ExecOversightPolicyUpdateManyArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ExecOversightPolicyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ExecOversightPolicyUpsertArgs>(args: Prisma.SelectSubset<T, ExecOversightPolicyUpsertArgs<ExtArgs>>): Prisma.Prisma__ExecOversightPolicyClient<runtime.Types.Result.GetResult<Prisma.$ExecOversightPolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ExecOversightPolicyCountArgs>(args?: Prisma.Subset<T, ExecOversightPolicyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ExecOversightPolicyCountAggregateOutputType> : number>;
    aggregate<T extends ExecOversightPolicyAggregateArgs>(args: Prisma.Subset<T, ExecOversightPolicyAggregateArgs>): Prisma.PrismaPromise<GetExecOversightPolicyAggregateType<T>>;
    groupBy<T extends ExecOversightPolicyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ExecOversightPolicyGroupByArgs['orderBy'];
    } : {
        orderBy?: ExecOversightPolicyGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ExecOversightPolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecOversightPolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ExecOversightPolicyFieldRefs;
}
export interface Prisma__ExecOversightPolicyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedByUser<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedByUser<T extends Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ExecOversightPolicy$approvedByUserArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ExecOversightPolicyFieldRefs {
    readonly id: Prisma.FieldRef<"ExecOversightPolicy", 'String'>;
    readonly version: Prisma.FieldRef<"ExecOversightPolicy", 'Int'>;
    readonly status: Prisma.FieldRef<"ExecOversightPolicy", 'GovernedItemStatus'>;
    readonly grantedRoleCodes: Prisma.FieldRef<"ExecOversightPolicy", 'Json'>;
    readonly proposedByUserId: Prisma.FieldRef<"ExecOversightPolicy", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"ExecOversightPolicy", 'String'>;
    readonly approvedAt: Prisma.FieldRef<"ExecOversightPolicy", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ExecOversightPolicy", 'DateTime'>;
}
export type ExecOversightPolicyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
};
export type ExecOversightPolicyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
};
export type ExecOversightPolicyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightPolicyWhereInput;
    orderBy?: Prisma.ExecOversightPolicyOrderByWithRelationInput | Prisma.ExecOversightPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightPolicyScalarFieldEnum | Prisma.ExecOversightPolicyScalarFieldEnum[];
};
export type ExecOversightPolicyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightPolicyWhereInput;
    orderBy?: Prisma.ExecOversightPolicyOrderByWithRelationInput | Prisma.ExecOversightPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightPolicyScalarFieldEnum | Prisma.ExecOversightPolicyScalarFieldEnum[];
};
export type ExecOversightPolicyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where?: Prisma.ExecOversightPolicyWhereInput;
    orderBy?: Prisma.ExecOversightPolicyOrderByWithRelationInput | Prisma.ExecOversightPolicyOrderByWithRelationInput[];
    cursor?: Prisma.ExecOversightPolicyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ExecOversightPolicyScalarFieldEnum | Prisma.ExecOversightPolicyScalarFieldEnum[];
};
export type ExecOversightPolicyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightPolicyCreateInput, Prisma.ExecOversightPolicyUncheckedCreateInput>;
};
export type ExecOversightPolicyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ExecOversightPolicyCreateManyInput | Prisma.ExecOversightPolicyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ExecOversightPolicyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    data: Prisma.ExecOversightPolicyCreateManyInput | Prisma.ExecOversightPolicyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ExecOversightPolicyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ExecOversightPolicyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateInput, Prisma.ExecOversightPolicyUncheckedUpdateInput>;
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
};
export type ExecOversightPolicyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateManyMutationInput, Prisma.ExecOversightPolicyUncheckedUpdateManyInput>;
    where?: Prisma.ExecOversightPolicyWhereInput;
    limit?: number;
};
export type ExecOversightPolicyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ExecOversightPolicyUpdateManyMutationInput, Prisma.ExecOversightPolicyUncheckedUpdateManyInput>;
    where?: Prisma.ExecOversightPolicyWhereInput;
    limit?: number;
    include?: Prisma.ExecOversightPolicyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ExecOversightPolicyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ExecOversightPolicyCreateInput, Prisma.ExecOversightPolicyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ExecOversightPolicyUpdateInput, Prisma.ExecOversightPolicyUncheckedUpdateInput>;
};
export type ExecOversightPolicyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
    where: Prisma.ExecOversightPolicyWhereUniqueInput;
};
export type ExecOversightPolicyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ExecOversightPolicyWhereInput;
    limit?: number;
};
export type ExecOversightPolicy$approvedByUserArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ExecOversightPolicyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ExecOversightPolicySelect<ExtArgs> | null;
    omit?: Prisma.ExecOversightPolicyOmit<ExtArgs> | null;
    include?: Prisma.ExecOversightPolicyInclude<ExtArgs> | null;
};
