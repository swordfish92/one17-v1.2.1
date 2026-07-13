import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WorkflowStepApprovalModel = runtime.Types.Result.DefaultSelection<Prisma.$WorkflowStepApprovalPayload>;
export type AggregateWorkflowStepApproval = {
    _count: WorkflowStepApprovalCountAggregateOutputType | null;
    _min: WorkflowStepApprovalMinAggregateOutputType | null;
    _max: WorkflowStepApprovalMaxAggregateOutputType | null;
};
export type WorkflowStepApprovalMinAggregateOutputType = {
    id: string | null;
    workflowInstanceId: string | null;
    approvalRuleStepId: string | null;
    approverUserId: string | null;
    decision: $Enums.ApprovalDecision | null;
    decidedAt: Date | null;
    notes: string | null;
};
export type WorkflowStepApprovalMaxAggregateOutputType = {
    id: string | null;
    workflowInstanceId: string | null;
    approvalRuleStepId: string | null;
    approverUserId: string | null;
    decision: $Enums.ApprovalDecision | null;
    decidedAt: Date | null;
    notes: string | null;
};
export type WorkflowStepApprovalCountAggregateOutputType = {
    id: number;
    workflowInstanceId: number;
    approvalRuleStepId: number;
    approverUserId: number;
    decision: number;
    decidedAt: number;
    notes: number;
    _all: number;
};
export type WorkflowStepApprovalMinAggregateInputType = {
    id?: true;
    workflowInstanceId?: true;
    approvalRuleStepId?: true;
    approverUserId?: true;
    decision?: true;
    decidedAt?: true;
    notes?: true;
};
export type WorkflowStepApprovalMaxAggregateInputType = {
    id?: true;
    workflowInstanceId?: true;
    approvalRuleStepId?: true;
    approverUserId?: true;
    decision?: true;
    decidedAt?: true;
    notes?: true;
};
export type WorkflowStepApprovalCountAggregateInputType = {
    id?: true;
    workflowInstanceId?: true;
    approvalRuleStepId?: true;
    approverUserId?: true;
    decision?: true;
    decidedAt?: true;
    notes?: true;
    _all?: true;
};
export type WorkflowStepApprovalAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowStepApprovalWhereInput;
    orderBy?: Prisma.WorkflowStepApprovalOrderByWithRelationInput | Prisma.WorkflowStepApprovalOrderByWithRelationInput[];
    cursor?: Prisma.WorkflowStepApprovalWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WorkflowStepApprovalCountAggregateInputType;
    _min?: WorkflowStepApprovalMinAggregateInputType;
    _max?: WorkflowStepApprovalMaxAggregateInputType;
};
export type GetWorkflowStepApprovalAggregateType<T extends WorkflowStepApprovalAggregateArgs> = {
    [P in keyof T & keyof AggregateWorkflowStepApproval]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWorkflowStepApproval[P]> : Prisma.GetScalarType<T[P], AggregateWorkflowStepApproval[P]>;
};
export type WorkflowStepApprovalGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowStepApprovalWhereInput;
    orderBy?: Prisma.WorkflowStepApprovalOrderByWithAggregationInput | Prisma.WorkflowStepApprovalOrderByWithAggregationInput[];
    by: Prisma.WorkflowStepApprovalScalarFieldEnum[] | Prisma.WorkflowStepApprovalScalarFieldEnum;
    having?: Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WorkflowStepApprovalCountAggregateInputType | true;
    _min?: WorkflowStepApprovalMinAggregateInputType;
    _max?: WorkflowStepApprovalMaxAggregateInputType;
};
export type WorkflowStepApprovalGroupByOutputType = {
    id: string;
    workflowInstanceId: string;
    approvalRuleStepId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt: Date;
    notes: string | null;
    _count: WorkflowStepApprovalCountAggregateOutputType | null;
    _min: WorkflowStepApprovalMinAggregateOutputType | null;
    _max: WorkflowStepApprovalMaxAggregateOutputType | null;
};
export type GetWorkflowStepApprovalGroupByPayload<T extends WorkflowStepApprovalGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WorkflowStepApprovalGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WorkflowStepApprovalGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WorkflowStepApprovalGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WorkflowStepApprovalGroupByOutputType[P]>;
}>>;
export type WorkflowStepApprovalWhereInput = {
    AND?: Prisma.WorkflowStepApprovalWhereInput | Prisma.WorkflowStepApprovalWhereInput[];
    OR?: Prisma.WorkflowStepApprovalWhereInput[];
    NOT?: Prisma.WorkflowStepApprovalWhereInput | Prisma.WorkflowStepApprovalWhereInput[];
    id?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    workflowInstanceId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approvalRuleStepId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approverUserId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    decision?: Prisma.EnumApprovalDecisionFilter<"WorkflowStepApproval"> | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFilter<"WorkflowStepApproval"> | Date | string;
    notes?: Prisma.StringNullableFilter<"WorkflowStepApproval"> | string | null;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceScalarRelationFilter, Prisma.WorkflowInstanceWhereInput>;
    approvalRuleStep?: Prisma.XOR<Prisma.ApprovalRuleStepScalarRelationFilter, Prisma.ApprovalRuleStepWhereInput>;
    approver?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type WorkflowStepApprovalOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    approvalRuleStepId?: Prisma.SortOrder;
    approverUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstance?: Prisma.WorkflowInstanceOrderByWithRelationInput;
    approvalRuleStep?: Prisma.ApprovalRuleStepOrderByWithRelationInput;
    approver?: Prisma.AppUserOrderByWithRelationInput;
};
export type WorkflowStepApprovalWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId_approvalRuleStepId?: Prisma.WorkflowStepApprovalWorkflowInstanceIdApprovalRuleStepIdCompoundUniqueInput;
    AND?: Prisma.WorkflowStepApprovalWhereInput | Prisma.WorkflowStepApprovalWhereInput[];
    OR?: Prisma.WorkflowStepApprovalWhereInput[];
    NOT?: Prisma.WorkflowStepApprovalWhereInput | Prisma.WorkflowStepApprovalWhereInput[];
    workflowInstanceId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approvalRuleStepId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approverUserId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    decision?: Prisma.EnumApprovalDecisionFilter<"WorkflowStepApproval"> | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFilter<"WorkflowStepApproval"> | Date | string;
    notes?: Prisma.StringNullableFilter<"WorkflowStepApproval"> | string | null;
    workflowInstance?: Prisma.XOR<Prisma.WorkflowInstanceScalarRelationFilter, Prisma.WorkflowInstanceWhereInput>;
    approvalRuleStep?: Prisma.XOR<Prisma.ApprovalRuleStepScalarRelationFilter, Prisma.ApprovalRuleStepWhereInput>;
    approver?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id" | "workflowInstanceId_approvalRuleStepId">;
