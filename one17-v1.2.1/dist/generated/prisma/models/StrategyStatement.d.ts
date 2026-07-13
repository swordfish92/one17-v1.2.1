import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StrategyStatementModel = runtime.Types.Result.DefaultSelection<Prisma.$StrategyStatementPayload>;
export type AggregateStrategyStatement = {
    _count: StrategyStatementCountAggregateOutputType | null;
    _min: StrategyStatementMinAggregateOutputType | null;
    _max: StrategyStatementMaxAggregateOutputType | null;
};
export type StrategyStatementMinAggregateOutputType = {
    id: string | null;
    statementTypeCode: string | null;
    content: string | null;
    explanation: string | null;
    status: $Enums.GovernedItemStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type StrategyStatementMaxAggregateOutputType = {
    id: string | null;
    statementTypeCode: string | null;
    content: string | null;
    explanation: string | null;
    status: $Enums.GovernedItemStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type StrategyStatementCountAggregateOutputType = {
    id: number;
    statementTypeCode: number;
    content: number;
    explanation: number;
    status: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type StrategyStatementMinAggregateInputType = {
    id?: true;
    statementTypeCode?: true;
    content?: true;
    explanation?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type StrategyStatementMaxAggregateInputType = {
    id?: true;
    statementTypeCode?: true;
    content?: true;
    explanation?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type StrategyStatementCountAggregateInputType = {
    id?: true;
    statementTypeCode?: true;
    content?: true;
    explanation?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type StrategyStatementAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithRelationInput | Prisma.StrategyStatementOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StrategyStatementCountAggregateInputType;
    _min?: StrategyStatementMinAggregateInputType;
    _max?: StrategyStatementMaxAggregateInputType;
};
export type GetStrategyStatementAggregateType<T extends StrategyStatementAggregateArgs> = {
    [P in keyof T & keyof AggregateStrategyStatement]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStrategyStatement[P]> : Prisma.GetScalarType<T[P], AggregateStrategyStatement[P]>;
};
export type StrategyStatementGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithAggregationInput | Prisma.StrategyStatementOrderByWithAggregationInput[];
    by: Prisma.StrategyStatementScalarFieldEnum[] | Prisma.StrategyStatementScalarFieldEnum;
    having?: Prisma.StrategyStatementScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StrategyStatementCountAggregateInputType | true;
    _min?: StrategyStatementMinAggregateInputType;
    _max?: StrategyStatementMaxAggregateInputType;
};
export type StrategyStatementGroupByOutputType = {
    id: string;
    statementTypeCode: string;
    content: string;
    explanation: string | null;
    status: $Enums.GovernedItemStatus;
    boardResolutionRef: string | null;
    proposedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date;
    _count: StrategyStatementCountAggregateOutputType | null;
    _min: StrategyStatementMinAggregateOutputType | null;
    _max: StrategyStatementMaxAggregateOutputType | null;
};
export type GetStrategyStatementGroupByPayload<T extends StrategyStatementGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StrategyStatementGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StrategyStatementGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StrategyStatementGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StrategyStatementGroupByOutputType[P]>;
}>>;
export type StrategyStatementWhereInput = {
    AND?: Prisma.StrategyStatementWhereInput | Prisma.StrategyStatementWhereInput[];
    OR?: Prisma.StrategyStatementWhereInput[];
    NOT?: Prisma.StrategyStatementWhereInput | Prisma.StrategyStatementWhereInput[];
    id?: Prisma.UuidFilter<"StrategyStatement"> | string;
    statementTypeCode?: Prisma.StringFilter<"StrategyStatement"> | string;
    content?: Prisma.StringFilter<"StrategyStatement"> | string;
    explanation?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategyStatement"> | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    proposedByUserId?: Prisma.UuidFilter<"StrategyStatement"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategyStatement"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StrategyStatement"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StrategyStatement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StrategyStatement"> | Date | string;
    statementType?: Prisma.XOR<Prisma.StrategyStatementTypeConfigScalarRelationFilter, Prisma.StrategyStatementTypeConfigWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type StrategyStatementOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    statementTypeCode?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    statementType?: Prisma.StrategyStatementTypeConfigOrderByWithRelationInput;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type StrategyStatementWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.StrategyStatementWhereInput | Prisma.StrategyStatementWhereInput[];
    OR?: Prisma.StrategyStatementWhereInput[];
    NOT?: Prisma.StrategyStatementWhereInput | Prisma.StrategyStatementWhereInput[];
    statementTypeCode?: Prisma.StringFilter<"StrategyStatement"> | string;
    content?: Prisma.StringFilter<"StrategyStatement"> | string;
    explanation?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategyStatement"> | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    proposedByUserId?: Prisma.UuidFilter<"StrategyStatement"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategyStatement"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StrategyStatement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StrategyStatement"> | Date | string;
    statementType?: Prisma.XOR<Prisma.StrategyStatementTypeConfigScalarRelationFilter, Prisma.StrategyStatementTypeConfigWhereInput>;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type StrategyStatementOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    statementTypeCode?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    explanation?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.StrategyStatementCountOrderByAggregateInput;
    _max?: Prisma.StrategyStatementMaxOrderByAggregateInput;
    _min?: Prisma.StrategyStatementMinOrderByAggregateInput;
};
export type StrategyStatementScalarWhereWithAggregatesInput = {
    AND?: Prisma.StrategyStatementScalarWhereWithAggregatesInput | Prisma.StrategyStatementScalarWhereWithAggregatesInput[];
    OR?: Prisma.StrategyStatementScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StrategyStatementScalarWhereWithAggregatesInput | Prisma.StrategyStatementScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StrategyStatement"> | string;
    statementTypeCode?: Prisma.StringWithAggregatesFilter<"StrategyStatement"> | string;
    content?: Prisma.StringWithAggregatesFilter<"StrategyStatement"> | string;
    explanation?: Prisma.StringNullableWithAggregatesFilter<"StrategyStatement"> | string | null;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"StrategyStatement"> | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"StrategyStatement"> | string | null;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"StrategyStatement"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"StrategyStatement"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"StrategyStatement"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"StrategyStatement"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"StrategyStatement"> | Date | string;
};
export type StrategyStatementCreateInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    statementType: Prisma.StrategyStatementTypeConfigCreateNestedOneWithoutStatementsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsApprovedInput;
};
export type StrategyStatementUncheckedCreateInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statementType?: Prisma.StrategyStatementTypeConfigUpdateOneRequiredWithoutStatementsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutStrategyStatementsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStrategyStatementsApprovedNestedInput;
};
export type StrategyStatementUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementCreateManyInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementListRelationFilter = {
    every?: Prisma.StrategyStatementWhereInput;
    some?: Prisma.StrategyStatementWhereInput;
    none?: Prisma.StrategyStatementWhereInput;
};
export type StrategyStatementOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StrategyStatementCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTypeCode?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTypeCode?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    statementTypeCode?: Prisma.SortOrder;
    content?: Prisma.SortOrder;
    explanation?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type StrategyStatementCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput> | Prisma.StrategyStatementCreateWithoutProposedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput | Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyProposedByInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput> | Prisma.StrategyStatementCreateWithoutApprovedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput | Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyApprovedByInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput> | Prisma.StrategyStatementCreateWithoutProposedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput | Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyProposedByInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput> | Prisma.StrategyStatementCreateWithoutApprovedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput | Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyApprovedByInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput> | Prisma.StrategyStatementCreateWithoutProposedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput | Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutProposedByInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyProposedByInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutProposedByInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutProposedByInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput> | Prisma.StrategyStatementCreateWithoutApprovedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput | Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyApprovedByInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutApprovedByInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput> | Prisma.StrategyStatementCreateWithoutProposedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput | Prisma.StrategyStatementCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutProposedByInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyProposedByInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutProposedByInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutProposedByInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput> | Prisma.StrategyStatementCreateWithoutApprovedByInput[] | Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput | Prisma.StrategyStatementCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.StrategyStatementCreateManyApprovedByInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutApprovedByInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementCreateNestedManyWithoutStatementTypeInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput> | Prisma.StrategyStatementCreateWithoutStatementTypeInput[] | Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput | Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput[];
    createMany?: Prisma.StrategyStatementCreateManyStatementTypeInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementUncheckedCreateNestedManyWithoutStatementTypeInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput> | Prisma.StrategyStatementCreateWithoutStatementTypeInput[] | Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput | Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput[];
    createMany?: Prisma.StrategyStatementCreateManyStatementTypeInputEnvelope;
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
};
export type StrategyStatementUpdateManyWithoutStatementTypeNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput> | Prisma.StrategyStatementCreateWithoutStatementTypeInput[] | Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput | Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutStatementTypeInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutStatementTypeInput[];
    createMany?: Prisma.StrategyStatementCreateManyStatementTypeInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutStatementTypeInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutStatementTypeInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutStatementTypeInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutStatementTypeInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementUncheckedUpdateManyWithoutStatementTypeNestedInput = {
    create?: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput> | Prisma.StrategyStatementCreateWithoutStatementTypeInput[] | Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput[];
    connectOrCreate?: Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput | Prisma.StrategyStatementCreateOrConnectWithoutStatementTypeInput[];
    upsert?: Prisma.StrategyStatementUpsertWithWhereUniqueWithoutStatementTypeInput | Prisma.StrategyStatementUpsertWithWhereUniqueWithoutStatementTypeInput[];
    createMany?: Prisma.StrategyStatementCreateManyStatementTypeInputEnvelope;
    set?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    disconnect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    delete?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    connect?: Prisma.StrategyStatementWhereUniqueInput | Prisma.StrategyStatementWhereUniqueInput[];
    update?: Prisma.StrategyStatementUpdateWithWhereUniqueWithoutStatementTypeInput | Prisma.StrategyStatementUpdateWithWhereUniqueWithoutStatementTypeInput[];
    updateMany?: Prisma.StrategyStatementUpdateManyWithWhereWithoutStatementTypeInput | Prisma.StrategyStatementUpdateManyWithWhereWithoutStatementTypeInput[];
    deleteMany?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
};
export type StrategyStatementCreateWithoutProposedByInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    statementType: Prisma.StrategyStatementTypeConfigCreateNestedOneWithoutStatementsInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsApprovedInput;
};
export type StrategyStatementUncheckedCreateWithoutProposedByInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementCreateOrConnectWithoutProposedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput>;
};
export type StrategyStatementCreateManyProposedByInputEnvelope = {
    data: Prisma.StrategyStatementCreateManyProposedByInput | Prisma.StrategyStatementCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementCreateWithoutApprovedByInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    statementType: Prisma.StrategyStatementTypeConfigCreateNestedOneWithoutStatementsInput;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsProposedInput;
};
export type StrategyStatementUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput>;
};
export type StrategyStatementCreateManyApprovedByInputEnvelope = {
    data: Prisma.StrategyStatementCreateManyApprovedByInput | Prisma.StrategyStatementCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutProposedByInput, Prisma.StrategyStatementUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutProposedByInput, Prisma.StrategyStatementUncheckedCreateWithoutProposedByInput>;
};
export type StrategyStatementUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutProposedByInput, Prisma.StrategyStatementUncheckedUpdateWithoutProposedByInput>;
};
export type StrategyStatementUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.StrategyStatementScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateManyMutationInput, Prisma.StrategyStatementUncheckedUpdateManyWithoutProposedByInput>;
};
export type StrategyStatementScalarWhereInput = {
    AND?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
    OR?: Prisma.StrategyStatementScalarWhereInput[];
    NOT?: Prisma.StrategyStatementScalarWhereInput | Prisma.StrategyStatementScalarWhereInput[];
    id?: Prisma.UuidFilter<"StrategyStatement"> | string;
    statementTypeCode?: Prisma.StringFilter<"StrategyStatement"> | string;
    content?: Prisma.StringFilter<"StrategyStatement"> | string;
    explanation?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"StrategyStatement"> | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"StrategyStatement"> | string | null;
    proposedByUserId?: Prisma.UuidFilter<"StrategyStatement"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"StrategyStatement"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"StrategyStatement"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"StrategyStatement"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"StrategyStatement"> | Date | string;
};
export type StrategyStatementUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedCreateWithoutApprovedByInput>;
};
export type StrategyStatementUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutApprovedByInput, Prisma.StrategyStatementUncheckedUpdateWithoutApprovedByInput>;
};
export type StrategyStatementUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.StrategyStatementScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateManyMutationInput, Prisma.StrategyStatementUncheckedUpdateManyWithoutApprovedByInput>;
};
export type StrategyStatementCreateWithoutStatementTypeInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutStrategyStatementsApprovedInput;
};
export type StrategyStatementUncheckedCreateWithoutStatementTypeInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementCreateOrConnectWithoutStatementTypeInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput>;
};
export type StrategyStatementCreateManyStatementTypeInputEnvelope = {
    data: Prisma.StrategyStatementCreateManyStatementTypeInput | Prisma.StrategyStatementCreateManyStatementTypeInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementUpsertWithWhereUniqueWithoutStatementTypeInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    update: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedUpdateWithoutStatementTypeInput>;
    create: Prisma.XOR<Prisma.StrategyStatementCreateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedCreateWithoutStatementTypeInput>;
};
export type StrategyStatementUpdateWithWhereUniqueWithoutStatementTypeInput = {
    where: Prisma.StrategyStatementWhereUniqueInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateWithoutStatementTypeInput, Prisma.StrategyStatementUncheckedUpdateWithoutStatementTypeInput>;
};
export type StrategyStatementUpdateManyWithWhereWithoutStatementTypeInput = {
    where: Prisma.StrategyStatementScalarWhereInput;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateManyMutationInput, Prisma.StrategyStatementUncheckedUpdateManyWithoutStatementTypeInput>;
};
export type StrategyStatementCreateManyProposedByInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementCreateManyApprovedByInput = {
    id?: string;
    statementTypeCode: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statementType?: Prisma.StrategyStatementTypeConfigUpdateOneRequiredWithoutStatementsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStrategyStatementsApprovedNestedInput;
};
export type StrategyStatementUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    statementType?: Prisma.StrategyStatementTypeConfigUpdateOneRequiredWithoutStatementsNestedInput;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutStrategyStatementsProposedNestedInput;
};
export type StrategyStatementUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    statementTypeCode?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementCreateManyStatementTypeInput = {
    id?: string;
    content: string;
    explanation?: string | null;
    status?: $Enums.GovernedItemStatus;
    boardResolutionRef?: string | null;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type StrategyStatementUpdateWithoutStatementTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutStrategyStatementsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutStrategyStatementsApprovedNestedInput;
};
export type StrategyStatementUncheckedUpdateWithoutStatementTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementUncheckedUpdateManyWithoutStatementTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    content?: Prisma.StringFieldUpdateOperationsInput | string;
    explanation?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StrategyStatementSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTypeCode?: boolean;
    content?: boolean;
    explanation?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["strategyStatement"]>;
