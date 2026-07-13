import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalRuleStepModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalRuleStepPayload>;
export type AggregateApprovalRuleStep = {
    _count: ApprovalRuleStepCountAggregateOutputType | null;
    _avg: ApprovalRuleStepAvgAggregateOutputType | null;
    _sum: ApprovalRuleStepSumAggregateOutputType | null;
    _min: ApprovalRuleStepMinAggregateOutputType | null;
    _max: ApprovalRuleStepMaxAggregateOutputType | null;
};
export type ApprovalRuleStepAvgAggregateOutputType = {
    stepOrder: number | null;
};
export type ApprovalRuleStepSumAggregateOutputType = {
    stepOrder: number | null;
};
export type ApprovalRuleStepMinAggregateOutputType = {
    id: string | null;
    approvalRuleId: string | null;
    stepOrder: number | null;
    requiredFunctionCode: string | null;
    requiresAmountLimitCheck: boolean | null;
    isLockedSeat: boolean | null;
    lockedSeatRationale: string | null;
    description: string | null;
};
export type ApprovalRuleStepMaxAggregateOutputType = {
    id: string | null;
    approvalRuleId: string | null;
    stepOrder: number | null;
    requiredFunctionCode: string | null;
    requiresAmountLimitCheck: boolean | null;
    isLockedSeat: boolean | null;
    lockedSeatRationale: string | null;
    description: string | null;
};
export type ApprovalRuleStepCountAggregateOutputType = {
    id: number;
    approvalRuleId: number;
    stepOrder: number;
    requiredFunctionCode: number;
    requiresAmountLimitCheck: number;
    isLockedSeat: number;
    lockedSeatRationale: number;
    description: number;
    _all: number;
};
export type ApprovalRuleStepAvgAggregateInputType = {
    stepOrder?: true;
};
export type ApprovalRuleStepSumAggregateInputType = {
    stepOrder?: true;
};
export type ApprovalRuleStepMinAggregateInputType = {
    id?: true;
    approvalRuleId?: true;
    stepOrder?: true;
    requiredFunctionCode?: true;
    requiresAmountLimitCheck?: true;
    isLockedSeat?: true;
    lockedSeatRationale?: true;
    description?: true;
};
export type ApprovalRuleStepMaxAggregateInputType = {
    id?: true;
    approvalRuleId?: true;
    stepOrder?: true;
    requiredFunctionCode?: true;
    requiresAmountLimitCheck?: true;
    isLockedSeat?: true;
    lockedSeatRationale?: true;
    description?: true;
};
export type ApprovalRuleStepCountAggregateInputType = {
    id?: true;
    approvalRuleId?: true;
    stepOrder?: true;
    requiredFunctionCode?: true;
    requiresAmountLimitCheck?: true;
    isLockedSeat?: true;
    lockedSeatRationale?: true;
    description?: true;
    _all?: true;
};
export type ApprovalRuleStepAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleStepWhereInput;
    orderBy?: Prisma.ApprovalRuleStepOrderByWithRelationInput | Prisma.ApprovalRuleStepOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleStepWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalRuleStepCountAggregateInputType;
    _avg?: ApprovalRuleStepAvgAggregateInputType;
    _sum?: ApprovalRuleStepSumAggregateInputType;
    _min?: ApprovalRuleStepMinAggregateInputType;
    _max?: ApprovalRuleStepMaxAggregateInputType;
};
export type GetApprovalRuleStepAggregateType<T extends ApprovalRuleStepAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalRuleStep]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalRuleStep[P]> : Prisma.GetScalarType<T[P], AggregateApprovalRuleStep[P]>;
};
export type ApprovalRuleStepGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleStepWhereInput;
    orderBy?: Prisma.ApprovalRuleStepOrderByWithAggregationInput | Prisma.ApprovalRuleStepOrderByWithAggregationInput[];
    by: Prisma.ApprovalRuleStepScalarFieldEnum[] | Prisma.ApprovalRuleStepScalarFieldEnum;
    having?: Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalRuleStepCountAggregateInputType | true;
    _avg?: ApprovalRuleStepAvgAggregateInputType;
    _sum?: ApprovalRuleStepSumAggregateInputType;
    _min?: ApprovalRuleStepMinAggregateInputType;
    _max?: ApprovalRuleStepMaxAggregateInputType;
};
export type ApprovalRuleStepGroupByOutputType = {
    id: string;
    approvalRuleId: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck: boolean;
    isLockedSeat: boolean;
    lockedSeatRationale: string | null;
    description: string | null;
    _count: ApprovalRuleStepCountAggregateOutputType | null;
    _avg: ApprovalRuleStepAvgAggregateOutputType | null;
    _sum: ApprovalRuleStepSumAggregateOutputType | null;
    _min: ApprovalRuleStepMinAggregateOutputType | null;
    _max: ApprovalRuleStepMaxAggregateOutputType | null;
};
export type GetApprovalRuleStepGroupByPayload<T extends ApprovalRuleStepGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalRuleStepGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalRuleStepGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalRuleStepGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalRuleStepGroupByOutputType[P]>;
}>>;
export type ApprovalRuleStepWhereInput = {
    AND?: Prisma.ApprovalRuleStepWhereInput | Prisma.ApprovalRuleStepWhereInput[];
    OR?: Prisma.ApprovalRuleStepWhereInput[];
    NOT?: Prisma.ApprovalRuleStepWhereInput | Prisma.ApprovalRuleStepWhereInput[];
    id?: Prisma.UuidFilter<"ApprovalRuleStep"> | string;
    approvalRuleId?: Prisma.UuidFilter<"ApprovalRuleStep"> | string;
    stepOrder?: Prisma.IntFilter<"ApprovalRuleStep"> | number;
    requiredFunctionCode?: Prisma.StringFilter<"ApprovalRuleStep"> | string;
    requiresAmountLimitCheck?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    isLockedSeat?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    lockedSeatRationale?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
    description?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
    approvalRule?: Prisma.XOR<Prisma.ApprovalRuleScalarRelationFilter, Prisma.ApprovalRuleWhereInput>;
    requiredFunction?: Prisma.XOR<Prisma.PlatformFunctionScalarRelationFilter, Prisma.PlatformFunctionWhereInput>;
    stepApprovals?: Prisma.WorkflowStepApprovalListRelationFilter;
};
export type ApprovalRuleStepOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    approvalRuleId?: Prisma.SortOrder;
    stepOrder?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiresAmountLimitCheck?: Prisma.SortOrder;
    isLockedSeat?: Prisma.SortOrder;
    lockedSeatRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvalRule?: Prisma.ApprovalRuleOrderByWithRelationInput;
    requiredFunction?: Prisma.PlatformFunctionOrderByWithRelationInput;
    stepApprovals?: Prisma.WorkflowStepApprovalOrderByRelationAggregateInput;
};
export type ApprovalRuleStepWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    approvalRuleId_stepOrder?: Prisma.ApprovalRuleStepApprovalRuleIdStepOrderCompoundUniqueInput;
    AND?: Prisma.ApprovalRuleStepWhereInput | Prisma.ApprovalRuleStepWhereInput[];
    OR?: Prisma.ApprovalRuleStepWhereInput[];
    NOT?: Prisma.ApprovalRuleStepWhereInput | Prisma.ApprovalRuleStepWhereInput[];
    approvalRuleId?: Prisma.UuidFilter<"ApprovalRuleStep"> | string;
    stepOrder?: Prisma.IntFilter<"ApprovalRuleStep"> | number;
    requiredFunctionCode?: Prisma.StringFilter<"ApprovalRuleStep"> | string;
    requiresAmountLimitCheck?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    isLockedSeat?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    lockedSeatRationale?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
    description?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
    approvalRule?: Prisma.XOR<Prisma.ApprovalRuleScalarRelationFilter, Prisma.ApprovalRuleWhereInput>;
    requiredFunction?: Prisma.XOR<Prisma.PlatformFunctionScalarRelationFilter, Prisma.PlatformFunctionWhereInput>;
    stepApprovals?: Prisma.WorkflowStepApprovalListRelationFilter;
}, "id" | "approvalRuleId_stepOrder">;
export type ApprovalRuleStepOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    approvalRuleId?: Prisma.SortOrder;
    stepOrder?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiresAmountLimitCheck?: Prisma.SortOrder;
    isLockedSeat?: Prisma.SortOrder;
    lockedSeatRationale?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ApprovalRuleStepCountOrderByAggregateInput;
    _avg?: Prisma.ApprovalRuleStepAvgOrderByAggregateInput;
    _max?: Prisma.ApprovalRuleStepMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalRuleStepMinOrderByAggregateInput;
    _sum?: Prisma.ApprovalRuleStepSumOrderByAggregateInput;
};
export type ApprovalRuleStepScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput | Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput | Prisma.ApprovalRuleStepScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ApprovalRuleStep"> | string;
    approvalRuleId?: Prisma.UuidWithAggregatesFilter<"ApprovalRuleStep"> | string;
    stepOrder?: Prisma.IntWithAggregatesFilter<"ApprovalRuleStep"> | number;
    requiredFunctionCode?: Prisma.StringWithAggregatesFilter<"ApprovalRuleStep"> | string;
    requiresAmountLimitCheck?: Prisma.BoolWithAggregatesFilter<"ApprovalRuleStep"> | boolean;
    isLockedSeat?: Prisma.BoolWithAggregatesFilter<"ApprovalRuleStep"> | boolean;
    lockedSeatRationale?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRuleStep"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"ApprovalRuleStep"> | string | null;
};
export type ApprovalRuleStepCreateInput = {
    id?: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    approvalRule: Prisma.ApprovalRuleCreateNestedOneWithoutStepsInput;
    requiredFunction: Prisma.PlatformFunctionCreateNestedOneWithoutApprovalStepsInput;
    stepApprovals?: Prisma.WorkflowStepApprovalCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepUncheckedCreateInput = {
    id?: string;
    approvalRuleId: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRule?: Prisma.ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput;
    requiredFunction?: Prisma.PlatformFunctionUpdateOneRequiredWithoutApprovalStepsNestedInput;
    stepApprovals?: Prisma.WorkflowStepApprovalUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepCreateManyInput = {
    id?: string;
    approvalRuleId: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
};
export type ApprovalRuleStepUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ApprovalRuleStepUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ApprovalRuleStepListRelationFilter = {
    every?: Prisma.ApprovalRuleStepWhereInput;
    some?: Prisma.ApprovalRuleStepWhereInput;
    none?: Prisma.ApprovalRuleStepWhereInput;
};
export type ApprovalRuleStepOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalRuleStepApprovalRuleIdStepOrderCompoundUniqueInput = {
    approvalRuleId: string;
    stepOrder: number;
};
export type ApprovalRuleStepCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    approvalRuleId?: Prisma.SortOrder;
    stepOrder?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiresAmountLimitCheck?: Prisma.SortOrder;
    isLockedSeat?: Prisma.SortOrder;
    lockedSeatRationale?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ApprovalRuleStepAvgOrderByAggregateInput = {
    stepOrder?: Prisma.SortOrder;
};
export type ApprovalRuleStepMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    approvalRuleId?: Prisma.SortOrder;
    stepOrder?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiresAmountLimitCheck?: Prisma.SortOrder;
    isLockedSeat?: Prisma.SortOrder;
    lockedSeatRationale?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ApprovalRuleStepMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    approvalRuleId?: Prisma.SortOrder;
    stepOrder?: Prisma.SortOrder;
    requiredFunctionCode?: Prisma.SortOrder;
    requiresAmountLimitCheck?: Prisma.SortOrder;
    isLockedSeat?: Prisma.SortOrder;
    lockedSeatRationale?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type ApprovalRuleStepSumOrderByAggregateInput = {
    stepOrder?: Prisma.SortOrder;
};
export type ApprovalRuleStepScalarRelationFilter = {
    is?: Prisma.ApprovalRuleStepWhereInput;
    isNot?: Prisma.ApprovalRuleStepWhereInput;
};
export type ApprovalRuleStepCreateNestedManyWithoutRequiredFunctionInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput> | Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyRequiredFunctionInputEnvelope;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
};
export type ApprovalRuleStepUncheckedCreateNestedManyWithoutRequiredFunctionInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput> | Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyRequiredFunctionInputEnvelope;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
};
export type ApprovalRuleStepUpdateManyWithoutRequiredFunctionNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput> | Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput[];
    upsert?: Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutRequiredFunctionInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyRequiredFunctionInputEnvelope;
    set?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    delete?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    update?: Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutRequiredFunctionInput[];
    updateMany?: Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutRequiredFunctionInput[];
    deleteMany?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
};
export type ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput> | Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput[];
    upsert?: Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutRequiredFunctionInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyRequiredFunctionInputEnvelope;
    set?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    delete?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    update?: Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutRequiredFunctionInput[];
    updateMany?: Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutRequiredFunctionInput | Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutRequiredFunctionInput[];
    deleteMany?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
};
export type ApprovalRuleStepCreateNestedManyWithoutApprovalRuleInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput> | Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyApprovalRuleInputEnvelope;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
};
export type ApprovalRuleStepUncheckedCreateNestedManyWithoutApprovalRuleInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput> | Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyApprovalRuleInputEnvelope;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
};
export type ApprovalRuleStepUpdateManyWithoutApprovalRuleNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput> | Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput[];
    upsert?: Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutApprovalRuleInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyApprovalRuleInputEnvelope;
    set?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    delete?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    update?: Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutApprovalRuleInput[];
    updateMany?: Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutApprovalRuleInput[];
    deleteMany?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
};
export type ApprovalRuleStepUncheckedUpdateManyWithoutApprovalRuleNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput> | Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput[] | Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput[];
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput | Prisma.ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput[];
    upsert?: Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpsertWithWhereUniqueWithoutApprovalRuleInput[];
    createMany?: Prisma.ApprovalRuleStepCreateManyApprovalRuleInputEnvelope;
    set?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    disconnect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    delete?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput | Prisma.ApprovalRuleStepWhereUniqueInput[];
    update?: Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpdateWithWhereUniqueWithoutApprovalRuleInput[];
    updateMany?: Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutApprovalRuleInput | Prisma.ApprovalRuleStepUpdateManyWithWhereWithoutApprovalRuleInput[];
    deleteMany?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
};
export type ApprovalRuleStepCreateNestedOneWithoutStepApprovalsInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutStepApprovalsInput>;
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutStepApprovalsInput;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput;
};
export type ApprovalRuleStepUpdateOneRequiredWithoutStepApprovalsNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutStepApprovalsInput>;
    connectOrCreate?: Prisma.ApprovalRuleStepCreateOrConnectWithoutStepApprovalsInput;
    upsert?: Prisma.ApprovalRuleStepUpsertWithoutStepApprovalsInput;
    connect?: Prisma.ApprovalRuleStepWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalRuleStepUpdateToOneWithWhereWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUpdateWithoutStepApprovalsInput>, Prisma.ApprovalRuleStepUncheckedUpdateWithoutStepApprovalsInput>;
};
export type ApprovalRuleStepCreateWithoutRequiredFunctionInput = {
    id?: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    approvalRule: Prisma.ApprovalRuleCreateNestedOneWithoutStepsInput;
    stepApprovals?: Prisma.WorkflowStepApprovalCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput = {
    id?: string;
    approvalRuleId: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepCreateOrConnectWithoutRequiredFunctionInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput>;
};
export type ApprovalRuleStepCreateManyRequiredFunctionInputEnvelope = {
    data: Prisma.ApprovalRuleStepCreateManyRequiredFunctionInput | Prisma.ApprovalRuleStepCreateManyRequiredFunctionInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRuleStepUpsertWithWhereUniqueWithoutRequiredFunctionInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutRequiredFunctionInput>;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutRequiredFunctionInput>;
};
export type ApprovalRuleStepUpdateWithWhereUniqueWithoutRequiredFunctionInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutRequiredFunctionInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutRequiredFunctionInput>;
};
export type ApprovalRuleStepUpdateManyWithWhereWithoutRequiredFunctionInput = {
    where: Prisma.ApprovalRuleStepScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateManyMutationInput, Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionInput>;
};
export type ApprovalRuleStepScalarWhereInput = {
    AND?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
    OR?: Prisma.ApprovalRuleStepScalarWhereInput[];
    NOT?: Prisma.ApprovalRuleStepScalarWhereInput | Prisma.ApprovalRuleStepScalarWhereInput[];
    id?: Prisma.UuidFilter<"ApprovalRuleStep"> | string;
    approvalRuleId?: Prisma.UuidFilter<"ApprovalRuleStep"> | string;
    stepOrder?: Prisma.IntFilter<"ApprovalRuleStep"> | number;
    requiredFunctionCode?: Prisma.StringFilter<"ApprovalRuleStep"> | string;
    requiresAmountLimitCheck?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    isLockedSeat?: Prisma.BoolFilter<"ApprovalRuleStep"> | boolean;
    lockedSeatRationale?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
    description?: Prisma.StringNullableFilter<"ApprovalRuleStep"> | string | null;
};
export type ApprovalRuleStepCreateWithoutApprovalRuleInput = {
    id?: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    requiredFunction: Prisma.PlatformFunctionCreateNestedOneWithoutApprovalStepsInput;
    stepApprovals?: Prisma.WorkflowStepApprovalCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput = {
    id?: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedCreateNestedManyWithoutApprovalRuleStepInput;
};
export type ApprovalRuleStepCreateOrConnectWithoutApprovalRuleInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput>;
};
export type ApprovalRuleStepCreateManyApprovalRuleInputEnvelope = {
    data: Prisma.ApprovalRuleStepCreateManyApprovalRuleInput | Prisma.ApprovalRuleStepCreateManyApprovalRuleInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRuleStepUpsertWithWhereUniqueWithoutApprovalRuleInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutApprovalRuleInput>;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutApprovalRuleInput>;
};
export type ApprovalRuleStepUpdateWithWhereUniqueWithoutApprovalRuleInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutApprovalRuleInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutApprovalRuleInput>;
};
export type ApprovalRuleStepUpdateManyWithWhereWithoutApprovalRuleInput = {
    where: Prisma.ApprovalRuleStepScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateManyMutationInput, Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutApprovalRuleInput>;
};
export type ApprovalRuleStepCreateWithoutStepApprovalsInput = {
    id?: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
    approvalRule: Prisma.ApprovalRuleCreateNestedOneWithoutStepsInput;
    requiredFunction: Prisma.PlatformFunctionCreateNestedOneWithoutApprovalStepsInput;
};
export type ApprovalRuleStepUncheckedCreateWithoutStepApprovalsInput = {
    id?: string;
    approvalRuleId: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
};
export type ApprovalRuleStepCreateOrConnectWithoutStepApprovalsInput = {
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutStepApprovalsInput>;
};
export type ApprovalRuleStepUpsertWithoutStepApprovalsInput = {
    update: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutStepApprovalsInput>;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedCreateWithoutStepApprovalsInput>;
    where?: Prisma.ApprovalRuleStepWhereInput;
};
export type ApprovalRuleStepUpdateToOneWithWhereWithoutStepApprovalsInput = {
    where?: Prisma.ApprovalRuleStepWhereInput;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateWithoutStepApprovalsInput, Prisma.ApprovalRuleStepUncheckedUpdateWithoutStepApprovalsInput>;
};
export type ApprovalRuleStepUpdateWithoutStepApprovalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRule?: Prisma.ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput;
    requiredFunction?: Prisma.PlatformFunctionUpdateOneRequiredWithoutApprovalStepsNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateWithoutStepApprovalsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ApprovalRuleStepCreateManyRequiredFunctionInput = {
    id?: string;
    approvalRuleId: string;
    stepOrder: number;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
};
export type ApprovalRuleStepUpdateWithoutRequiredFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRule?: Prisma.ApprovalRuleUpdateOneRequiredWithoutStepsNestedInput;
    stepApprovals?: Prisma.WorkflowStepApprovalUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateWithoutRequiredFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleId?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ApprovalRuleStepCreateManyApprovalRuleInput = {
    id?: string;
    stepOrder: number;
    requiredFunctionCode: string;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: string | null;
    description?: string | null;
};
export type ApprovalRuleStepUpdateWithoutApprovalRuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    requiredFunction?: Prisma.PlatformFunctionUpdateOneRequiredWithoutApprovalStepsNestedInput;
    stepApprovals?: Prisma.WorkflowStepApprovalUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateWithoutApprovalRuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    stepApprovals?: Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepNestedInput;
};
export type ApprovalRuleStepUncheckedUpdateManyWithoutApprovalRuleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    stepOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    requiredFunctionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    requiresAmountLimitCheck?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    isLockedSeat?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lockedSeatRationale?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type ApprovalRuleStepCountOutputType = {
    stepApprovals: number;
};
export type ApprovalRuleStepCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    stepApprovals?: boolean | ApprovalRuleStepCountOutputTypeCountStepApprovalsArgs;
};
export type ApprovalRuleStepCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepCountOutputTypeSelect<ExtArgs> | null;
};
export type ApprovalRuleStepCountOutputTypeCountStepApprovalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowStepApprovalWhereInput;
};
export type ApprovalRuleStepSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    approvalRuleId?: boolean;
    stepOrder?: boolean;
    requiredFunctionCode?: boolean;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: boolean;
    description?: boolean;
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    stepApprovals?: boolean | Prisma.ApprovalRuleStep$stepApprovalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalRuleStepCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRuleStep"]>;
export type ApprovalRuleStepSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    approvalRuleId?: boolean;
    stepOrder?: boolean;
    requiredFunctionCode?: boolean;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: boolean;
    description?: boolean;
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRuleStep"]>;
export type ApprovalRuleStepSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    approvalRuleId?: boolean;
    stepOrder?: boolean;
    requiredFunctionCode?: boolean;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: boolean;
    description?: boolean;
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalRuleStep"]>;
export type ApprovalRuleStepSelectScalar = {
    id?: boolean;
    approvalRuleId?: boolean;
    stepOrder?: boolean;
    requiredFunctionCode?: boolean;
    requiresAmountLimitCheck?: boolean;
    isLockedSeat?: boolean;
    lockedSeatRationale?: boolean;
    description?: boolean;
};
export type ApprovalRuleStepOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "approvalRuleId" | "stepOrder" | "requiredFunctionCode" | "requiresAmountLimitCheck" | "isLockedSeat" | "lockedSeatRationale" | "description", ExtArgs["result"]["approvalRuleStep"]>;
export type ApprovalRuleStepInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    stepApprovals?: boolean | Prisma.ApprovalRuleStep$stepApprovalsArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalRuleStepCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApprovalRuleStepIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
};
export type ApprovalRuleStepIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvalRule?: boolean | Prisma.ApprovalRuleDefaultArgs<ExtArgs>;
    requiredFunction?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
};
export type $ApprovalRuleStepPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalRuleStep";
    objects: {
        approvalRule: Prisma.$ApprovalRulePayload<ExtArgs>;
        requiredFunction: Prisma.$PlatformFunctionPayload<ExtArgs>;
        stepApprovals: Prisma.$WorkflowStepApprovalPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        approvalRuleId: string;
        stepOrder: number;
        requiredFunctionCode: string;
        requiresAmountLimitCheck: boolean;
        isLockedSeat: boolean;
        lockedSeatRationale: string | null;
        description: string | null;
    }, ExtArgs["result"]["approvalRuleStep"]>;
    composites: {};
};
export type ApprovalRuleStepGetPayload<S extends boolean | null | undefined | ApprovalRuleStepDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload, S>;
export type ApprovalRuleStepCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalRuleStepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalRuleStepCountAggregateInputType | true;
};
export interface ApprovalRuleStepDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalRuleStep'];
        meta: {
            name: 'ApprovalRuleStep';
        };
    };
    findUnique<T extends ApprovalRuleStepFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalRuleStepFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalRuleStepFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalRuleStepFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalRuleStepFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalRuleStepCreateArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalRuleStepCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalRuleStepCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalRuleStepDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalRuleStepUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalRuleStepDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalRuleStepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalRuleStepUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalRuleStepUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalRuleStepUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalRuleStepUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalRuleStepCountArgs>(args?: Prisma.Subset<T, ApprovalRuleStepCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalRuleStepCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalRuleStepAggregateArgs>(args: Prisma.Subset<T, ApprovalRuleStepAggregateArgs>): Prisma.PrismaPromise<GetApprovalRuleStepAggregateType<T>>;
    groupBy<T extends ApprovalRuleStepGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalRuleStepGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalRuleStepGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalRuleStepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalRuleStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalRuleStepFieldRefs;
}
export interface Prisma__ApprovalRuleStepClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    approvalRule<T extends Prisma.ApprovalRuleDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRuleDefaultArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    requiredFunction<T extends Prisma.PlatformFunctionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunctionDefaultArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    stepApprovals<T extends Prisma.ApprovalRuleStep$stepApprovalsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRuleStep$stepApprovalsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalRuleStepFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalRuleStep", 'String'>;
    readonly approvalRuleId: Prisma.FieldRef<"ApprovalRuleStep", 'String'>;
    readonly stepOrder: Prisma.FieldRef<"ApprovalRuleStep", 'Int'>;
    readonly requiredFunctionCode: Prisma.FieldRef<"ApprovalRuleStep", 'String'>;
    readonly requiresAmountLimitCheck: Prisma.FieldRef<"ApprovalRuleStep", 'Boolean'>;
    readonly isLockedSeat: Prisma.FieldRef<"ApprovalRuleStep", 'Boolean'>;
    readonly lockedSeatRationale: Prisma.FieldRef<"ApprovalRuleStep", 'String'>;
    readonly description: Prisma.FieldRef<"ApprovalRuleStep", 'String'>;
}
export type ApprovalRuleStepFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
};
export type ApprovalRuleStepFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
};
export type ApprovalRuleStepFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRuleStepWhereInput;
    orderBy?: Prisma.ApprovalRuleStepOrderByWithRelationInput | Prisma.ApprovalRuleStepOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleStepWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRuleStepScalarFieldEnum | Prisma.ApprovalRuleStepScalarFieldEnum[];
};
export type ApprovalRuleStepFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRuleStepWhereInput;
    orderBy?: Prisma.ApprovalRuleStepOrderByWithRelationInput | Prisma.ApprovalRuleStepOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleStepWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRuleStepScalarFieldEnum | Prisma.ApprovalRuleStepScalarFieldEnum[];
};
export type ApprovalRuleStepFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRuleStepWhereInput;
    orderBy?: Prisma.ApprovalRuleStepOrderByWithRelationInput | Prisma.ApprovalRuleStepOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleStepWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRuleStepScalarFieldEnum | Prisma.ApprovalRuleStepScalarFieldEnum[];
};
export type ApprovalRuleStepCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRuleStepCreateInput, Prisma.ApprovalRuleStepUncheckedCreateInput>;
};
export type ApprovalRuleStepCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalRuleStepCreateManyInput | Prisma.ApprovalRuleStepCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalRuleStepCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    data: Prisma.ApprovalRuleStepCreateManyInput | Prisma.ApprovalRuleStepCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalRuleStepIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalRuleStepUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateInput, Prisma.ApprovalRuleStepUncheckedUpdateInput>;
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
};
export type ApprovalRuleStepUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateManyMutationInput, Prisma.ApprovalRuleStepUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalRuleStepWhereInput;
    limit?: number;
};
export type ApprovalRuleStepUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalRuleStepUpdateManyMutationInput, Prisma.ApprovalRuleStepUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalRuleStepWhereInput;
    limit?: number;
    include?: Prisma.ApprovalRuleStepIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalRuleStepUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalRuleStepCreateInput, Prisma.ApprovalRuleStepUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalRuleStepUpdateInput, Prisma.ApprovalRuleStepUncheckedUpdateInput>;
};
export type ApprovalRuleStepDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
    where: Prisma.ApprovalRuleStepWhereUniqueInput;
};
export type ApprovalRuleStepDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleStepWhereInput;
    limit?: number;
};
export type ApprovalRuleStep$stepApprovalsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    where?: Prisma.WorkflowStepApprovalWhereInput;
    orderBy?: Prisma.WorkflowStepApprovalOrderByWithRelationInput | Prisma.WorkflowStepApprovalOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowStepApprovalWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WorkflowStepApprovalScalarFieldEnum | Prisma.WorkflowStepApprovalScalarFieldEnum[];
};
export type ApprovalRuleStepDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleStepSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleStepOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleStepInclude<ExtArgs> | null;
};
