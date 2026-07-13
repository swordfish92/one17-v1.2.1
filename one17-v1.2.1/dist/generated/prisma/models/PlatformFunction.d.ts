import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PlatformFunctionModel = runtime.Types.Result.DefaultSelection<Prisma.$PlatformFunctionPayload>;
export type AggregatePlatformFunction = {
    _count: PlatformFunctionCountAggregateOutputType | null;
    _min: PlatformFunctionMinAggregateOutputType | null;
    _max: PlatformFunctionMaxAggregateOutputType | null;
};
export type PlatformFunctionMinAggregateOutputType = {
    code: string | null;
    description: string | null;
};
export type PlatformFunctionMaxAggregateOutputType = {
    code: string | null;
    description: string | null;
};
export type PlatformFunctionCountAggregateOutputType = {
    code: number;
    description: number;
    _all: number;
};
export type PlatformFunctionMinAggregateInputType = {
    code?: true;
    description?: true;
};
export type PlatformFunctionMaxAggregateInputType = {
    code?: true;
    description?: true;
};
export type PlatformFunctionCountAggregateInputType = {
    code?: true;
    description?: true;
    _all?: true;
};
export type PlatformFunctionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformFunctionWhereInput;
    orderBy?: Prisma.PlatformFunctionOrderByWithRelationInput | Prisma.PlatformFunctionOrderByWithRelationInput[];
    cursor?: Prisma.PlatformFunctionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PlatformFunctionCountAggregateInputType;
    _min?: PlatformFunctionMinAggregateInputType;
    _max?: PlatformFunctionMaxAggregateInputType;
};
export type GetPlatformFunctionAggregateType<T extends PlatformFunctionAggregateArgs> = {
    [P in keyof T & keyof AggregatePlatformFunction]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePlatformFunction[P]> : Prisma.GetScalarType<T[P], AggregatePlatformFunction[P]>;
};
export type PlatformFunctionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformFunctionWhereInput;
    orderBy?: Prisma.PlatformFunctionOrderByWithAggregationInput | Prisma.PlatformFunctionOrderByWithAggregationInput[];
    by: Prisma.PlatformFunctionScalarFieldEnum[] | Prisma.PlatformFunctionScalarFieldEnum;
    having?: Prisma.PlatformFunctionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PlatformFunctionCountAggregateInputType | true;
    _min?: PlatformFunctionMinAggregateInputType;
    _max?: PlatformFunctionMaxAggregateInputType;
};
export type PlatformFunctionGroupByOutputType = {
    code: string;
    description: string | null;
    _count: PlatformFunctionCountAggregateOutputType | null;
    _min: PlatformFunctionMinAggregateOutputType | null;
    _max: PlatformFunctionMaxAggregateOutputType | null;
};
export type GetPlatformFunctionGroupByPayload<T extends PlatformFunctionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PlatformFunctionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PlatformFunctionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PlatformFunctionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PlatformFunctionGroupByOutputType[P]>;
}>>;
export type PlatformFunctionWhereInput = {
    AND?: Prisma.PlatformFunctionWhereInput | Prisma.PlatformFunctionWhereInput[];
    OR?: Prisma.PlatformFunctionWhereInput[];
    NOT?: Prisma.PlatformFunctionWhereInput | Prisma.PlatformFunctionWhereInput[];
    code?: Prisma.StringFilter<"PlatformFunction"> | string;
    description?: Prisma.StringNullableFilter<"PlatformFunction"> | string | null;
    permissions?: Prisma.RolePermissionListRelationFilter;
    approvalSteps?: Prisma.ApprovalRuleStepListRelationFilter;
    initiatorForRules?: Prisma.ApprovalRuleListRelationFilter;
    delegations?: Prisma.DelegationOfAuthorityListRelationFilter;
};
export type PlatformFunctionOrderByWithRelationInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    permissions?: Prisma.RolePermissionOrderByRelationAggregateInput;
    approvalSteps?: Prisma.ApprovalRuleStepOrderByRelationAggregateInput;
    initiatorForRules?: Prisma.ApprovalRuleOrderByRelationAggregateInput;
    delegations?: Prisma.DelegationOfAuthorityOrderByRelationAggregateInput;
};
export type PlatformFunctionWhereUniqueInput = Prisma.AtLeast<{
    code?: string;
    AND?: Prisma.PlatformFunctionWhereInput | Prisma.PlatformFunctionWhereInput[];
    OR?: Prisma.PlatformFunctionWhereInput[];
    NOT?: Prisma.PlatformFunctionWhereInput | Prisma.PlatformFunctionWhereInput[];
    description?: Prisma.StringNullableFilter<"PlatformFunction"> | string | null;
    permissions?: Prisma.RolePermissionListRelationFilter;
    approvalSteps?: Prisma.ApprovalRuleStepListRelationFilter;
    initiatorForRules?: Prisma.ApprovalRuleListRelationFilter;
    delegations?: Prisma.DelegationOfAuthorityListRelationFilter;
}, "code">;
export type PlatformFunctionOrderByWithAggregationInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.PlatformFunctionCountOrderByAggregateInput;
    _max?: Prisma.PlatformFunctionMaxOrderByAggregateInput;
    _min?: Prisma.PlatformFunctionMinOrderByAggregateInput;
};
export type PlatformFunctionScalarWhereWithAggregatesInput = {
    AND?: Prisma.PlatformFunctionScalarWhereWithAggregatesInput | Prisma.PlatformFunctionScalarWhereWithAggregatesInput[];
    OR?: Prisma.PlatformFunctionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PlatformFunctionScalarWhereWithAggregatesInput | Prisma.PlatformFunctionScalarWhereWithAggregatesInput[];
    code?: Prisma.StringWithAggregatesFilter<"PlatformFunction"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"PlatformFunction"> | string | null;
};
export type PlatformFunctionCreateInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionUncheckedCreateInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionUncheckedUpdateInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionCreateManyInput = {
    code: string;
    description?: string | null;
};
export type PlatformFunctionUpdateManyMutationInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PlatformFunctionUncheckedUpdateManyInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type PlatformFunctionCountOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PlatformFunctionMaxOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PlatformFunctionMinOrderByAggregateInput = {
    code?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
};
export type PlatformFunctionScalarRelationFilter = {
    is?: Prisma.PlatformFunctionWhereInput;
    isNot?: Prisma.PlatformFunctionWhereInput;
};
export type PlatformFunctionCreateNestedOneWithoutPermissionsInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutPermissionsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedCreateWithoutPermissionsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutPermissionsInput;
    upsert?: Prisma.PlatformFunctionUpsertWithoutPermissionsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlatformFunctionUpdateToOneWithWhereWithoutPermissionsInput, Prisma.PlatformFunctionUpdateWithoutPermissionsInput>, Prisma.PlatformFunctionUncheckedUpdateWithoutPermissionsInput>;
};
export type PlatformFunctionCreateNestedOneWithoutInitiatorForRulesInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedCreateWithoutInitiatorForRulesInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutInitiatorForRulesInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionUpdateOneRequiredWithoutInitiatorForRulesNestedInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedCreateWithoutInitiatorForRulesInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutInitiatorForRulesInput;
    upsert?: Prisma.PlatformFunctionUpsertWithoutInitiatorForRulesInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlatformFunctionUpdateToOneWithWhereWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUpdateWithoutInitiatorForRulesInput>, Prisma.PlatformFunctionUncheckedUpdateWithoutInitiatorForRulesInput>;
};
export type PlatformFunctionCreateNestedOneWithoutApprovalStepsInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedCreateWithoutApprovalStepsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutApprovalStepsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionUpdateOneRequiredWithoutApprovalStepsNestedInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedCreateWithoutApprovalStepsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutApprovalStepsInput;
    upsert?: Prisma.PlatformFunctionUpsertWithoutApprovalStepsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlatformFunctionUpdateToOneWithWhereWithoutApprovalStepsInput, Prisma.PlatformFunctionUpdateWithoutApprovalStepsInput>, Prisma.PlatformFunctionUncheckedUpdateWithoutApprovalStepsInput>;
};
export type PlatformFunctionCreateNestedOneWithoutDelegationsInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedCreateWithoutDelegationsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutDelegationsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput = {
    create?: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedCreateWithoutDelegationsInput>;
    connectOrCreate?: Prisma.PlatformFunctionCreateOrConnectWithoutDelegationsInput;
    upsert?: Prisma.PlatformFunctionUpsertWithoutDelegationsInput;
    connect?: Prisma.PlatformFunctionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PlatformFunctionUpdateToOneWithWhereWithoutDelegationsInput, Prisma.PlatformFunctionUpdateWithoutDelegationsInput>, Prisma.PlatformFunctionUncheckedUpdateWithoutDelegationsInput>;
};
export type PlatformFunctionCreateWithoutPermissionsInput = {
    code: string;
    description?: string | null;
    approvalSteps?: Prisma.ApprovalRuleStepCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionUncheckedCreateWithoutPermissionsInput = {
    code: string;
    description?: string | null;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionCreateOrConnectWithoutPermissionsInput = {
    where: Prisma.PlatformFunctionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedCreateWithoutPermissionsInput>;
};
export type PlatformFunctionUpsertWithoutPermissionsInput = {
    update: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutPermissionsInput>;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedCreateWithoutPermissionsInput>;
    where?: Prisma.PlatformFunctionWhereInput;
};
export type PlatformFunctionUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: Prisma.PlatformFunctionWhereInput;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutPermissionsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutPermissionsInput>;
};
export type PlatformFunctionUpdateWithoutPermissionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalSteps?: Prisma.ApprovalRuleStepUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionUncheckedUpdateWithoutPermissionsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionCreateWithoutInitiatorForRulesInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepCreateNestedManyWithoutRequiredFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionUncheckedCreateWithoutInitiatorForRulesInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedCreateNestedManyWithoutRequiredFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionCreateOrConnectWithoutInitiatorForRulesInput = {
    where: Prisma.PlatformFunctionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedCreateWithoutInitiatorForRulesInput>;
};
export type PlatformFunctionUpsertWithoutInitiatorForRulesInput = {
    update: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedUpdateWithoutInitiatorForRulesInput>;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedCreateWithoutInitiatorForRulesInput>;
    where?: Prisma.PlatformFunctionWhereInput;
};
export type PlatformFunctionUpdateToOneWithWhereWithoutInitiatorForRulesInput = {
    where?: Prisma.PlatformFunctionWhereInput;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutInitiatorForRulesInput, Prisma.PlatformFunctionUncheckedUpdateWithoutInitiatorForRulesInput>;
};
export type PlatformFunctionUpdateWithoutInitiatorForRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUpdateManyWithoutRequiredFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionUncheckedUpdateWithoutInitiatorForRulesInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionCreateWithoutApprovalStepsInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionUncheckedCreateWithoutApprovalStepsInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutInitiatorFunctionInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedCreateNestedManyWithoutFunctionInput;
};
export type PlatformFunctionCreateOrConnectWithoutApprovalStepsInput = {
    where: Prisma.PlatformFunctionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedCreateWithoutApprovalStepsInput>;
};
export type PlatformFunctionUpsertWithoutApprovalStepsInput = {
    update: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutApprovalStepsInput>;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedCreateWithoutApprovalStepsInput>;
    where?: Prisma.PlatformFunctionWhereInput;
};
export type PlatformFunctionUpdateToOneWithWhereWithoutApprovalStepsInput = {
    where?: Prisma.PlatformFunctionWhereInput;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutApprovalStepsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutApprovalStepsInput>;
};
export type PlatformFunctionUpdateWithoutApprovalStepsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUpdateManyWithoutFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionUncheckedUpdateWithoutApprovalStepsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutInitiatorFunctionNestedInput;
    delegations?: Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionNestedInput;
};
export type PlatformFunctionCreateWithoutDelegationsInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleCreateNestedManyWithoutInitiatorFunctionInput;
};
export type PlatformFunctionUncheckedCreateWithoutDelegationsInput = {
    code: string;
    description?: string | null;
    permissions?: Prisma.RolePermissionUncheckedCreateNestedManyWithoutFunctionInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedCreateNestedManyWithoutRequiredFunctionInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutInitiatorFunctionInput;
};
export type PlatformFunctionCreateOrConnectWithoutDelegationsInput = {
    where: Prisma.PlatformFunctionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedCreateWithoutDelegationsInput>;
};
export type PlatformFunctionUpsertWithoutDelegationsInput = {
    update: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutDelegationsInput>;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedCreateWithoutDelegationsInput>;
    where?: Prisma.PlatformFunctionWhereInput;
};
export type PlatformFunctionUpdateToOneWithWhereWithoutDelegationsInput = {
    where?: Prisma.PlatformFunctionWhereInput;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateWithoutDelegationsInput, Prisma.PlatformFunctionUncheckedUpdateWithoutDelegationsInput>;
};
export type PlatformFunctionUpdateWithoutDelegationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUpdateManyWithoutInitiatorFunctionNestedInput;
};
export type PlatformFunctionUncheckedUpdateWithoutDelegationsInput = {
    code?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    permissions?: Prisma.RolePermissionUncheckedUpdateManyWithoutFunctionNestedInput;
    approvalSteps?: Prisma.ApprovalRuleStepUncheckedUpdateManyWithoutRequiredFunctionNestedInput;
    initiatorForRules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutInitiatorFunctionNestedInput;
};
export type PlatformFunctionCountOutputType = {
    permissions: number;
    approvalSteps: number;
    initiatorForRules: number;
    delegations: number;
};
export type PlatformFunctionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | PlatformFunctionCountOutputTypeCountPermissionsArgs;
    approvalSteps?: boolean | PlatformFunctionCountOutputTypeCountApprovalStepsArgs;
    initiatorForRules?: boolean | PlatformFunctionCountOutputTypeCountInitiatorForRulesArgs;
    delegations?: boolean | PlatformFunctionCountOutputTypeCountDelegationsArgs;
};
export type PlatformFunctionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionCountOutputTypeSelect<ExtArgs> | null;
};
export type PlatformFunctionCountOutputTypeCountPermissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RolePermissionWhereInput;
};
export type PlatformFunctionCountOutputTypeCountApprovalStepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleStepWhereInput;
};
export type PlatformFunctionCountOutputTypeCountInitiatorForRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleWhereInput;
};
export type PlatformFunctionCountOutputTypeCountDelegationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DelegationOfAuthorityWhereInput;
};
export type PlatformFunctionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
    permissions?: boolean | Prisma.PlatformFunction$permissionsArgs<ExtArgs>;
    approvalSteps?: boolean | Prisma.PlatformFunction$approvalStepsArgs<ExtArgs>;
    initiatorForRules?: boolean | Prisma.PlatformFunction$initiatorForRulesArgs<ExtArgs>;
    delegations?: boolean | Prisma.PlatformFunction$delegationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlatformFunctionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["platformFunction"]>;