export type StrategyStatementSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTypeCode?: boolean;
    content?: boolean;
    explanation?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["strategyStatement"]>;
export type StrategyStatementSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    statementTypeCode?: boolean;
    content?: boolean;
    explanation?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["strategyStatement"]>;
export type StrategyStatementSelectScalar = {
    id?: boolean;
    statementTypeCode?: boolean;
    content?: boolean;
    explanation?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type StrategyStatementOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "statementTypeCode" | "content" | "explanation" | "status" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "effectiveFrom" | "createdAt", ExtArgs["result"]["strategyStatement"]>;
export type StrategyStatementInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
};
export type StrategyStatementIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
};
export type StrategyStatementIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    statementType?: boolean | Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.StrategyStatement$approvedByArgs<ExtArgs>;
};
export type $StrategyStatementPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StrategyStatement";
    objects: {
        statementType: Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>;
        proposedBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        statementTypeCode: string;
        content: string;
        explanation: string | null;
        status: $Enums.GovernedItemStatus;
        boardResolutionRef: string | null;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["strategyStatement"]>;
    composites: {};
};
export type StrategyStatementGetPayload<S extends boolean | null | undefined | StrategyStatementDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload, S>;
export type StrategyStatementCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StrategyStatementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StrategyStatementCountAggregateInputType | true;
};
export interface StrategyStatementDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StrategyStatement'];
        meta: {
            name: 'StrategyStatement';
        };
    };
    findUnique<T extends StrategyStatementFindUniqueArgs>(args: Prisma.SelectSubset<T, StrategyStatementFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StrategyStatementFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StrategyStatementFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StrategyStatementFindFirstArgs>(args?: Prisma.SelectSubset<T, StrategyStatementFindFirstArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StrategyStatementFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StrategyStatementFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StrategyStatementFindManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StrategyStatementCreateArgs>(args: Prisma.SelectSubset<T, StrategyStatementCreateArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StrategyStatementCreateManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StrategyStatementCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StrategyStatementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StrategyStatementDeleteArgs>(args: Prisma.SelectSubset<T, StrategyStatementDeleteArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StrategyStatementUpdateArgs>(args: Prisma.SelectSubset<T, StrategyStatementUpdateArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StrategyStatementDeleteManyArgs>(args?: Prisma.SelectSubset<T, StrategyStatementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StrategyStatementUpdateManyArgs>(args: Prisma.SelectSubset<T, StrategyStatementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StrategyStatementUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StrategyStatementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StrategyStatementUpsertArgs>(args: Prisma.SelectSubset<T, StrategyStatementUpsertArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StrategyStatementCountArgs>(args?: Prisma.Subset<T, StrategyStatementCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StrategyStatementCountAggregateOutputType> : number>;
    aggregate<T extends StrategyStatementAggregateArgs>(args: Prisma.Subset<T, StrategyStatementAggregateArgs>): Prisma.PrismaPromise<GetStrategyStatementAggregateType<T>>;
    groupBy<T extends StrategyStatementGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StrategyStatementGroupByArgs['orderBy'];
    } : {
        orderBy?: StrategyStatementGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StrategyStatementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStrategyStatementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StrategyStatementFieldRefs;
}
export interface Prisma__StrategyStatementClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    statementType<T extends Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategyStatementTypeConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__StrategyStatementTypeConfigClient<runtime.Types.Result.GetResult<Prisma.$StrategyStatementTypeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    proposedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.StrategyStatement$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.StrategyStatement$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StrategyStatementFieldRefs {
    readonly id: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly statementTypeCode: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly content: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly explanation: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly status: Prisma.FieldRef<"StrategyStatement", 'GovernedItemStatus'>;
    readonly boardResolutionRef: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"StrategyStatement", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"StrategyStatement", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"StrategyStatement", 'DateTime'>;
}
export type StrategyStatementFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementWhereUniqueInput;
};
export type StrategyStatementFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementWhereUniqueInput;
};
export type StrategyStatementFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithRelationInput | Prisma.StrategyStatementOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementScalarFieldEnum | Prisma.StrategyStatementScalarFieldEnum[];
};
export type StrategyStatementFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithRelationInput | Prisma.StrategyStatementOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementScalarFieldEnum | Prisma.StrategyStatementScalarFieldEnum[];
};
export type StrategyStatementFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where?: Prisma.StrategyStatementWhereInput;
    orderBy?: Prisma.StrategyStatementOrderByWithRelationInput | Prisma.StrategyStatementOrderByWithRelationInput[];
    cursor?: Prisma.StrategyStatementWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StrategyStatementScalarFieldEnum | Prisma.StrategyStatementScalarFieldEnum[];
};
export type StrategyStatementCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementCreateInput, Prisma.StrategyStatementUncheckedCreateInput>;
};
export type StrategyStatementCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StrategyStatementCreateManyInput | Prisma.StrategyStatementCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StrategyStatementCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    data: Prisma.StrategyStatementCreateManyInput | Prisma.StrategyStatementCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StrategyStatementIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StrategyStatementUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateInput, Prisma.StrategyStatementUncheckedUpdateInput>;
    where: Prisma.StrategyStatementWhereUniqueInput;
};
export type StrategyStatementUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StrategyStatementUpdateManyMutationInput, Prisma.StrategyStatementUncheckedUpdateManyInput>;
    where?: Prisma.StrategyStatementWhereInput;
    limit?: number;
};
export type StrategyStatementUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StrategyStatementUpdateManyMutationInput, Prisma.StrategyStatementUncheckedUpdateManyInput>;
    where?: Prisma.StrategyStatementWhereInput;
    limit?: number;
    include?: Prisma.StrategyStatementIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StrategyStatementUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementWhereUniqueInput;
    create: Prisma.XOR<Prisma.StrategyStatementCreateInput, Prisma.StrategyStatementUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StrategyStatementUpdateInput, Prisma.StrategyStatementUncheckedUpdateInput>;
};
export type StrategyStatementDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
    where: Prisma.StrategyStatementWhereUniqueInput;
};
export type StrategyStatementDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StrategyStatementWhereInput;
    limit?: number;
};
export type StrategyStatement$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type StrategyStatementDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StrategyStatementSelect<ExtArgs> | null;
    omit?: Prisma.StrategyStatementOmit<ExtArgs> | null;
    include?: Prisma.StrategyStatementInclude<ExtArgs> | null;
};
