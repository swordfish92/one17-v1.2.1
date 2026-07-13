import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ApprovalChainVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$ApprovalChainVersionPayload>;
export type AggregateApprovalChainVersion = {
    _count: ApprovalChainVersionCountAggregateOutputType | null;
    _avg: ApprovalChainVersionAvgAggregateOutputType | null;
    _sum: ApprovalChainVersionSumAggregateOutputType | null;
    _min: ApprovalChainVersionMinAggregateOutputType | null;
    _max: ApprovalChainVersionMaxAggregateOutputType | null;
};
export type ApprovalChainVersionAvgAggregateOutputType = {
    version: number | null;
};
export type ApprovalChainVersionSumAggregateOutputType = {
    version: number | null;
};
export type ApprovalChainVersionMinAggregateOutputType = {
    id: string | null;
    workflowTypeCode: string | null;
    version: number | null;
    status: $Enums.ApprovalChainStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ApprovalChainVersionMaxAggregateOutputType = {
    id: string | null;
    workflowTypeCode: string | null;
    version: number | null;
    status: $Enums.ApprovalChainStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type ApprovalChainVersionCountAggregateOutputType = {
    id: number;
    workflowTypeCode: number;
    version: number;
    status: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type ApprovalChainVersionAvgAggregateInputType = {
    version?: true;
};
export type ApprovalChainVersionSumAggregateInputType = {
    version?: true;
};
export type ApprovalChainVersionMinAggregateInputType = {
    id?: true;
    workflowTypeCode?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ApprovalChainVersionMaxAggregateInputType = {
    id?: true;
    workflowTypeCode?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type ApprovalChainVersionCountAggregateInputType = {
    id?: true;
    workflowTypeCode?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type ApprovalChainVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithRelationInput | Prisma.ApprovalChainVersionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalChainVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApprovalChainVersionCountAggregateInputType;
    _avg?: ApprovalChainVersionAvgAggregateInputType;
    _sum?: ApprovalChainVersionSumAggregateInputType;
    _min?: ApprovalChainVersionMinAggregateInputType;
    _max?: ApprovalChainVersionMaxAggregateInputType;
};
export type GetApprovalChainVersionAggregateType<T extends ApprovalChainVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateApprovalChainVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApprovalChainVersion[P]> : Prisma.GetScalarType<T[P], AggregateApprovalChainVersion[P]>;
};
export type ApprovalChainVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithAggregationInput | Prisma.ApprovalChainVersionOrderByWithAggregationInput[];
    by: Prisma.ApprovalChainVersionScalarFieldEnum[] | Prisma.ApprovalChainVersionScalarFieldEnum;
    having?: Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApprovalChainVersionCountAggregateInputType | true;
    _avg?: ApprovalChainVersionAvgAggregateInputType;
    _sum?: ApprovalChainVersionSumAggregateInputType;
    _min?: ApprovalChainVersionMinAggregateInputType;
    _max?: ApprovalChainVersionMaxAggregateInputType;
};
export type ApprovalChainVersionGroupByOutputType = {
    id: string;
    workflowTypeCode: string;
    version: number;
    status: $Enums.ApprovalChainStatus;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date;
    _count: ApprovalChainVersionCountAggregateOutputType | null;
    _avg: ApprovalChainVersionAvgAggregateOutputType | null;
    _sum: ApprovalChainVersionSumAggregateOutputType | null;
    _min: ApprovalChainVersionMinAggregateOutputType | null;
    _max: ApprovalChainVersionMaxAggregateOutputType | null;
};
export type GetApprovalChainVersionGroupByPayload<T extends ApprovalChainVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApprovalChainVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApprovalChainVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApprovalChainVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApprovalChainVersionGroupByOutputType[P]>;
}>>;
export type ApprovalChainVersionWhereInput = {
    AND?: Prisma.ApprovalChainVersionWhereInput | Prisma.ApprovalChainVersionWhereInput[];
    OR?: Prisma.ApprovalChainVersionWhereInput[];
    NOT?: Prisma.ApprovalChainVersionWhereInput | Prisma.ApprovalChainVersionWhereInput[];
    id?: Prisma.UuidFilter<"ApprovalChainVersion"> | string;
    workflowTypeCode?: Prisma.StringFilter<"ApprovalChainVersion"> | string;
    version?: Prisma.IntFilter<"ApprovalChainVersion"> | number;
    status?: Prisma.EnumApprovalChainStatusFilter<"ApprovalChainVersion"> | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"ApprovalChainVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalChainVersion"> | Date | string;
    workflowType?: Prisma.XOR<Prisma.WorkflowTypeScalarRelationFilter, Prisma.WorkflowTypeWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    rules?: Prisma.ApprovalRuleListRelationFilter;
};
export type ApprovalChainVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    workflowTypeCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    workflowType?: Prisma.WorkflowTypeOrderByWithRelationInput;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
    rules?: Prisma.ApprovalRuleOrderByRelationAggregateInput;
};
export type ApprovalChainVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    workflowTypeCode_version?: Prisma.ApprovalChainVersionWorkflowTypeCodeVersionCompoundUniqueInput;
    AND?: Prisma.ApprovalChainVersionWhereInput | Prisma.ApprovalChainVersionWhereInput[];
    OR?: Prisma.ApprovalChainVersionWhereInput[];
    NOT?: Prisma.ApprovalChainVersionWhereInput | Prisma.ApprovalChainVersionWhereInput[];
    workflowTypeCode?: Prisma.StringFilter<"ApprovalChainVersion"> | string;
    version?: Prisma.IntFilter<"ApprovalChainVersion"> | number;
    status?: Prisma.EnumApprovalChainStatusFilter<"ApprovalChainVersion"> | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"ApprovalChainVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalChainVersion"> | Date | string;
    workflowType?: Prisma.XOR<Prisma.WorkflowTypeScalarRelationFilter, Prisma.WorkflowTypeWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    rules?: Prisma.ApprovalRuleListRelationFilter;
}, "id" | "workflowInstanceId" | "workflowTypeCode_version">;
export type ApprovalChainVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    workflowTypeCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ApprovalChainVersionCountOrderByAggregateInput;
    _avg?: Prisma.ApprovalChainVersionAvgOrderByAggregateInput;
    _max?: Prisma.ApprovalChainVersionMaxOrderByAggregateInput;
    _min?: Prisma.ApprovalChainVersionMinOrderByAggregateInput;
    _sum?: Prisma.ApprovalChainVersionSumOrderByAggregateInput;
};
export type ApprovalChainVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput | Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput | Prisma.ApprovalChainVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ApprovalChainVersion"> | string;
    workflowTypeCode?: Prisma.StringWithAggregatesFilter<"ApprovalChainVersion"> | string;
    version?: Prisma.IntWithAggregatesFilter<"ApprovalChainVersion"> | number;
    status?: Prisma.EnumApprovalChainStatusWithAggregatesFilter<"ApprovalChainVersion"> | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ApprovalChainVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ApprovalChainVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"ApprovalChainVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"ApprovalChainVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ApprovalChainVersion"> | Date | string;
};
export type ApprovalChainVersionCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    workflowType: Prisma.WorkflowTypeCreateNestedOneWithoutApprovalChainVersionsInput;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsApprovedInput;
    rules?: Prisma.ApprovalRuleCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionUncheckedCreateInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    rules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowType?: Prisma.WorkflowTypeUpdateOneRequiredWithoutApprovalChainVersionsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsApprovedNestedInput;
    rules?: Prisma.ApprovalRuleUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionCreateManyInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type ApprovalChainVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionListRelationFilter = {
    every?: Prisma.ApprovalChainVersionWhereInput;
    some?: Prisma.ApprovalChainVersionWhereInput;
    none?: Prisma.ApprovalChainVersionWhereInput;
};
export type ApprovalChainVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApprovalChainVersionWorkflowTypeCodeVersionCompoundUniqueInput = {
    workflowTypeCode: string;
    version: number;
};
export type ApprovalChainVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowTypeCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalChainVersionAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ApprovalChainVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowTypeCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalChainVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowTypeCode?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ApprovalChainVersionSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type ApprovalChainVersionScalarRelationFilter = {
    is?: Prisma.ApprovalChainVersionWhereInput;
    isNot?: Prisma.ApprovalChainVersionWhereInput;
};
export type ApprovalChainVersionCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput> | Prisma.ApprovalChainVersionCreateWithoutProposedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput> | Prisma.ApprovalChainVersionCreateWithoutApprovedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput> | Prisma.ApprovalChainVersionCreateWithoutProposedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput> | Prisma.ApprovalChainVersionCreateWithoutApprovedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput> | Prisma.ApprovalChainVersionCreateWithoutProposedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type ApprovalChainVersionUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput> | Prisma.ApprovalChainVersionCreateWithoutApprovedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput> | Prisma.ApprovalChainVersionCreateWithoutProposedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput> | Prisma.ApprovalChainVersionCreateWithoutApprovedByInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type ApprovalChainVersionCreateNestedManyWithoutWorkflowTypeInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput> | Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyWorkflowTypeInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionUncheckedCreateNestedManyWithoutWorkflowTypeInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput> | Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyWorkflowTypeInputEnvelope;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
};
export type ApprovalChainVersionUpdateManyWithoutWorkflowTypeNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput> | Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutWorkflowTypeInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyWorkflowTypeInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutWorkflowTypeInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutWorkflowTypeInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput> | Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput[] | Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput[];
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput[];
    upsert?: Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpsertWithWhereUniqueWithoutWorkflowTypeInput[];
    createMany?: Prisma.ApprovalChainVersionCreateManyWorkflowTypeInputEnvelope;
    set?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    disconnect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    delete?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput | Prisma.ApprovalChainVersionWhereUniqueInput[];
    update?: Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpdateWithWhereUniqueWithoutWorkflowTypeInput[];
    updateMany?: Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutWorkflowTypeInput | Prisma.ApprovalChainVersionUpdateManyWithWhereWithoutWorkflowTypeInput[];
    deleteMany?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
};
export type EnumApprovalChainStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalChainStatus;
};
export type ApprovalChainVersionCreateNestedOneWithoutRulesInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutRulesInput>;
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutRulesInput;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput;
};
export type ApprovalChainVersionUpdateOneRequiredWithoutRulesNestedInput = {
    create?: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutRulesInput>;
    connectOrCreate?: Prisma.ApprovalChainVersionCreateOrConnectWithoutRulesInput;
    upsert?: Prisma.ApprovalChainVersionUpsertWithoutRulesInput;
    connect?: Prisma.ApprovalChainVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApprovalChainVersionUpdateToOneWithWhereWithoutRulesInput, Prisma.ApprovalChainVersionUpdateWithoutRulesInput>, Prisma.ApprovalChainVersionUncheckedUpdateWithoutRulesInput>;
};
export type ApprovalChainVersionCreateWithoutProposedByInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    workflowType: Prisma.WorkflowTypeCreateNestedOneWithoutApprovalChainVersionsInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsApprovedInput;
    rules?: Prisma.ApprovalRuleCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionUncheckedCreateWithoutProposedByInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    rules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionCreateOrConnectWithoutProposedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput>;
};
export type ApprovalChainVersionCreateManyProposedByInputEnvelope = {
    data: Prisma.ApprovalChainVersionCreateManyProposedByInput | Prisma.ApprovalChainVersionCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type ApprovalChainVersionCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    workflowType: Prisma.WorkflowTypeCreateNestedOneWithoutApprovalChainVersionsInput;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsProposedInput;
    rules?: Prisma.ApprovalRuleCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    rules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput>;
};
export type ApprovalChainVersionCreateManyApprovedByInputEnvelope = {
    data: Prisma.ApprovalChainVersionCreateManyApprovedByInput | Prisma.ApprovalChainVersionCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type ApprovalChainVersionUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutProposedByInput>;
};
export type ApprovalChainVersionUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutProposedByInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutProposedByInput>;
};
export type ApprovalChainVersionUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.ApprovalChainVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateManyMutationInput, Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutProposedByInput>;
};
export type ApprovalChainVersionScalarWhereInput = {
    AND?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
    OR?: Prisma.ApprovalChainVersionScalarWhereInput[];
    NOT?: Prisma.ApprovalChainVersionScalarWhereInput | Prisma.ApprovalChainVersionScalarWhereInput[];
    id?: Prisma.UuidFilter<"ApprovalChainVersion"> | string;
    workflowTypeCode?: Prisma.StringFilter<"ApprovalChainVersion"> | string;
    version?: Prisma.IntFilter<"ApprovalChainVersion"> | number;
    status?: Prisma.EnumApprovalChainStatusFilter<"ApprovalChainVersion"> | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"ApprovalChainVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"ApprovalChainVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"ApprovalChainVersion"> | Date | string;
};
export type ApprovalChainVersionUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutApprovedByInput>;
};
export type ApprovalChainVersionUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutApprovedByInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutApprovedByInput>;
};
export type ApprovalChainVersionUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.ApprovalChainVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateManyMutationInput, Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutApprovedByInput>;
};
export type ApprovalChainVersionCreateWithoutWorkflowTypeInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsApprovedInput;
    rules?: Prisma.ApprovalRuleCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    rules?: Prisma.ApprovalRuleUncheckedCreateNestedManyWithoutChainVersionInput;
};
export type ApprovalChainVersionCreateOrConnectWithoutWorkflowTypeInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput>;
};
export type ApprovalChainVersionCreateManyWorkflowTypeInputEnvelope = {
    data: Prisma.ApprovalChainVersionCreateManyWorkflowTypeInput | Prisma.ApprovalChainVersionCreateManyWorkflowTypeInput[];
    skipDuplicates?: boolean;
};
export type ApprovalChainVersionUpsertWithWhereUniqueWithoutWorkflowTypeInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutWorkflowTypeInput>;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutWorkflowTypeInput>;
};
export type ApprovalChainVersionUpdateWithWhereUniqueWithoutWorkflowTypeInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutWorkflowTypeInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutWorkflowTypeInput>;
};
export type ApprovalChainVersionUpdateManyWithWhereWithoutWorkflowTypeInput = {
    where: Prisma.ApprovalChainVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateManyMutationInput, Prisma.ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeInput>;
};
export type ApprovalChainVersionCreateWithoutRulesInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    workflowType: Prisma.WorkflowTypeCreateNestedOneWithoutApprovalChainVersionsInput;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutApprovalChainVersionsApprovedInput;
};
export type ApprovalChainVersionUncheckedCreateWithoutRulesInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type ApprovalChainVersionCreateOrConnectWithoutRulesInput = {
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutRulesInput>;
};
export type ApprovalChainVersionUpsertWithoutRulesInput = {
    update: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutRulesInput>;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedCreateWithoutRulesInput>;
    where?: Prisma.ApprovalChainVersionWhereInput;
};
export type ApprovalChainVersionUpdateToOneWithWhereWithoutRulesInput = {
    where?: Prisma.ApprovalChainVersionWhereInput;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateWithoutRulesInput, Prisma.ApprovalChainVersionUncheckedUpdateWithoutRulesInput>;
};
export type ApprovalChainVersionUpdateWithoutRulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowType?: Prisma.WorkflowTypeUpdateOneRequiredWithoutApprovalChainVersionsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsApprovedNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateWithoutRulesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionCreateManyProposedByInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type ApprovalChainVersionCreateManyApprovedByInput = {
    id?: string;
    workflowTypeCode: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type ApprovalChainVersionUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowType?: Prisma.WorkflowTypeUpdateOneRequiredWithoutApprovalChainVersionsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsApprovedNestedInput;
    rules?: Prisma.ApprovalRuleUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    workflowType?: Prisma.WorkflowTypeUpdateOneRequiredWithoutApprovalChainVersionsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsProposedNestedInput;
    rules?: Prisma.ApprovalRuleUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionCreateManyWorkflowTypeInput = {
    id?: string;
    version: number;
    status?: $Enums.ApprovalChainStatus;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type ApprovalChainVersionUpdateWithoutWorkflowTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutApprovalChainVersionsApprovedNestedInput;
    rules?: Prisma.ApprovalRuleUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateWithoutWorkflowTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    rules?: Prisma.ApprovalRuleUncheckedUpdateManyWithoutChainVersionNestedInput;
};
export type ApprovalChainVersionUncheckedUpdateManyWithoutWorkflowTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumApprovalChainStatusFieldUpdateOperationsInput | $Enums.ApprovalChainStatus;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApprovalChainVersionCountOutputType = {
    rules: number;
};
export type ApprovalChainVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rules?: boolean | ApprovalChainVersionCountOutputTypeCountRulesArgs;
};
export type ApprovalChainVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type ApprovalChainVersionCountOutputTypeCountRulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalRuleWhereInput;
};
export type ApprovalChainVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowTypeCode?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
    rules?: boolean | Prisma.ApprovalChainVersion$rulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalChainVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["approvalChainVersion"]>;
