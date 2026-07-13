import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DelegationOfAuthorityModel = runtime.Types.Result.DefaultSelection<Prisma.$DelegationOfAuthorityPayload>;
export type AggregateDelegationOfAuthority = {
    _count: DelegationOfAuthorityCountAggregateOutputType | null;
    _avg: DelegationOfAuthorityAvgAggregateOutputType | null;
    _sum: DelegationOfAuthoritySumAggregateOutputType | null;
    _min: DelegationOfAuthorityMinAggregateOutputType | null;
    _max: DelegationOfAuthorityMaxAggregateOutputType | null;
};
export type DelegationOfAuthorityAvgAggregateOutputType = {
    limitKobo: number | null;
};
export type DelegationOfAuthoritySumAggregateOutputType = {
    limitKobo: bigint | null;
};
export type DelegationOfAuthorityMinAggregateOutputType = {
    id: string | null;
    functionCode: string | null;
    delegateUserId: string | null;
    delegatedByUserId: string | null;
    limitKobo: bigint | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    status: $Enums.DelegationStatus | null;
    reason: string | null;
    boardInstrumentRef: string | null;
    workflowInstanceId: string | null;
    revokedAt: Date | null;
    revokedByUserId: string | null;
    createdAt: Date | null;
};
export type DelegationOfAuthorityMaxAggregateOutputType = {
    id: string | null;
    functionCode: string | null;
    delegateUserId: string | null;
    delegatedByUserId: string | null;
    limitKobo: bigint | null;
    effectiveFrom: Date | null;
    effectiveTo: Date | null;
    status: $Enums.DelegationStatus | null;
    reason: string | null;
    boardInstrumentRef: string | null;
    workflowInstanceId: string | null;
    revokedAt: Date | null;
    revokedByUserId: string | null;
    createdAt: Date | null;
};
export type DelegationOfAuthorityCountAggregateOutputType = {
    id: number;
    functionCode: number;
    delegateUserId: number;
    delegatedByUserId: number;
    limitKobo: number;
    effectiveFrom: number;
    effectiveTo: number;
    status: number;
    reason: number;
    boardInstrumentRef: number;
    workflowInstanceId: number;
    revokedAt: number;
    revokedByUserId: number;
    createdAt: number;
    _all: number;
};
export type DelegationOfAuthorityAvgAggregateInputType = {
    limitKobo?: true;
};
export type DelegationOfAuthoritySumAggregateInputType = {
    limitKobo?: true;
};
export type DelegationOfAuthorityMinAggregateInputType = {
    id?: true;
    functionCode?: true;
    delegateUserId?: true;
    delegatedByUserId?: true;
    limitKobo?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    status?: true;
    reason?: true;
    boardInstrumentRef?: true;
    workflowInstanceId?: true;
    revokedAt?: true;
    revokedByUserId?: true;
    createdAt?: true;
};
export type DelegationOfAuthorityMaxAggregateInputType = {
    id?: true;
    functionCode?: true;
    delegateUserId?: true;
    delegatedByUserId?: true;
    limitKobo?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    status?: true;
    reason?: true;
    boardInstrumentRef?: true;
    workflowInstanceId?: true;
    revokedAt?: true;
    revokedByUserId?: true;
    createdAt?: true;
};
export type DelegationOfAuthorityCountAggregateInputType = {
    id?: true;
    functionCode?: true;
    delegateUserId?: true;
    delegatedByUserId?: true;
    limitKobo?: true;
    effectiveFrom?: true;
    effectiveTo?: true;
    status?: true;
    reason?: true;
    boardInstrumentRef?: true;
    workflowInstanceId?: true;
    revokedAt?: true;
    revokedByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type DelegationOfAuthorityAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DelegationOfAuthorityWhereInput;
    orderBy?: Prisma.DelegationOfAuthorityOrderByWithRelationInput | Prisma.DelegationOfAuthorityOrderByWithRelationInput[];
    cursor?: Prisma.DelegationOfAuthorityWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DelegationOfAuthorityCountAggregateInputType;
    _avg?: DelegationOfAuthorityAvgAggregateInputType;
    _sum?: DelegationOfAuthoritySumAggregateInputType;
    _min?: DelegationOfAuthorityMinAggregateInputType;
    _max?: DelegationOfAuthorityMaxAggregateInputType;
};
export type GetDelegationOfAuthorityAggregateType<T extends DelegationOfAuthorityAggregateArgs> = {
    [P in keyof T & keyof AggregateDelegationOfAuthority]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDelegationOfAuthority[P]> : Prisma.GetScalarType<T[P], AggregateDelegationOfAuthority[P]>;
};
export type DelegationOfAuthorityGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DelegationOfAuthorityWhereInput;
    orderBy?: Prisma.DelegationOfAuthorityOrderByWithAggregationInput | Prisma.DelegationOfAuthorityOrderByWithAggregationInput[];
    by: Prisma.DelegationOfAuthorityScalarFieldEnum[] | Prisma.DelegationOfAuthorityScalarFieldEnum;
    having?: Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DelegationOfAuthorityCountAggregateInputType | true;
    _avg?: DelegationOfAuthorityAvgAggregateInputType;
    _sum?: DelegationOfAuthoritySumAggregateInputType;
    _min?: DelegationOfAuthorityMinAggregateInputType;
    _max?: DelegationOfAuthorityMaxAggregateInputType;
};
export type DelegationOfAuthorityGroupByOutputType = {
    id: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo: bigint | null;
    effectiveFrom: Date;
    effectiveTo: Date | null;
    status: $Enums.DelegationStatus;
    reason: string | null;
    boardInstrumentRef: string | null;
    workflowInstanceId: string | null;
    revokedAt: Date | null;
    revokedByUserId: string | null;
    createdAt: Date;
    _count: DelegationOfAuthorityCountAggregateOutputType | null;
    _avg: DelegationOfAuthorityAvgAggregateOutputType | null;
    _sum: DelegationOfAuthoritySumAggregateOutputType | null;
    _min: DelegationOfAuthorityMinAggregateOutputType | null;
    _max: DelegationOfAuthorityMaxAggregateOutputType | null;
};
export type GetDelegationOfAuthorityGroupByPayload<T extends DelegationOfAuthorityGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DelegationOfAuthorityGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DelegationOfAuthorityGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DelegationOfAuthorityGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DelegationOfAuthorityGroupByOutputType[P]>;
}>>;
export type DelegationOfAuthorityWhereInput = {
    AND?: Prisma.DelegationOfAuthorityWhereInput | Prisma.DelegationOfAuthorityWhereInput[];
    OR?: Prisma.DelegationOfAuthorityWhereInput[];
    NOT?: Prisma.DelegationOfAuthorityWhereInput | Prisma.DelegationOfAuthorityWhereInput[];
    id?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    functionCode?: Prisma.StringFilter<"DelegationOfAuthority"> | string;
    delegateUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    delegatedByUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    limitKobo?: Prisma.BigIntNullableFilter<"DelegationOfAuthority"> | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    status?: Prisma.EnumDelegationStatusFilter<"DelegationOfAuthority"> | $Enums.DelegationStatus;
    reason?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    boardInstrumentRef?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"DelegationOfAuthority"> | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    revokedByUserId?: Prisma.UuidNullableFilter<"DelegationOfAuthority"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
    function?: Prisma.XOR<Prisma.PlatformFunctionScalarRelationFilter, Prisma.PlatformFunctionWhereInput>;
    delegate?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    delegatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    revokedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
};
export type DelegationOfAuthorityOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    functionCode?: Prisma.SortOrder;
    delegateUserId?: Prisma.SortOrder;
    delegatedByUserId?: Prisma.SortOrder;
    limitKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardInstrumentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    function?: Prisma.PlatformFunctionOrderByWithRelationInput;
    delegate?: Prisma.AppUserOrderByWithRelationInput;
    delegatedBy?: Prisma.AppUserOrderByWithRelationInput;
    revokedBy?: Prisma.AppUserOrderByWithRelationInput;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
};
export type DelegationOfAuthorityWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.DelegationOfAuthorityWhereInput | Prisma.DelegationOfAuthorityWhereInput[];
    OR?: Prisma.DelegationOfAuthorityWhereInput[];
    NOT?: Prisma.DelegationOfAuthorityWhereInput | Prisma.DelegationOfAuthorityWhereInput[];
    functionCode?: Prisma.StringFilter<"DelegationOfAuthority"> | string;
    delegateUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    delegatedByUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    limitKobo?: Prisma.BigIntNullableFilter<"DelegationOfAuthority"> | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    status?: Prisma.EnumDelegationStatusFilter<"DelegationOfAuthority"> | $Enums.DelegationStatus;
    reason?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    boardInstrumentRef?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    revokedByUserId?: Prisma.UuidNullableFilter<"DelegationOfAuthority"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
    function?: Prisma.XOR<Prisma.PlatformFunctionScalarRelationFilter, Prisma.PlatformFunctionWhereInput>;
    delegate?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    delegatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    revokedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceNullableScalarRelationFilter, Prisma.WorkflowInstanceWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type DelegationOfAuthorityOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    functionCode?: Prisma.SortOrder;
    delegateUserId?: Prisma.SortOrder;
    delegatedByUserId?: Prisma.SortOrder;
    limitKobo?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardInstrumentRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    revokedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DelegationOfAuthorityCountOrderByAggregateInput;
    _avg?: Prisma.DelegationOfAuthorityAvgOrderByAggregateInput;
    _max?: Prisma.DelegationOfAuthorityMaxOrderByAggregateInput;
    _min?: Prisma.DelegationOfAuthorityMinOrderByAggregateInput;
    _sum?: Prisma.DelegationOfAuthoritySumOrderByAggregateInput;
};
export type DelegationOfAuthorityScalarWhereWithAggregatesInput = {
    AND?: Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput | Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput[];
    OR?: Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput | Prisma.DelegationOfAuthorityScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"DelegationOfAuthority"> | string;
    functionCode?: Prisma.StringWithAggregatesFilter<"DelegationOfAuthority"> | string;
    delegateUserId?: Prisma.UuidWithAggregatesFilter<"DelegationOfAuthority"> | string;
    delegatedByUserId?: Prisma.UuidWithAggregatesFilter<"DelegationOfAuthority"> | string;
    limitKobo?: Prisma.BigIntNullableWithAggregatesFilter<"DelegationOfAuthority"> | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeWithAggregatesFilter<"DelegationOfAuthority"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableWithAggregatesFilter<"DelegationOfAuthority"> | Date | string | null;
    status?: Prisma.EnumDelegationStatusWithAggregatesFilter<"DelegationOfAuthority"> | $Enums.DelegationStatus;
    reason?: Prisma.StringNullableWithAggregatesFilter<"DelegationOfAuthority"> | string | null;
    boardInstrumentRef?: Prisma.StringNullableWithAggregatesFilter<"DelegationOfAuthority"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"DelegationOfAuthority"> | string | null;
    revokedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"DelegationOfAuthority"> | Date | string | null;
    revokedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"DelegationOfAuthority"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DelegationOfAuthority"> | Date | string;
};
export type DelegationOfAuthorityCreateInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    function: Prisma.PlatformFunctionCreateNestedOneWithoutDelegationsInput;
    delegate: Prisma.AppUserCreateNestedOneWithoutDelegationsReceivedInput;
    delegatedBy: Prisma.AppUserCreateNestedOneWithoutDelegationsGrantedInput;
    revokedBy?: Prisma.AppUserCreateNestedOneWithoutDelegationsRevokedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutDelegationGrantInput;
};
export type DelegationOfAuthorityUncheckedCreateInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    function?: Prisma.PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput;
    delegate?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsReceivedNestedInput;
    delegatedBy?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsGrantedNestedInput;
    revokedBy?: Prisma.AppUserUpdateOneWithoutDelegationsRevokedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutDelegationGrantNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityCreateManyInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityListRelationFilter = {
    every?: Prisma.DelegationOfAuthorityWhereInput;
    some?: Prisma.DelegationOfAuthorityWhereInput;
    none?: Prisma.DelegationOfAuthorityWhereInput;
};
export type DelegationOfAuthorityOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DelegationOfAuthorityNullableScalarRelationFilter = {
    is?: Prisma.DelegationOfAuthorityWhereInput | null;
    isNot?: Prisma.DelegationOfAuthorityWhereInput | null;
};
export type DelegationOfAuthorityCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    functionCode?: Prisma.SortOrder;
    delegateUserId?: Prisma.SortOrder;
    delegatedByUserId?: Prisma.SortOrder;
    limitKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    boardInstrumentRef?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DelegationOfAuthorityAvgOrderByAggregateInput = {
    limitKobo?: Prisma.SortOrder;
};
export type DelegationOfAuthorityMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    functionCode?: Prisma.SortOrder;
    delegateUserId?: Prisma.SortOrder;
    delegatedByUserId?: Prisma.SortOrder;
    limitKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    boardInstrumentRef?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DelegationOfAuthorityMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    functionCode?: Prisma.SortOrder;
    delegateUserId?: Prisma.SortOrder;
    delegatedByUserId?: Prisma.SortOrder;
    limitKobo?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    effectiveTo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    boardInstrumentRef?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    revokedAt?: Prisma.SortOrder;
    revokedByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DelegationOfAuthoritySumOrderByAggregateInput = {
    limitKobo?: Prisma.SortOrder;
};
export type DelegationOfAuthorityCreateNestedManyWithoutDelegateInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegateInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegateInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityCreateNestedManyWithoutDelegatedByInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegatedByInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityCreateNestedManyWithoutRevokedByInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput> | Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyRevokedByInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUncheckedCreateNestedManyWithoutDelegateInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegateInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegateInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUncheckedCreateNestedManyWithoutDelegatedByInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegatedByInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUncheckedCreateNestedManyWithoutRevokedByInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput> | Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyRevokedByInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUpdateManyWithoutDelegateNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegateInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegateInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegateInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegateInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegateInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegateInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegateInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegateInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUpdateManyWithoutDelegatedByNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegatedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegatedByInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegatedByInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegatedByInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUpdateManyWithoutRevokedByNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput> | Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutRevokedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyRevokedByInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutRevokedByInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutRevokedByInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutDelegateNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegateInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegateInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegateInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegateInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegateInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegateInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegateInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegateInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegateInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutDelegatedByNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput> | Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegatedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyDelegatedByInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegatedByInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegatedByInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutDelegatedByInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutRevokedByNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput> | Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutRevokedByInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyRevokedByInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutRevokedByInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutRevokedByInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutRevokedByInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityCreateNestedManyWithoutFunctionInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput> | Prisma.DelegationOfAuthorityCreateWithoutFunctionInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyFunctionInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUncheckedCreateNestedManyWithoutFunctionInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput> | Prisma.DelegationOfAuthorityCreateWithoutFunctionInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyFunctionInputEnvelope;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
};
export type DelegationOfAuthorityUpdateManyWithoutFunctionNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput> | Prisma.DelegationOfAuthorityCreateWithoutFunctionInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutFunctionInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutFunctionInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyFunctionInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutFunctionInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutFunctionInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutFunctionInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutFunctionInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput> | Prisma.DelegationOfAuthorityCreateWithoutFunctionInput[] | Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput[];
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput | Prisma.DelegationOfAuthorityCreateOrConnectWithoutFunctionInput[];
    upsert?: Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutFunctionInput | Prisma.DelegationOfAuthorityUpsertWithWhereUniqueWithoutFunctionInput[];
    createMany?: Prisma.DelegationOfAuthorityCreateManyFunctionInputEnvelope;
    set?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    disconnect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    delete?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput | Prisma.DelegationOfAuthorityWhereUniqueInput[];
    update?: Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutFunctionInput | Prisma.DelegationOfAuthorityUpdateWithWhereUniqueWithoutFunctionInput[];
    updateMany?: Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutFunctionInput | Prisma.DelegationOfAuthorityUpdateManyWithWhereWithoutFunctionInput[];
    deleteMany?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
};
export type DelegationOfAuthorityCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityUncheckedCreateNestedOneWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutWorkflowInstanceInput;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.DelegationOfAuthorityUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.DelegationOfAuthorityWhereInput | boolean;
    delete?: Prisma.DelegationOfAuthorityWhereInput | boolean;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DelegationOfAuthorityUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUpdateWithoutWorkflowInstanceInput>, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type DelegationOfAuthorityUncheckedUpdateOneWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
    connectOrCreate?: Prisma.DelegationOfAuthorityCreateOrConnectWithoutWorkflowInstanceInput;
    upsert?: Prisma.DelegationOfAuthorityUpsertWithoutWorkflowInstanceInput;
    disconnect?: Prisma.DelegationOfAuthorityWhereInput | boolean;
    delete?: Prisma.DelegationOfAuthorityWhereInput | boolean;
    connect?: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DelegationOfAuthorityUpdateToOneWithWhereWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUpdateWithoutWorkflowInstanceInput>, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type EnumDelegationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DelegationStatus;
};
export type DelegationOfAuthorityCreateWithoutDelegateInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    function: Prisma.PlatformFunctionCreateNestedOneWithoutDelegationsInput;
    delegatedBy: Prisma.AppUserCreateNestedOneWithoutDelegationsGrantedInput;
    revokedBy?: Prisma.AppUserCreateNestedOneWithoutDelegationsRevokedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutDelegationGrantInput;
};
export type DelegationOfAuthorityUncheckedCreateWithoutDelegateInput = {
    id?: string;
    functionCode: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateOrConnectWithoutDelegateInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput>;
};
export type DelegationOfAuthorityCreateManyDelegateInputEnvelope = {
    data: Prisma.DelegationOfAuthorityCreateManyDelegateInput | Prisma.DelegationOfAuthorityCreateManyDelegateInput[];
    skipDuplicates?: boolean;
};
export type DelegationOfAuthorityCreateWithoutDelegatedByInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    function: Prisma.PlatformFunctionCreateNestedOneWithoutDelegationsInput;
    delegate: Prisma.AppUserCreateNestedOneWithoutDelegationsReceivedInput;
    revokedBy?: Prisma.AppUserCreateNestedOneWithoutDelegationsRevokedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutDelegationGrantInput;
};
export type DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateOrConnectWithoutDelegatedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput>;
};
export type DelegationOfAuthorityCreateManyDelegatedByInputEnvelope = {
    data: Prisma.DelegationOfAuthorityCreateManyDelegatedByInput | Prisma.DelegationOfAuthorityCreateManyDelegatedByInput[];
    skipDuplicates?: boolean;
};
export type DelegationOfAuthorityCreateWithoutRevokedByInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    function: Prisma.PlatformFunctionCreateNestedOneWithoutDelegationsInput;
    delegate: Prisma.AppUserCreateNestedOneWithoutDelegationsReceivedInput;
    delegatedBy: Prisma.AppUserCreateNestedOneWithoutDelegationsGrantedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutDelegationGrantInput;
};
export type DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateOrConnectWithoutRevokedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput>;
};
export type DelegationOfAuthorityCreateManyRevokedByInputEnvelope = {
    data: Prisma.DelegationOfAuthorityCreateManyRevokedByInput | Prisma.DelegationOfAuthorityCreateManyRevokedByInput[];
    skipDuplicates?: boolean;
};
export type DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegateInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutDelegateInput>;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegateInput>;
};
export type DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegateInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutDelegateInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutDelegateInput>;
};
export type DelegationOfAuthorityUpdateManyWithWhereWithoutDelegateInput = {
    where: Prisma.DelegationOfAuthorityScalarWhereInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutDelegateInput>;
};
export type DelegationOfAuthorityScalarWhereInput = {
    AND?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
    OR?: Prisma.DelegationOfAuthorityScalarWhereInput[];
    NOT?: Prisma.DelegationOfAuthorityScalarWhereInput | Prisma.DelegationOfAuthorityScalarWhereInput[];
    id?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    functionCode?: Prisma.StringFilter<"DelegationOfAuthority"> | string;
    delegateUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    delegatedByUserId?: Prisma.UuidFilter<"DelegationOfAuthority"> | string;
    limitKobo?: Prisma.BigIntNullableFilter<"DelegationOfAuthority"> | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
    effectiveTo?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    status?: Prisma.EnumDelegationStatusFilter<"DelegationOfAuthority"> | $Enums.DelegationStatus;
    reason?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    boardInstrumentRef?: Prisma.StringNullableFilter<"DelegationOfAuthority"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"DelegationOfAuthority"> | string | null;
    revokedAt?: Prisma.DateTimeNullableFilter<"DelegationOfAuthority"> | Date | string | null;
    revokedByUserId?: Prisma.UuidNullableFilter<"DelegationOfAuthority"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"DelegationOfAuthority"> | Date | string;
};
export type DelegationOfAuthorityUpsertWithWhereUniqueWithoutDelegatedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutDelegatedByInput>;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutDelegatedByInput>;
};
export type DelegationOfAuthorityUpdateWithWhereUniqueWithoutDelegatedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutDelegatedByInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutDelegatedByInput>;
};
export type DelegationOfAuthorityUpdateManyWithWhereWithoutDelegatedByInput = {
    where: Prisma.DelegationOfAuthorityScalarWhereInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutDelegatedByInput>;
};
export type DelegationOfAuthorityUpsertWithWhereUniqueWithoutRevokedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutRevokedByInput>;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutRevokedByInput>;
};
export type DelegationOfAuthorityUpdateWithWhereUniqueWithoutRevokedByInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutRevokedByInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutRevokedByInput>;
};
export type DelegationOfAuthorityUpdateManyWithWhereWithoutRevokedByInput = {
    where: Prisma.DelegationOfAuthorityScalarWhereInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutRevokedByInput>;
};
export type DelegationOfAuthorityCreateWithoutFunctionInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    delegate: Prisma.AppUserCreateNestedOneWithoutDelegationsReceivedInput;
    delegatedBy: Prisma.AppUserCreateNestedOneWithoutDelegationsGrantedInput;
    revokedBy?: Prisma.AppUserCreateNestedOneWithoutDelegationsRevokedInput;
    workflowInstance?: Prisma.WorkflowInstanceCreateNestedOneWithoutDelegationGrantInput;
};
export type DelegationOfAuthorityUncheckedCreateWithoutFunctionInput = {
    id?: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateOrConnectWithoutFunctionInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput>;
};
export type DelegationOfAuthorityCreateManyFunctionInputEnvelope = {
    data: Prisma.DelegationOfAuthorityCreateManyFunctionInput | Prisma.DelegationOfAuthorityCreateManyFunctionInput[];
    skipDuplicates?: boolean;
};
export type DelegationOfAuthorityUpsertWithWhereUniqueWithoutFunctionInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutFunctionInput>;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutFunctionInput>;
};
export type DelegationOfAuthorityUpdateWithWhereUniqueWithoutFunctionInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutFunctionInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutFunctionInput>;
};
export type DelegationOfAuthorityUpdateManyWithWhereWithoutFunctionInput = {
    where: Prisma.DelegationOfAuthorityScalarWhereInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionInput>;
};
export type DelegationOfAuthorityCreateWithoutWorkflowInstanceInput = {
    id?: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
    function: Prisma.PlatformFunctionCreateNestedOneWithoutDelegationsInput;
    delegate: Prisma.AppUserCreateNestedOneWithoutDelegationsReceivedInput;
    delegatedBy: Prisma.AppUserCreateNestedOneWithoutDelegationsGrantedInput;
    revokedBy?: Prisma.AppUserCreateNestedOneWithoutDelegationsRevokedInput;
};
export type DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type DelegationOfAuthorityUpsertWithoutWorkflowInstanceInput = {
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedCreateWithoutWorkflowInstanceInput>;
    where?: Prisma.DelegationOfAuthorityWhereInput;
};
export type DelegationOfAuthorityUpdateToOneWithWhereWithoutWorkflowInstanceInput = {
    where?: Prisma.DelegationOfAuthorityWhereInput;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateWithoutWorkflowInstanceInput, Prisma.DelegationOfAuthorityUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type DelegationOfAuthorityUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    function?: Prisma.PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput;
    delegate?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsReceivedNestedInput;
    delegatedBy?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsGrantedNestedInput;
    revokedBy?: Prisma.AppUserUpdateOneWithoutDelegationsRevokedNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityCreateManyDelegateInput = {
    id?: string;
    functionCode: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateManyDelegatedByInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityCreateManyRevokedByInput = {
    id?: string;
    functionCode: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityUpdateWithoutDelegateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    function?: Prisma.PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput;
    delegatedBy?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsGrantedNestedInput;
    revokedBy?: Prisma.AppUserUpdateOneWithoutDelegationsRevokedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutDelegationGrantNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateWithoutDelegateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutDelegateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUpdateWithoutDelegatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    function?: Prisma.PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput;
    delegate?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsReceivedNestedInput;
    revokedBy?: Prisma.AppUserUpdateOneWithoutDelegationsRevokedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutDelegationGrantNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateWithoutDelegatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutDelegatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUpdateWithoutRevokedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    function?: Prisma.PlatformFunctionUpdateOneRequiredWithoutDelegationsNestedInput;
    delegate?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsReceivedNestedInput;
    delegatedBy?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsGrantedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutDelegationGrantNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateWithoutRevokedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutRevokedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    functionCode?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityCreateManyFunctionInput = {
    id?: string;
    delegateUserId: string;
    delegatedByUserId: string;
    limitKobo?: bigint | number | null;
    effectiveFrom: Date | string;
    effectiveTo?: Date | string | null;
    status?: $Enums.DelegationStatus;
    reason?: string | null;
    boardInstrumentRef?: string | null;
    workflowInstanceId?: string | null;
    revokedAt?: Date | string | null;
    revokedByUserId?: string | null;
    createdAt?: Date | string;
};
export type DelegationOfAuthorityUpdateWithoutFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    delegate?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsReceivedNestedInput;
    delegatedBy?: Prisma.AppUserUpdateOneRequiredWithoutDelegationsGrantedNestedInput;
    revokedBy?: Prisma.AppUserUpdateOneWithoutDelegationsRevokedNestedInput;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneWithoutDelegationGrantNestedInput;
};
export type DelegationOfAuthorityUncheckedUpdateWithoutFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthorityUncheckedUpdateManyWithoutFunctionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    delegateUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    delegatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    limitKobo?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    effectiveFrom?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    effectiveTo?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    status?: Prisma.EnumDelegationStatusFieldUpdateOperationsInput | $Enums.DelegationStatus;
    reason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardInstrumentRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revokedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    revokedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DelegationOfAuthoritySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    functionCode?: boolean;
    delegateUserId?: boolean;
    delegatedByUserId?: boolean;
    limitKobo?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    status?: boolean;
    reason?: boolean;
    boardInstrumentRef?: boolean;
    workflowInstanceId?: boolean;
    revokedAt?: boolean;
    revokedByUserId?: boolean;
    createdAt?: boolean;
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["delegationOfAuthority"]>;
export type DelegationOfAuthoritySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    functionCode?: boolean;
    delegateUserId?: boolean;
    delegatedByUserId?: boolean;
    limitKobo?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    status?: boolean;
    reason?: boolean;
    boardInstrumentRef?: boolean;
    workflowInstanceId?: boolean;
    revokedAt?: boolean;
    revokedByUserId?: boolean;
    createdAt?: boolean;
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["delegationOfAuthority"]>;
export type DelegationOfAuthoritySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    functionCode?: boolean;
    delegateUserId?: boolean;
    delegatedByUserId?: boolean;
    limitKobo?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    status?: boolean;
    reason?: boolean;
    boardInstrumentRef?: boolean;
    workflowInstanceId?: boolean;
    revokedAt?: boolean;
    revokedByUserId?: boolean;
    createdAt?: boolean;
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
}, ExtArgs["result"]["delegationOfAuthority"]>;
export type DelegationOfAuthoritySelectScalar = {
    id?: boolean;
    functionCode?: boolean;
    delegateUserId?: boolean;
    delegatedByUserId?: boolean;
    limitKobo?: boolean;
    effectiveFrom?: boolean;
    effectiveTo?: boolean;
    status?: boolean;
    reason?: boolean;
    boardInstrumentRef?: boolean;
    workflowInstanceId?: boolean;
    revokedAt?: boolean;
    revokedByUserId?: boolean;
    createdAt?: boolean;
};
export type DelegationOfAuthorityOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "functionCode" | "delegateUserId" | "delegatedByUserId" | "limitKobo" | "effectiveFrom" | "effectiveTo" | "status" | "reason" | "boardInstrumentRef" | "workflowInstanceId" | "revokedAt" | "revokedByUserId" | "createdAt", ExtArgs["result"]["delegationOfAuthority"]>;
export type DelegationOfAuthorityInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
};
export type DelegationOfAuthorityIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
};
export type DelegationOfAuthorityIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    function?: boolean | Prisma.PlatformFunctionDefaultArgs<ExtArgs>;
    delegate?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    delegatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    revokedBy?: boolean | Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>;
    workflowInstance?: boolean | Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>;
};
export type $DelegationOfAuthorityPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DelegationOfAuthority";
    objects: {
        function: Prisma.$PlatformFunctionPayload<ExtArgs>;
        delegate: Prisma.$AppUserPayload<ExtArgs>;
        delegatedBy: Prisma.$AppUserPayload<ExtArgs>;
        revokedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        functionCode: string;
        delegateUserId: string;
        delegatedByUserId: string;
        limitKobo: bigint | null;
        effectiveFrom: Date;
        effectiveTo: Date | null;
        status: $Enums.DelegationStatus;
        reason: string | null;
        boardInstrumentRef: string | null;
        workflowInstanceId: string | null;
        revokedAt: Date | null;
        revokedByUserId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["delegationOfAuthority"]>;
    composites: {};
};
export type DelegationOfAuthorityGetPayload<S extends boolean | null | undefined | DelegationOfAuthorityDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload, S>;
export type DelegationOfAuthorityCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DelegationOfAuthorityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DelegationOfAuthorityCountAggregateInputType | true;
};
export interface DelegationOfAuthorityDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DelegationOfAuthority'];
        meta: {
            name: 'DelegationOfAuthority';
        };
    };
    findUnique<T extends DelegationOfAuthorityFindUniqueArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DelegationOfAuthorityFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DelegationOfAuthorityFindFirstArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityFindFirstArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DelegationOfAuthorityFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DelegationOfAuthorityFindManyArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DelegationOfAuthorityCreateArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityCreateArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DelegationOfAuthorityCreateManyArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DelegationOfAuthorityCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DelegationOfAuthorityDeleteArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityDeleteArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DelegationOfAuthorityUpdateArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityUpdateArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DelegationOfAuthorityDeleteManyArgs>(args?: Prisma.SelectSubset<T, DelegationOfAuthorityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DelegationOfAuthorityUpdateManyArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DelegationOfAuthorityUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DelegationOfAuthorityUpsertArgs>(args: Prisma.SelectSubset<T, DelegationOfAuthorityUpsertArgs<ExtArgs>>): Prisma.Prisma__DelegationOfAuthorityClient<runtime.Types.Result.GetResult<Prisma.$DelegationOfAuthorityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DelegationOfAuthorityCountArgs>(args?: Prisma.Subset<T, DelegationOfAuthorityCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DelegationOfAuthorityCountAggregateOutputType> : number>;
    aggregate<T extends DelegationOfAuthorityAggregateArgs>(args: Prisma.Subset<T, DelegationOfAuthorityAggregateArgs>): Prisma.PrismaPromise<GetDelegationOfAuthorityAggregateType<T>>;
    groupBy<T extends DelegationOfAuthorityGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DelegationOfAuthorityGroupByArgs['orderBy'];
    } : {
        orderBy?: DelegationOfAuthorityGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DelegationOfAuthorityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDelegationOfAuthorityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DelegationOfAuthorityFieldRefs;
}
export interface Prisma__DelegationOfAuthorityClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    function<T extends Prisma.PlatformFunctionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PlatformFunctionDefaultArgs<ExtArgs>>): Prisma.Prisma__PlatformFunctionClient<runtime.Types.Result.GetResult<Prisma.$PlatformFunctionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    delegate<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    delegatedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    revokedBy<T extends Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DelegationOfAuthority$revokedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    workflowInstance<T extends Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DelegationOfAuthority$workflowInstanceArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DelegationOfAuthorityFieldRefs {
    readonly id: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly functionCode: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly delegateUserId: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly delegatedByUserId: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly limitKobo: Prisma.FieldRef<"DelegationOfAuthority", 'BigInt'>;
    readonly effectiveFrom: Prisma.FieldRef<"DelegationOfAuthority", 'DateTime'>;
    readonly effectiveTo: Prisma.FieldRef<"DelegationOfAuthority", 'DateTime'>;
    readonly status: Prisma.FieldRef<"DelegationOfAuthority", 'DelegationStatus'>;
    readonly reason: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly boardInstrumentRef: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly revokedAt: Prisma.FieldRef<"DelegationOfAuthority", 'DateTime'>;
    readonly revokedByUserId: Prisma.FieldRef<"DelegationOfAuthority", 'String'>;
    readonly createdAt: Prisma.FieldRef<"DelegationOfAuthority", 'DateTime'>;
}
export type DelegationOfAuthorityFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DelegationOfAuthorityFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DelegationOfAuthorityFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DelegationOfAuthorityCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityCreateInput, Prisma.DelegationOfAuthorityUncheckedCreateInput>;
};
export type DelegationOfAuthorityCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DelegationOfAuthorityCreateManyInput | Prisma.DelegationOfAuthorityCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DelegationOfAuthorityCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    data: Prisma.DelegationOfAuthorityCreateManyInput | Prisma.DelegationOfAuthorityCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DelegationOfAuthorityIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DelegationOfAuthorityUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateInput, Prisma.DelegationOfAuthorityUncheckedUpdateInput>;
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyInput>;
    where?: Prisma.DelegationOfAuthorityWhereInput;
    limit?: number;
};
export type DelegationOfAuthorityUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateManyMutationInput, Prisma.DelegationOfAuthorityUncheckedUpdateManyInput>;
    where?: Prisma.DelegationOfAuthorityWhereInput;
    limit?: number;
    include?: Prisma.DelegationOfAuthorityIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DelegationOfAuthorityUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
    create: Prisma.XOR<Prisma.DelegationOfAuthorityCreateInput, Prisma.DelegationOfAuthorityUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DelegationOfAuthorityUpdateInput, Prisma.DelegationOfAuthorityUncheckedUpdateInput>;
};
export type DelegationOfAuthorityDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
    where: Prisma.DelegationOfAuthorityWhereUniqueInput;
};
export type DelegationOfAuthorityDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DelegationOfAuthorityWhereInput;
    limit?: number;
};
export type DelegationOfAuthority$revokedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type DelegationOfAuthority$workflowInstanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowInstanceSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowInstanceOmit<ExtArgs> | null;
    include?: Prisma.WorkflowInstanceInclude<ExtArgs> | null;
    where?: Prisma.WorkflowInstanceWhereInput;
};
export type DelegationOfAuthorityDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DelegationOfAuthoritySelect<ExtArgs> | null;
    omit?: Prisma.DelegationOfAuthorityOmit<ExtArgs> | null;
    include?: Prisma.DelegationOfAuthorityInclude<ExtArgs> | null;
};