export type PlatformFunctionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["platformFunction"]>;
export type PlatformFunctionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    code?: boolean;
    description?: boolean;
}, ExtArgs["result"]["platformFunction"]>;
export type PlatformFunctionSelectScalar = {
    code?: boolean;
    description?: boolean;
};
export type PlatformFunctionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"code" | "description", ExtArgs["result"]["platformFunction"]>;
export type PlatformFunctionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    permissions?: boolean | Prisma.PlatformFunction$permissionsArgs<ExtArgs>;
    approvalSteps?: boolean | Prisma.PlatformFunction$approvalStepsArgs<ExtArgs>;
    initiatorForRules?: boolean | Prisma.PlatformFunction$initiatorForRulesArgs<ExtArgs>;
    delegations?: boolean | Prisma.PlatformFunction$delegationsArgs<ExtArgs>;
    _count?: boolean | Prisma.PlatformFunctionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PlatformFunctionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type PlatformFunctionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $PlatformFunctionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PlatformFunction";
    objects: {
        permissions: Prisma.$RolePermissionPayload<ExtArgs>[];
        approvalSteps: Prisma.$ApprovalRuleStepPayload<ExtArgs>[];
        initiatorForRules: Prisma.$ApprovalRulePayload<ExtArgs>[];
        delegations: Prisma.$DelegationOfAuthorityPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        code: string;
        description: string | null;
    }, ExtArgs["result"]["platformFunction"]>;
    composites: {};
};
export type PlatformFunctionGetPayload<S extends boolean | null | undefined | PlatformFunctionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload, S>;
export type PlatformFunctionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PlatformFunctionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PlatformFunctionCountAggregateInputType | true;
};
export interface PlatformFunctionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PlatformFunction'];
        meta: {
            name: 'PlatformFunction';
        };
    };
    findUnique<T extends PlatformFunctionFindUniqueArgs>(args: Prisma.SelectSubset<T, PlatformFunctionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PlatformFunctionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PlatformFunctionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PlatformFunctionFindFirstArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionFindFirstArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PlatformFunctionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PlatformFunctionFindManyArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PlatformFunctionCreateArgs>(args: Prisma.SelectSubset<T, PlatformFunctionCreateArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PlatformFunctionCreateManyArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PlatformFunctionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PlatformFunctionDeleteArgs>(args: Prisma.SelectSubset<T, PlatformFunctionDeleteArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PlatformFunctionUpdateArgs>(args: Prisma.SelectSubset<T, PlatformFunctionUpdateArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PlatformFunctionDeleteManyArgs>(args?: Prisma.SelectSubset<T, PlatformFunctionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PlatformFunctionUpdateManyArgs>(args: Prisma.SelectSubset<T, PlatformFunctionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PlatformFunctionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PlatformFunctionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PlatformFunctionUpsertArgs>(args: Prisma.SelectSubset<T, PlatformFunctionUpsertArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PlatformFunctionCountArgs>(args?: Prisma.Subset<T, PlatformFunctionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PlatformFunctionCountAggregateOutputType> : number>;
    aggregate<T extends PlatformFunctionAggregateArgs>(args: Prisma.Subset<T, PlatformFunctionAggregateArgs>): Prisma.PrismaPromise<GetPlatformFunctionAggregateType<T>>;
    groupBy<T extends PlatformFunctionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PlatformFunctionGroupByArgs['orderBy'];
    } : {
        orderBy?: PlatformFunctionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PlatformFunctionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlatformFunctionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PlatformFunctionFieldRefs;
}
export interface Prisma__PlatformFunctionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    permissions<T extends Prisma.PlatformFunction$permissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunction$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    approvalSteps<T extends Prisma.PlatformFunction$approvalStepsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunction$approvalStepsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    initiatorForRules<T extends Prisma.PlatformFunction$initiatorForRulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunction$initiatorForRulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    delegations<T extends Prisma.PlatformFunction$delegationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunction$delegationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PlatformFunctionFieldRefs {
    readonly code: Prisma.FieldRef<"PlatformFunction", 'String'>;
    readonly description: Prisma.FieldRef<"PlatformFunction", 'String'>;
}
export type PlatformFunctionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where?: Prisma.PlatformFunctionWhereInput;
    orderBy?: Prisma.PlatformFunctionOrderByWithRelationInput | Prisma.PlatformFunctionOrderByWithRelationInput[];
    cursor?: Prisma.PlatformFunctionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformFunctionScalarFieldEnum | Prisma.PlatformFunctionScalarFieldEnum[];
};
export type PlatformFunctionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where?: Prisma.PlatformFunctionWhereInput;
    orderBy?: Prisma.PlatformFunctionOrderByWithRelationInput | Prisma.PlatformFunctionOrderByWithRelationInput[];
    cursor?: Prisma.PlatformFunctionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformFunctionScalarFieldEnum | Prisma.PlatformFunctionScalarFieldEnum[];
};
export type PlatformFunctionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where?: Prisma.PlatformFunctionWhereInput;
    orderBy?: Prisma.PlatformFunctionOrderByWithRelationInput | Prisma.PlatformFunctionOrderByWithRelationInput[];
    cursor?: Prisma.PlatformFunctionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PlatformFunctionScalarFieldEnum | Prisma.PlatformFunctionScalarFieldEnum[];
};
export type PlatformFunctionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformFunctionCreateInput, Prisma.PlatformFunctionUncheckedCreateInput>;
};
export type PlatformFunctionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PlatformFunctionCreateManyInput | Prisma.PlatformFunctionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlatformFunctionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    data: Prisma.PlatformFunctionCreateManyInput | Prisma.PlatformFunctionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PlatformFunctionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateInput, Prisma.PlatformFunctionUncheckedUpdateInput>;
    where: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateManyMutationInput, Prisma.PlatformFunctionUncheckedUpdateManyInput>;
    where?: Prisma.PlatformFunctionWhereInput;
    limit?: number;
};
export type PlatformFunctionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PlatformFunctionUpdateManyMutationInput, Prisma.PlatformFunctionUncheckedUpdateManyInput>;
    where?: Prisma.PlatformFunctionWhereInput;
    limit?: number;
};
export type PlatformFunctionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where: Prisma.PlatformFunctionWhereUniqueInput;
    create: Prisma.XOR<Prisma.PlatformFunctionCreateInput, Prisma.PlatformFunctionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PlatformFunctionUpdateInput, Prisma.PlatformFunctionUncheckedUpdateInput>;
};
export type PlatformFunctionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
    where: Prisma.PlatformFunctionWhereUniqueInput;
};
export type PlatformFunctionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PlatformFunctionWhereInput;
    limit?: number;
};
export type PlatformFunction$permissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RolePermissionSelect<ExtArgs> | null;
    omit?: Prisma.RolePermissionOmit<ExtArgs> | null;
    include?: Prisma.RolePermissionInclude<ExtArgs> | null;
    where?: Prisma.RolePermissionWhereInput;
    orderBy?: Prisma.RolePermissionOrderByWithRelationInput | Prisma.RolePermissionOrderByWithRelationInput[];
    cursor?: Prisma.RolePermissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RolePermissionScalarFieldEnum | Prisma.RolePermissionScalarFieldEnum[];
};
export type PlatformFunction$approvalStepsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type PlatformFunction$initiatorForRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalRuleSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalRuleOmit<ExtArgs> | null;
    include?: Prisma.ApprovalRuleInclude<ExtArgs> | null;
    where?: Prisma.ApprovalRuleWhereInput;
    orderBy?: Prisma.ApprovalRuleOrderByWithRelationInput | Prisma.ApprovalRuleOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalRuleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalRuleScalarFieldEnum | Prisma.ApprovalRuleScalarFieldEnum[];
};
export type PlatformFunction$delegationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    where?: Prisma.DelegationOfAuthorityWhereInput;
    orderBy?: Prisma.DelegationOfAuthorityOrderByWithRelationInput | Prisma.DelegationOfAuthorityOrderByWithRelationInput[];
    cursor?: Prisma.DelegationOfAuthorityWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DelegationOfAuthorityScalarFieldEnum | Prisma.DelegationOfAuthorityScalarFieldEnum[];
};
export type PlatformFunctionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PlatformFunctionSelect<ExtArgs> | null;
    omit?: Prisma.PlatformFunctionOmit<ExtArgs> | null;
    include?: Prisma.PlatformFunctionInclude<ExtArgs> | null;
};