export type ApprovalChainVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowTypeCode?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["approvalChainVersion"]>;
export type ApprovalChainVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowTypeCode?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["approvalChainVersion"]>;
export type ApprovalChainVersionSelectScalar = {
    id?: boolean;
    workflowTypeCode?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type ApprovalChainVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "workflowTypeCode" | "version" | "status" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "effectiveFrom" | "createdAt", ExtArgs["result"]["approvalChainVersion"]>;
export type ApprovalChainVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
    rules?: boolean | Prisma.ApprovalChainVersion$rulesArgs<ExtArgs>;
    _count?: boolean | Prisma.ApprovalChainVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApprovalChainVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
};
export type ApprovalChainVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowType?: boolean | Prisma.WorkflowTypeDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>;
};
export type $ApprovalChainVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApprovalChainVersion";
    objects: {
        workflowType: Prisma.$WorkflowTypePayload<ExtArgs>;
        proposedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        rules: Prisma.$ApprovalRulePayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        workflowTypeCode: string;
        version: number;
        status: $Enums.ApprovalChainStatus;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["approvalChainVersion"]>;
    composites: {};
};
export type ApprovalChainVersionGetPayload<S extends boolean | null | undefined | ApprovalChainVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload, S>;
export type ApprovalChainVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApprovalChainVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApprovalChainVersionCountAggregateInputType | true;
};
export interface ApprovalChainVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApprovalChainVersion'];
        meta: {
            name: 'ApprovalChainVersion';
        };
    };
    findUnique<T extends ApprovalChainVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApprovalChainVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApprovalChainVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApprovalChainVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApprovalChainVersionFindManyArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApprovalChainVersionCreateArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionCreateArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApprovalChainVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApprovalChainVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApprovalChainVersionDeleteArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApprovalChainVersionUpdateArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApprovalChainVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApprovalChainVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApprovalChainVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApprovalChainVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApprovalChainVersionUpsertArgs>(args: Prisma.SelectSubset<T, ApprovalChainVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__ApprovalChainVersionClient<runtime.Types.Result.GetResult<Prisma.$ApprovalChainVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApprovalChainVersionCountArgs>(args?: Prisma.Subset<T, ApprovalChainVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApprovalChainVersionCountAggregateOutputType> : number>;
    aggregate<T extends ApprovalChainVersionAggregateArgs>(args: Prisma.Subset<T, ApprovalChainVersionAggregateArgs>): Prisma.PrismaPromise<GetApprovalChainVersionAggregateType<T>>;
    groupBy<T extends ApprovalChainVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApprovalChainVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: ApprovalChainVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApprovalChainVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApprovalChainVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApprovalChainVersionFieldRefs;
}
export interface Prisma__ApprovalChainVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    workflowType<T extends Prisma.WorkflowTypeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkflowTypeDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkflowTypeClient<runtime.Types.Result.GetResult<Prisma.$WorkflowTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proposedBy<T extends Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalChainVersion$proposedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalChainVersion$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rules<T extends Prisma.ApprovalChainVersion$rulesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalChainVersion$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApprovalRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApprovalChainVersionFieldRefs {
    readonly id: Prisma.FieldRef<"ApprovalChainVersion", 'String'>;
    readonly workflowTypeCode: Prisma.FieldRef<"ApprovalChainVersion", 'String'>;
    readonly version: Prisma.FieldRef<"ApprovalChainVersion", 'Int'>;
    readonly status: Prisma.FieldRef<"ApprovalChainVersion", 'ApprovalChainStatus'>;
    readonly proposedByUserId: Prisma.FieldRef<"ApprovalChainVersion", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"ApprovalChainVersion", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"ApprovalChainVersion", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"ApprovalChainVersion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"ApprovalChainVersion", 'DateTime'>;
}
export type ApprovalChainVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
};
export type ApprovalChainVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
};
export type ApprovalChainVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithRelationInput | Prisma.ApprovalChainVersionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalChainVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalChainVersionScalarFieldEnum | Prisma.ApprovalChainVersionScalarFieldEnum[];
};
export type ApprovalChainVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithRelationInput | Prisma.ApprovalChainVersionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalChainVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalChainVersionScalarFieldEnum | Prisma.ApprovalChainVersionScalarFieldEnum[];
};
export type ApprovalChainVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where?: Prisma.ApprovalChainVersionWhereInput;
    orderBy?: Prisma.ApprovalChainVersionOrderByWithRelationInput | Prisma.ApprovalChainVersionOrderByWithRelationInput[];
    cursor?: Prisma.ApprovalChainVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApprovalChainVersionScalarFieldEnum | Prisma.ApprovalChainVersionScalarFieldEnum[];
};
export type ApprovalChainVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalChainVersionCreateInput, Prisma.ApprovalChainVersionUncheckedCreateInput>;
};
export type ApprovalChainVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApprovalChainVersionCreateManyInput | Prisma.ApprovalChainVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApprovalChainVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    data: Prisma.ApprovalChainVersionCreateManyInput | Prisma.ApprovalChainVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApprovalChainVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApprovalChainVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateInput, Prisma.ApprovalChainVersionUncheckedUpdateInput>;
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
};
export type ApprovalChainVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateManyMutationInput, Prisma.ApprovalChainVersionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalChainVersionWhereInput;
    limit?: number;
};
export type ApprovalChainVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApprovalChainVersionUpdateManyMutationInput, Prisma.ApprovalChainVersionUncheckedUpdateManyInput>;
    where?: Prisma.ApprovalChainVersionWhereInput;
    limit?: number;
    include?: Prisma.ApprovalChainVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApprovalChainVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApprovalChainVersionCreateInput, Prisma.ApprovalChainVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApprovalChainVersionUpdateInput, Prisma.ApprovalChainVersionUncheckedUpdateInput>;
};
export type ApprovalChainVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
    where: Prisma.ApprovalChainVersionWhereUniqueInput;
};
export type ApprovalChainVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApprovalChainVersionWhereInput;
    limit?: number;
};
export type ApprovalChainVersion$proposedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ApprovalChainVersion$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type ApprovalChainVersion$rulesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ApprovalChainVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApprovalChainVersionSelect<ExtArgs> | null;
    omit?: Prisma.ApprovalChainVersionOmit<ExtArgs> | null;
    include?: Prisma.ApprovalChainVersionInclude<ExtArgs> | null;
};