export type WorkflowStepApprovalOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    approvalRuleStepId?: Prisma.SortOrder;
    approverUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.WorkflowStepApprovalCountOrderByAggregateInput;
    _max?: Prisma.WorkflowStepApprovalMaxOrderByAggregateInput;
    _min?: Prisma.WorkflowStepApprovalMinOrderByAggregateInput;
};
export type WorkflowStepApprovalScalarWhereWithAggregatesInput = {
    AND?: Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput | Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput[];
    OR?: Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput | Prisma.WorkflowStepApprovalScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WorkflowStepApproval"> | string;
    workflowInstanceId?: Prisma.UuidWithAggregatesFilter<"WorkflowStepApproval"> | string;
    approvalRuleStepId?: Prisma.UuidWithAggregatesFilter<"WorkflowStepApproval"> | string;
    approverUserId?: Prisma.UuidWithAggregatesFilter<"WorkflowStepApproval"> | string;
    decision?: Prisma.EnumApprovalDecisionWithAggregatesFilter<"WorkflowStepApproval"> | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeWithAggregatesFilter<"WorkflowStepApproval"> | Date | string;
    notes?: Prisma.StringNullableWithAggregatesFilter<"WorkflowStepApproval"> | string | null;
};
export type WorkflowStepApprovalCreateInput = {
    id?: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
    workflowInstance: Prisma.WorkflowInstanceCreateNestedOneWithoutStepApprovalsInput;
    approvalRuleStep: Prisma.ApprovalRuleStepCreateNestedOneWithoutStepApprovalsInput;
    approver: Prisma.AppUserCreateNestedOneWithoutStepApprovalsInput;
};
export type WorkflowStepApprovalUncheckedCreateInput = {
    id?: string;
    workflowInstanceId: string;
    approvalRuleStepId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneRequiredWithoutStepApprovalsNestedInput;
    approvalRuleStep?: Prisma.ApprovalRuleStepUpdateOneRequiredWithoutStepApprovalsNestedInput;
    approver?: Prisma.AppUserUpdateOneRequiredWithoutStepApprovalsNestedInput;
};
export type WorkflowStepApprovalUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalCreateManyInput = {
    id?: string;
    workflowInstanceId: string;
    approvalRuleStepId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalListRelationFilter = {
    every?: Prisma.WorkflowStepApprovalWhereInput;
    some?: Prisma.WorkflowStepApprovalWhereInput;
    none?: Prisma.WorkflowStepApprovalWhereInput;
};
export type WorkflowStepApprovalOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WorkflowStepApprovalWorkflowInstanceIdApprovalRuleStepIdCompoundUniqueInput = {
    workflowInstanceId: string;
    approvalRuleStepId: string;
};
export type WorkflowStepApprovalCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    approvalRuleStepId?: Prisma.SortOrder;
    approverUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type WorkflowStepApprovalMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    approvalRuleStepId?: Prisma.SortOrder;
    approverUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type WorkflowStepApprovalMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    approvalRuleStepId?: Prisma.SortOrder;
    approverUserId?: Prisma.SortOrder;
    decision?: Prisma.SortOrder;
    decidedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type WorkflowStepApprovalCreateNestedManyWithoutApproverInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput> | Prisma.WorkflowStepApprovalCreateWithoutApproverInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApproverInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUncheckedCreateNestedManyWithoutApproverInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput> | Prisma.WorkflowStepApprovalCreateWithoutApproverInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApproverInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUpdateManyWithoutApproverNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput> | Prisma.WorkflowStepApprovalCreateWithoutApproverInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApproverInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApproverInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApproverInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApproverInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApproverInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApproverInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApproverInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput> | Prisma.WorkflowStepApprovalCreateWithoutApproverInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApproverInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApproverInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApproverInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApproverInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApproverInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApproverInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApproverInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApproverInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type WorkflowStepApprovalCreateNestedManyWithoutApprovalRuleStepInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput> | Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUncheckedCreateNestedManyWithoutApprovalRuleStepInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput> | Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUpdateManyWithoutApprovalRuleStepNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput> | Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApprovalRuleStepInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApprovalRuleStepInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApprovalRuleStepInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput> | Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutApprovalRuleStepInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutApprovalRuleStepInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApprovalRuleStepInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutApprovalRuleStepInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type WorkflowStepApprovalCreateNestedManyWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput> | Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUncheckedCreateNestedManyWithoutWorkflowInstanceInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput> | Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInputEnvelope;
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
};
export type WorkflowStepApprovalUpdateManyWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput> | Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutWorkflowInstanceInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutWorkflowInstanceInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutWorkflowInstanceInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutWorkflowInstanceNestedInput = {
    create?: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput> | Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput[] | Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput[];
    connectOrCreate?: Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput[];
    upsert?: Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpsertWithWhereUniqueWithoutWorkflowInstanceInput[];
    createMany?: Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInputEnvelope;
    set?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    disconnect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    delete?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    connect?: Prisma.WorkflowStepApprovalWhereUniqueInput | Prisma.WorkflowStepApprovalWhereUniqueInput[];
    update?: Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpdateWithWhereUniqueWithoutWorkflowInstanceInput[];
    updateMany?: Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutWorkflowInstanceInput | Prisma.WorkflowStepApprovalUpdateManyWithWhereWithoutWorkflowInstanceInput[];
    deleteMany?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
};
export type EnumApprovalDecisionFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalDecision;
};
export type WorkflowStepApprovalCreateWithoutApproverInput = {
    id?: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
    workflowInstance: Prisma.WorkflowInstanceCreateNestedOneWithoutStepApprovalsInput;
    approvalRuleStep: Prisma.ApprovalRuleStepCreateNestedOneWithoutStepApprovalsInput;
};
export type WorkflowStepApprovalUncheckedCreateWithoutApproverInput = {
    id?: string;
    workflowInstanceId: string;
    approvalRuleStepId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalCreateOrConnectWithoutApproverInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput>;
};
export type WorkflowStepApprovalCreateManyApproverInputEnvelope = {
    data: Prisma.WorkflowStepApprovalCreateManyApproverInput | Prisma.WorkflowStepApprovalCreateManyApproverInput[];
    skipDuplicates?: boolean;
};
export type WorkflowStepApprovalUpsertWithWhereUniqueWithoutApproverInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutApproverInput>;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApproverInput>;
};
export type WorkflowStepApprovalUpdateWithWhereUniqueWithoutApproverInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutApproverInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutApproverInput>;
};
export type WorkflowStepApprovalUpdateManyWithWhereWithoutApproverInput = {
    where: Prisma.WorkflowStepApprovalScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateManyMutationInput, Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutApproverInput>;
};
export type WorkflowStepApprovalScalarWhereInput = {
    AND?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
    OR?: Prisma.WorkflowStepApprovalScalarWhereInput[];
    NOT?: Prisma.WorkflowStepApprovalScalarWhereInput | Prisma.WorkflowStepApprovalScalarWhereInput[];
    id?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    workflowInstanceId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approvalRuleStepId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    approverUserId?: Prisma.UuidFilter<"WorkflowStepApproval"> | string;
    decision?: Prisma.EnumApprovalDecisionFilter<"WorkflowStepApproval"> | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFilter<"WorkflowStepApproval"> | Date | string;
    notes?: Prisma.StringNullableFilter<"WorkflowStepApproval"> | string | null;
};
export type WorkflowStepApprovalCreateWithoutApprovalRuleStepInput = {
    id?: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
    workflowInstance: Prisma.WorkflowInstanceCreateNestedOneWithoutStepApprovalsInput;
    approver: Prisma.AppUserCreateNestedOneWithoutStepApprovalsInput;
};
export type WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput = {
    id?: string;
    workflowInstanceId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalCreateOrConnectWithoutApprovalRuleStepInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput>;
};
export type WorkflowStepApprovalCreateManyApprovalRuleStepInputEnvelope = {
    data: Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInput | Prisma.WorkflowStepApprovalCreateManyApprovalRuleStepInput[];
    skipDuplicates?: boolean;
};
export type WorkflowStepApprovalUpsertWithWhereUniqueWithoutApprovalRuleStepInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutApprovalRuleStepInput>;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutApprovalRuleStepInput>;
};
export type WorkflowStepApprovalUpdateWithWhereUniqueWithoutApprovalRuleStepInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutApprovalRuleStepInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutApprovalRuleStepInput>;
};
export type WorkflowStepApprovalUpdateManyWithWhereWithoutApprovalRuleStepInput = {
    where: Prisma.WorkflowStepApprovalScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateManyMutationInput, Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepInput>;
};
export type WorkflowStepApprovalCreateWithoutWorkflowInstanceInput = {
    id?: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
    approvalRuleStep: Prisma.ApprovalRuleStepCreateNestedOneWithoutStepApprovalsInput;
    approver: Prisma.AppUserCreateNestedOneWithoutStepApprovalsInput;
};
export type WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput = {
    id?: string;
    approvalRuleStepId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalCreateOrConnectWithoutWorkflowInstanceInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type WorkflowStepApprovalCreateManyWorkflowInstanceInputEnvelope = {
    data: Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInput | Prisma.WorkflowStepApprovalCreateManyWorkflowInstanceInput[];
    skipDuplicates?: boolean;
};
export type WorkflowStepApprovalUpsertWithWhereUniqueWithoutWorkflowInstanceInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    update: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutWorkflowInstanceInput>;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedCreateWithoutWorkflowInstanceInput>;
};
export type WorkflowStepApprovalUpdateWithWhereUniqueWithoutWorkflowInstanceInput = {
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateWithoutWorkflowInstanceInput, Prisma.WorkflowStepApprovalUncheckedUpdateWithoutWorkflowInstanceInput>;
};
export type WorkflowStepApprovalUpdateManyWithWhereWithoutWorkflowInstanceInput = {
    where: Prisma.WorkflowStepApprovalScalarWhereInput;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateManyMutationInput, Prisma.WorkflowStepApprovalUncheckedUpdateManyWithoutWorkflowInstanceInput>;
};
export type WorkflowStepApprovalCreateManyApproverInput = {
    id?: string;
    workflowInstanceId: string;
    approvalRuleStepId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalUpdateWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneRequiredWithoutStepApprovalsNestedInput;
    approvalRuleStep?: Prisma.ApprovalRuleStepUpdateOneRequiredWithoutStepApprovalsNestedInput;
};
export type WorkflowStepApprovalUncheckedUpdateWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutApproverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalCreateManyApprovalRuleStepInput = {
    id?: string;
    workflowInstanceId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalUpdateWithoutApprovalRuleStepInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstance?: Prisma.WorkflowInstanceUpdateOneRequiredWithoutStepApprovalsNestedInput;
    approver?: Prisma.AppUserUpdateOneRequiredWithoutStepApprovalsNestedInput;
};
export type WorkflowStepApprovalUncheckedUpdateWithoutApprovalRuleStepInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutApprovalRuleStepInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalCreateManyWorkflowInstanceInput = {
    id?: string;
    approvalRuleStepId: string;
    approverUserId: string;
    decision: $Enums.ApprovalDecision;
    decidedAt?: Date | string;
    notes?: string | null;
};
export type WorkflowStepApprovalUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvalRuleStep?: Prisma.ApprovalRuleStepUpdateOneRequiredWithoutStepApprovalsNestedInput;
    approver?: Prisma.AppUserUpdateOneRequiredWithoutStepApprovalsNestedInput;
};
export type WorkflowStepApprovalUncheckedUpdateWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalUncheckedUpdateManyWithoutWorkflowInstanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    approvalRuleStepId?: Prisma.StringFieldUpdateOperationsInput | string;
    approverUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    decision?: Prisma.EnumApprovalDecisionFieldUpdateOperationsInput | $Enums.ApprovalDecision;
    decidedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type WorkflowStepApprovalSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowInstanceId?: boolean;
    approvalRuleStepId?: boolean;
    approverUserId?: boolean;
    decision?: boolean;
    decidedAt?: boolean;
    notes?: boolean;
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowStepApproval"]>;
export type WorkflowStepApprovalSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowInstanceId?: boolean;
    approvalRuleStepId?: boolean;
    approverUserId?: boolean;
    decision?: boolean;
    decidedAt?: boolean;
    notes?: boolean;
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowStepApproval"]>;
export type WorkflowStepApprovalSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    workflowInstanceId?: boolean;
    approvalRuleStepId?: boolean;
    approverUserId?: boolean;
    decision?: boolean;
    decidedAt?: boolean;
    notes?: boolean;
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["workflowStepApproval"]>;
export type WorkflowStepApprovalSelectScalar = {
    id?: boolean;
    workflowInstanceId?: boolean;
    approvalRuleStepId?: boolean;
    approverUserId?: boolean;
    decision?: boolean;
    decidedAt?: boolean;
    notes?: boolean;
};
export type WorkflowStepApprovalOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "workflowInstanceId" | "approvalRuleStepId" | "approverUserId" | "decision" | "decidedAt" | "notes", ExtArgs["result"]["workflowStepApproval"]>;
export type WorkflowStepApprovalInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type WorkflowStepApprovalIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type WorkflowStepApprovalIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    workflowInstance?: boolean | Prisma.WorkflowInstanceDefaultArgs<ExtArgs>;
    approvalRuleStep?: boolean | Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>;
    approver?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $WorkflowStepApprovalPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WorkflowStepApproval";
    objects: {
        workflowInstance: Prisma.$WorkflowInstancePayload<ExtArgs>;
        approvalRuleStep: Prisma.$ApprovalRuleStepPayload<ExtArgs>;
        approver: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        workflowInstanceId: string;
        approvalRuleStepId: string;
        approverUserId: string;
        decision: $Enums.ApprovalDecision;
        decidedAt: Date;
        notes: string | null;
    }, ExtArgs["result"]["workflowStepApproval"]>;
    composites: {};
};
export type WorkflowStepApprovalGetPayload<S extends boolean | null | undefined | WorkflowStepApprovalDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload, S>;
export type WorkflowStepApprovalCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WorkflowStepApprovalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WorkflowStepApprovalCountAggregateInputType | true;
};
export interface WorkflowStepApprovalDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WorkflowStepApproval'];
        meta: {
            name: 'WorkflowStepApproval';
        };
    };
    findUnique<T extends WorkflowStepApprovalFindUniqueArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WorkflowStepApprovalFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WorkflowStepApprovalFindFirstArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalFindFirstArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WorkflowStepApprovalFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WorkflowStepApprovalFindManyArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WorkflowStepApprovalCreateArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalCreateArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WorkflowStepApprovalCreateManyArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WorkflowStepApprovalCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WorkflowStepApprovalDeleteArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalDeleteArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WorkflowStepApprovalUpdateArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalUpdateArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WorkflowStepApprovalDeleteManyArgs>(args?: Prisma.SelectSubset<T, WorkflowStepApprovalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WorkflowStepApprovalUpdateManyArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WorkflowStepApprovalUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WorkflowStepApprovalUpsertArgs>(args: Prisma.SelectSubset<T, WorkflowStepApprovalUpsertArgs<ExtArgs>>): Prisma.Prisma__WorkflowStepApprovalClient<runtime.Types.Result.GetResult<Prisma.$WorkflowStepApprovalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WorkflowStepApprovalCountArgs>(args?: Prisma.Subset<T, WorkflowStepApprovalCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WorkflowStepApprovalCountAggregateOutputType> : number>;
    aggregate<T extends WorkflowStepApprovalAggregateArgs>(args: Prisma.Subset<T, WorkflowStepApprovalAggregateArgs>): Prisma.PrismaPromise<GetWorkflowStepApprovalAggregateType<T>>;
    groupBy<T extends WorkflowStepApprovalGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WorkflowStepApprovalGroupByArgs['orderBy'];
    } : {
        orderBy?: WorkflowStepApprovalGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WorkflowStepApprovalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowStepApprovalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WorkflowStepApprovalFieldRefs;
}
export interface Prisma__WorkflowStepApprovalClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    workflowInstance<T extends Prisma.WorkflowInstanceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WorkflowInstanceDefaultArgs<ExtArgs>>): Prisma.Prisma__WorkflowInstanceClient<runtime.Types.Result.GetResult<Prisma.$WorkflowInstancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvalRuleStep<T extends Prisma.ApprovalRuleStepDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApprovalRuleStepDefaultArgs<ExtArgs>>): Prisma.Prisma__ApprovalRuleStepClient<runtime.Types.Result.GetResult<Prisma.$ApprovalRuleStepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approver<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WorkflowStepApprovalFieldRefs {
    readonly id: Prisma.FieldRef<"WorkflowStepApproval", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"WorkflowStepApproval", 'String'>;
    readonly approvalRuleStepId: Prisma.FieldRef<"WorkflowStepApproval", 'String'>;
    readonly approverUserId: Prisma.FieldRef<"WorkflowStepApproval", 'String'>;
    readonly decision: Prisma.FieldRef<"WorkflowStepApproval", 'ApprovalDecision'>;
    readonly decidedAt: Prisma.FieldRef<"WorkflowStepApproval", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"WorkflowStepApproval", 'String'>;
}
export type WorkflowStepApprovalFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
};
export type WorkflowStepApprovalFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
};
export type WorkflowStepApprovalFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowStepApprovalFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowStepApprovalFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type WorkflowStepApprovalCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalCreateInput, Prisma.WorkflowStepApprovalUncheckedCreateInput>;
};
export type WorkflowStepApprovalCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WorkflowStepApprovalCreateManyInput | Prisma.WorkflowStepApprovalCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WorkflowStepApprovalCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    data: Prisma.WorkflowStepApprovalCreateManyInput | Prisma.WorkflowStepApprovalCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WorkflowStepApprovalIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WorkflowStepApprovalUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateInput, Prisma.WorkflowStepApprovalUncheckedUpdateInput>;
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
};
export type WorkflowStepApprovalUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateManyMutationInput, Prisma.WorkflowStepApprovalUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowStepApprovalWhereInput;
    limit?: number;
};
export type WorkflowStepApprovalUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateManyMutationInput, Prisma.WorkflowStepApprovalUncheckedUpdateManyInput>;
    where?: Prisma.WorkflowStepApprovalWhereInput;
    limit?: number;
    include?: Prisma.WorkflowStepApprovalIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WorkflowStepApprovalUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
    create: Prisma.XOR<Prisma.WorkflowStepApprovalCreateInput, Prisma.WorkflowStepApprovalUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WorkflowStepApprovalUpdateInput, Prisma.WorkflowStepApprovalUncheckedUpdateInput>;
};
export type WorkflowStepApprovalDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
    where: Prisma.WorkflowStepApprovalWhereUniqueInput;
};
export type WorkflowStepApprovalDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WorkflowStepApprovalWhereInput;
    limit?: number;
};
export type WorkflowStepApprovalDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WorkflowStepApprovalSelect<ExtArgs> | null;
    omit?: Prisma.WorkflowStepApprovalOmit<ExtArgs> | null;
    include?: Prisma.WorkflowStepApprovalInclude<ExtArgs> | null;
};
