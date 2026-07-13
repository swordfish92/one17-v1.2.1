import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MarketingSendModel = runtime.Types.Result.DefaultSelection<Prisma.$MarketingSendPayload>;
export type AggregateMarketingSend = {
    _count: MarketingSendCountAggregateOutputType | null;
    _avg: MarketingSendAvgAggregateOutputType | null;
    _sum: MarketingSendSumAggregateOutputType | null;
    _min: MarketingSendMinAggregateOutputType | null;
    _max: MarketingSendMaxAggregateOutputType | null;
};
export type MarketingSendAvgAggregateOutputType = {
    recipientCount: number | null;
};
export type MarketingSendSumAggregateOutputType = {
    recipientCount: number | null;
};
export type MarketingSendMinAggregateOutputType = {
    id: string | null;
    resourceId: string | null;
    subject: string | null;
    body: string | null;
    status: $Enums.MarketingSendStatus | null;
    initiatedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    sentAt: Date | null;
    recipientCount: number | null;
    createdAt: Date | null;
};
export type MarketingSendMaxAggregateOutputType = {
    id: string | null;
    resourceId: string | null;
    subject: string | null;
    body: string | null;
    status: $Enums.MarketingSendStatus | null;
    initiatedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    sentAt: Date | null;
    recipientCount: number | null;
    createdAt: Date | null;
};
export type MarketingSendCountAggregateOutputType = {
    id: number;
    resourceId: number;
    subject: number;
    body: number;
    targetSegments: number;
    status: number;
    initiatedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    sentAt: number;
    recipientCount: number;
    createdAt: number;
    _all: number;
};
export type MarketingSendAvgAggregateInputType = {
    recipientCount?: true;
};
export type MarketingSendSumAggregateInputType = {
    recipientCount?: true;
};
export type MarketingSendMinAggregateInputType = {
    id?: true;
    resourceId?: true;
    subject?: true;
    body?: true;
    status?: true;
    initiatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    sentAt?: true;
    recipientCount?: true;
    createdAt?: true;
};
export type MarketingSendMaxAggregateInputType = {
    id?: true;
    resourceId?: true;
    subject?: true;
    body?: true;
    status?: true;
    initiatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    sentAt?: true;
    recipientCount?: true;
    createdAt?: true;
};
export type MarketingSendCountAggregateInputType = {
    id?: true;
    resourceId?: true;
    subject?: true;
    body?: true;
    targetSegments?: true;
    status?: true;
    initiatedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    sentAt?: true;
    recipientCount?: true;
    createdAt?: true;
    _all?: true;
};
export type MarketingSendAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSendWhereInput;
    orderBy?: Prisma.MarketingSendOrderByWithRelationInput | Prisma.MarketingSendOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSendWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MarketingSendCountAggregateInputType;
    _avg?: MarketingSendAvgAggregateInputType;
    _sum?: MarketingSendSumAggregateInputType;
    _min?: MarketingSendMinAggregateInputType;
    _max?: MarketingSendMaxAggregateInputType;
};
export type GetMarketingSendAggregateType<T extends MarketingSendAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketingSend]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketingSend[P]> : Prisma.GetScalarType<T[P], AggregateMarketingSend[P]>;
};
export type MarketingSendGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSendWhereInput;
    orderBy?: Prisma.MarketingSendOrderByWithAggregationInput | Prisma.MarketingSendOrderByWithAggregationInput[];
    by: Prisma.MarketingSendScalarFieldEnum[] | Prisma.MarketingSendScalarFieldEnum;
    having?: Prisma.MarketingSendScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarketingSendCountAggregateInputType | true;
    _avg?: MarketingSendAvgAggregateInputType;
    _sum?: MarketingSendSumAggregateInputType;
    _min?: MarketingSendMinAggregateInputType;
    _max?: MarketingSendMaxAggregateInputType;
};
export type MarketingSendGroupByOutputType = {
    id: string;
    resourceId: string | null;
    subject: string;
    body: string;
    targetSegments: string[];
    status: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    sentAt: Date | null;
    recipientCount: number | null;
    createdAt: Date;
    _count: MarketingSendCountAggregateOutputType | null;
    _avg: MarketingSendAvgAggregateOutputType | null;
    _sum: MarketingSendSumAggregateOutputType | null;
    _min: MarketingSendMinAggregateOutputType | null;
    _max: MarketingSendMaxAggregateOutputType | null;
};
export type GetMarketingSendGroupByPayload<T extends MarketingSendGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarketingSendGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarketingSendGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarketingSendGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarketingSendGroupByOutputType[P]>;
}>>;
export type MarketingSendWhereInput = {
    AND?: Prisma.MarketingSendWhereInput | Prisma.MarketingSendWhereInput[];
    OR?: Prisma.MarketingSendWhereInput[];
    NOT?: Prisma.MarketingSendWhereInput | Prisma.MarketingSendWhereInput[];
    id?: Prisma.UuidFilter<"MarketingSend"> | string;
    resourceId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    subject?: Prisma.StringFilter<"MarketingSend"> | string;
    body?: Prisma.StringFilter<"MarketingSend"> | string;
    targetSegments?: Prisma.StringNullableListFilter<"MarketingSend">;
    status?: Prisma.EnumMarketingSendStatusFilter<"MarketingSend"> | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.UuidFilter<"MarketingSend"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"MarketingSend"> | Date | string | null;
    recipientCount?: Prisma.IntNullableFilter<"MarketingSend"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingSend"> | Date | string;
    resource?: Prisma.XOR<Prisma.MarketingResourceNullableScalarRelationFilter, Prisma.MarketingResourceWhereInput> | null;
    initiatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type MarketingSendOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    resourceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetSegments?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    resource?: Prisma.MarketingResourceOrderByWithRelationInput;
    initiatedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type MarketingSendWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.MarketingSendWhereInput | Prisma.MarketingSendWhereInput[];
    OR?: Prisma.MarketingSendWhereInput[];
    NOT?: Prisma.MarketingSendWhereInput | Prisma.MarketingSendWhereInput[];
    resourceId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    subject?: Prisma.StringFilter<"MarketingSend"> | string;
    body?: Prisma.StringFilter<"MarketingSend"> | string;
    targetSegments?: Prisma.StringNullableListFilter<"MarketingSend">;
    status?: Prisma.EnumMarketingSendStatusFilter<"MarketingSend"> | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.UuidFilter<"MarketingSend"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"MarketingSend"> | Date | string | null;
    recipientCount?: Prisma.IntNullableFilter<"MarketingSend"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingSend"> | Date | string;
    resource?: Prisma.XOR<Prisma.MarketingResourceNullableScalarRelationFilter, Prisma.MarketingResourceWhereInput> | null;
    initiatedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type MarketingSendOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    resourceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetSegments?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    sentAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    recipientCount?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MarketingSendCountOrderByAggregateInput;
    _avg?: Prisma.MarketingSendAvgOrderByAggregateInput;
    _max?: Prisma.MarketingSendMaxOrderByAggregateInput;
    _min?: Prisma.MarketingSendMinOrderByAggregateInput;
    _sum?: Prisma.MarketingSendSumOrderByAggregateInput;
};
export type MarketingSendScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarketingSendScalarWhereWithAggregatesInput | Prisma.MarketingSendScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarketingSendScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarketingSendScalarWhereWithAggregatesInput | Prisma.MarketingSendScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MarketingSend"> | string;
    resourceId?: Prisma.UuidNullableWithAggregatesFilter<"MarketingSend"> | string | null;
    subject?: Prisma.StringWithAggregatesFilter<"MarketingSend"> | string;
    body?: Prisma.StringWithAggregatesFilter<"MarketingSend"> | string;
    targetSegments?: Prisma.StringNullableListFilter<"MarketingSend">;
    status?: Prisma.EnumMarketingSendStatusWithAggregatesFilter<"MarketingSend"> | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.UuidWithAggregatesFilter<"MarketingSend"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"MarketingSend"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"MarketingSend"> | string | null;
    sentAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MarketingSend"> | Date | string | null;
    recipientCount?: Prisma.IntNullableWithAggregatesFilter<"MarketingSend"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MarketingSend"> | Date | string;
};
export type MarketingSendCreateInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
    resource?: Prisma.MarketingResourceCreateNestedOneWithoutSendsInput;
    initiatedBy: Prisma.AppUserCreateNestedOneWithoutMarketingSendsInitiatedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingSendsApprovedInput;
};
export type MarketingSendUncheckedCreateInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resource?: Prisma.MarketingResourceUpdateOneWithoutSendsNestedInput;
    initiatedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingSendsInitiatedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingSendsApprovedNestedInput;
};
export type MarketingSendUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendCreateManyInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendListRelationFilter = {
    every?: Prisma.MarketingSendWhereInput;
    some?: Prisma.MarketingSendWhereInput;
    none?: Prisma.MarketingSendWhereInput;
};
export type MarketingSendOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MarketingSendCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resourceId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    targetSegments?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    recipientCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingSendAvgOrderByAggregateInput = {
    recipientCount?: Prisma.SortOrder;
};
export type MarketingSendMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resourceId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    recipientCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingSendMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    resourceId?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    body?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    initiatedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    sentAt?: Prisma.SortOrder;
    recipientCount?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingSendSumOrderByAggregateInput = {
    recipientCount?: Prisma.SortOrder;
};
export type MarketingSendCreateNestedManyWithoutInitiatedByInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput> | Prisma.MarketingSendCreateWithoutInitiatedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput | Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput[];
    createMany?: Prisma.MarketingSendCreateManyInitiatedByInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingSendCreateWithoutApprovedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput | Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.MarketingSendCreateManyApprovedByInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendUncheckedCreateNestedManyWithoutInitiatedByInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput> | Prisma.MarketingSendCreateWithoutInitiatedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput | Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput[];
    createMany?: Prisma.MarketingSendCreateManyInitiatedByInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingSendCreateWithoutApprovedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput | Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.MarketingSendCreateManyApprovedByInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendUpdateManyWithoutInitiatedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput> | Prisma.MarketingSendCreateWithoutInitiatedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput | Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutInitiatedByInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutInitiatedByInput[];
    createMany?: Prisma.MarketingSendCreateManyInitiatedByInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutInitiatedByInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutInitiatedByInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutInitiatedByInput | Prisma.MarketingSendUpdateManyWithWhereWithoutInitiatedByInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingSendCreateWithoutApprovedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput | Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.MarketingSendCreateManyApprovedByInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutApprovedByInput | Prisma.MarketingSendUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendUncheckedUpdateManyWithoutInitiatedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput> | Prisma.MarketingSendCreateWithoutInitiatedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput | Prisma.MarketingSendCreateOrConnectWithoutInitiatedByInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutInitiatedByInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutInitiatedByInput[];
    createMany?: Prisma.MarketingSendCreateManyInitiatedByInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutInitiatedByInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutInitiatedByInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutInitiatedByInput | Prisma.MarketingSendUpdateManyWithWhereWithoutInitiatedByInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingSendCreateWithoutApprovedByInput[] | Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput | Prisma.MarketingSendCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.MarketingSendCreateManyApprovedByInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutApprovedByInput | Prisma.MarketingSendUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendCreateNestedManyWithoutResourceInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput> | Prisma.MarketingSendCreateWithoutResourceInput[] | Prisma.MarketingSendUncheckedCreateWithoutResourceInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutResourceInput | Prisma.MarketingSendCreateOrConnectWithoutResourceInput[];
    createMany?: Prisma.MarketingSendCreateManyResourceInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendUncheckedCreateNestedManyWithoutResourceInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput> | Prisma.MarketingSendCreateWithoutResourceInput[] | Prisma.MarketingSendUncheckedCreateWithoutResourceInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutResourceInput | Prisma.MarketingSendCreateOrConnectWithoutResourceInput[];
    createMany?: Prisma.MarketingSendCreateManyResourceInputEnvelope;
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
};
export type MarketingSendUpdateManyWithoutResourceNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput> | Prisma.MarketingSendCreateWithoutResourceInput[] | Prisma.MarketingSendUncheckedCreateWithoutResourceInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutResourceInput | Prisma.MarketingSendCreateOrConnectWithoutResourceInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutResourceInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutResourceInput[];
    createMany?: Prisma.MarketingSendCreateManyResourceInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutResourceInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutResourceInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutResourceInput | Prisma.MarketingSendUpdateManyWithWhereWithoutResourceInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendUncheckedUpdateManyWithoutResourceNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput> | Prisma.MarketingSendCreateWithoutResourceInput[] | Prisma.MarketingSendUncheckedCreateWithoutResourceInput[];
    connectOrCreate?: Prisma.MarketingSendCreateOrConnectWithoutResourceInput | Prisma.MarketingSendCreateOrConnectWithoutResourceInput[];
    upsert?: Prisma.MarketingSendUpsertWithWhereUniqueWithoutResourceInput | Prisma.MarketingSendUpsertWithWhereUniqueWithoutResourceInput[];
    createMany?: Prisma.MarketingSendCreateManyResourceInputEnvelope;
    set?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    disconnect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    delete?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    connect?: Prisma.MarketingSendWhereUniqueInput | Prisma.MarketingSendWhereUniqueInput[];
    update?: Prisma.MarketingSendUpdateWithWhereUniqueWithoutResourceInput | Prisma.MarketingSendUpdateWithWhereUniqueWithoutResourceInput[];
    updateMany?: Prisma.MarketingSendUpdateManyWithWhereWithoutResourceInput | Prisma.MarketingSendUpdateManyWithWhereWithoutResourceInput[];
    deleteMany?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
};
export type MarketingSendCreatetargetSegmentsInput = {
    set: string[];
};
export type MarketingSendUpdatetargetSegmentsInput = {
    set?: string[];
    push?: string | string[];
};
export type EnumMarketingSendStatusFieldUpdateOperationsInput = {
    set?: $Enums.MarketingSendStatus;
};
export type MarketingSendCreateWithoutInitiatedByInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
    resource?: Prisma.MarketingResourceCreateNestedOneWithoutSendsInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingSendsApprovedInput;
};
export type MarketingSendUncheckedCreateWithoutInitiatedByInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendCreateOrConnectWithoutInitiatedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput>;
};
export type MarketingSendCreateManyInitiatedByInputEnvelope = {
    data: Prisma.MarketingSendCreateManyInitiatedByInput | Prisma.MarketingSendCreateManyInitiatedByInput[];
    skipDuplicates?: boolean;
};
export type MarketingSendCreateWithoutApprovedByInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
    resource?: Prisma.MarketingResourceCreateNestedOneWithoutSendsInput;
    initiatedBy: Prisma.AppUserCreateNestedOneWithoutMarketingSendsInitiatedInput;
};
export type MarketingSendUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput>;
};
export type MarketingSendCreateManyApprovedByInputEnvelope = {
    data: Prisma.MarketingSendCreateManyApprovedByInput | Prisma.MarketingSendCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type MarketingSendUpsertWithWhereUniqueWithoutInitiatedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketingSendUpdateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedUpdateWithoutInitiatedByInput>;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedCreateWithoutInitiatedByInput>;
};
export type MarketingSendUpdateWithWhereUniqueWithoutInitiatedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateWithoutInitiatedByInput, Prisma.MarketingSendUncheckedUpdateWithoutInitiatedByInput>;
};
export type MarketingSendUpdateManyWithWhereWithoutInitiatedByInput = {
    where: Prisma.MarketingSendScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateManyMutationInput, Prisma.MarketingSendUncheckedUpdateManyWithoutInitiatedByInput>;
};
export type MarketingSendScalarWhereInput = {
    AND?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
    OR?: Prisma.MarketingSendScalarWhereInput[];
    NOT?: Prisma.MarketingSendScalarWhereInput | Prisma.MarketingSendScalarWhereInput[];
    id?: Prisma.UuidFilter<"MarketingSend"> | string;
    resourceId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    subject?: Prisma.StringFilter<"MarketingSend"> | string;
    body?: Prisma.StringFilter<"MarketingSend"> | string;
    targetSegments?: Prisma.StringNullableListFilter<"MarketingSend">;
    status?: Prisma.EnumMarketingSendStatusFilter<"MarketingSend"> | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.UuidFilter<"MarketingSend"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"MarketingSend"> | string | null;
    sentAt?: Prisma.DateTimeNullableFilter<"MarketingSend"> | Date | string | null;
    recipientCount?: Prisma.IntNullableFilter<"MarketingSend"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingSend"> | Date | string;
};
export type MarketingSendUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketingSendUpdateWithoutApprovedByInput, Prisma.MarketingSendUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutApprovedByInput, Prisma.MarketingSendUncheckedCreateWithoutApprovedByInput>;
};
export type MarketingSendUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateWithoutApprovedByInput, Prisma.MarketingSendUncheckedUpdateWithoutApprovedByInput>;
};
export type MarketingSendUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.MarketingSendScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateManyMutationInput, Prisma.MarketingSendUncheckedUpdateManyWithoutApprovedByInput>;
};
export type MarketingSendCreateWithoutResourceInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
    initiatedBy: Prisma.AppUserCreateNestedOneWithoutMarketingSendsInitiatedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingSendsApprovedInput;
};
export type MarketingSendUncheckedCreateWithoutResourceInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendCreateOrConnectWithoutResourceInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput>;
};
export type MarketingSendCreateManyResourceInputEnvelope = {
    data: Prisma.MarketingSendCreateManyResourceInput | Prisma.MarketingSendCreateManyResourceInput[];
    skipDuplicates?: boolean;
};
export type MarketingSendUpsertWithWhereUniqueWithoutResourceInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketingSendUpdateWithoutResourceInput, Prisma.MarketingSendUncheckedUpdateWithoutResourceInput>;
    create: Prisma.XOR<Prisma.MarketingSendCreateWithoutResourceInput, Prisma.MarketingSendUncheckedCreateWithoutResourceInput>;
};
export type MarketingSendUpdateWithWhereUniqueWithoutResourceInput = {
    where: Prisma.MarketingSendWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateWithoutResourceInput, Prisma.MarketingSendUncheckedUpdateWithoutResourceInput>;
};
export type MarketingSendUpdateManyWithWhereWithoutResourceInput = {
    where: Prisma.MarketingSendScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketingSendUpdateManyMutationInput, Prisma.MarketingSendUncheckedUpdateManyWithoutResourceInput>;
};
export type MarketingSendCreateManyInitiatedByInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendCreateManyApprovedByInput = {
    id?: string;
    resourceId?: string | null;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendUpdateWithoutInitiatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resource?: Prisma.MarketingResourceUpdateOneWithoutSendsNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingSendsApprovedNestedInput;
};
export type MarketingSendUncheckedUpdateWithoutInitiatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendUncheckedUpdateManyWithoutInitiatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    resource?: Prisma.MarketingResourceUpdateOneWithoutSendsNestedInput;
    initiatedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingSendsInitiatedNestedInput;
};
export type MarketingSendUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendCreateManyResourceInput = {
    id?: string;
    subject: string;
    body: string;
    targetSegments?: Prisma.MarketingSendCreatetargetSegmentsInput | string[];
    status?: $Enums.MarketingSendStatus;
    initiatedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    sentAt?: Date | string | null;
    recipientCount?: number | null;
    createdAt?: Date | string;
};
export type MarketingSendUpdateWithoutResourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    initiatedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingSendsInitiatedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingSendsApprovedNestedInput;
};
export type MarketingSendUncheckedUpdateWithoutResourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendUncheckedUpdateManyWithoutResourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    body?: Prisma.StringFieldUpdateOperationsInput | string;
    targetSegments?: Prisma.MarketingSendUpdatetargetSegmentsInput | string[];
    status?: Prisma.EnumMarketingSendStatusFieldUpdateOperationsInput | $Enums.MarketingSendStatus;
    initiatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sentAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    recipientCount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingSendSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resourceId?: boolean;
    subject?: boolean;
    body?: boolean;
    targetSegments?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    sentAt?: boolean;
    recipientCount?: boolean;
    createdAt?: boolean;
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["marketingSend"]>;
export type MarketingSendSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resourceId?: boolean;
    subject?: boolean;
    body?: boolean;
    targetSegments?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    sentAt?: boolean;
    recipientCount?: boolean;
    createdAt?: boolean;
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["marketingSend"]>;
export type MarketingSendSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    resourceId?: boolean;
    subject?: boolean;
    body?: boolean;
    targetSegments?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    sentAt?: boolean;
    recipientCount?: boolean;
    createdAt?: boolean;
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["marketingSend"]>;
export type MarketingSendSelectScalar = {
    id?: boolean;
    resourceId?: boolean;
    subject?: boolean;
    body?: boolean;
    targetSegments?: boolean;
    status?: boolean;
    initiatedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    sentAt?: boolean;
    recipientCount?: boolean;
    createdAt?: boolean;
};
export type MarketingSendOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "resourceId" | "subject" | "body" | "targetSegments" | "status" | "initiatedByUserId" | "approvedByUserId" | "workflowInstanceId" | "sentAt" | "recipientCount" | "createdAt", ExtArgs["result"]["marketingSend"]>;
export type MarketingSendInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
};
export type MarketingSendIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
};
export type MarketingSendIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resource?: boolean | Prisma.MarketingSend$resourceArgs<ExtArgs>;
    initiatedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingSend$approvedByArgs<ExtArgs>;
};
export type $MarketingSendPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MarketingSend";
    objects: {
        resource: Prisma.$MarketingResourcePayload<ExtArgs> | null;
        initiatedBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        resourceId: string | null;
        subject: string;
        body: string;
        targetSegments: string[];
        status: $Enums.MarketingSendStatus;
        initiatedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        sentAt: Date | null;
        recipientCount: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["marketingSend"]>;
    composites: {};
};
export type MarketingSendGetPayload<S extends boolean | null | undefined | MarketingSendDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload, S>;
export type MarketingSendCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarketingSendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarketingSendCountAggregateInputType | true;
};
export interface MarketingSendDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MarketingSend'];
        meta: {
            name: 'MarketingSend';
        };
    };
    findUnique<T extends MarketingSendFindUniqueArgs>(args: Prisma.SelectSubset<T, MarketingSendFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MarketingSendFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarketingSendFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MarketingSendFindFirstArgs>(args?: Prisma.SelectSubset<T, MarketingSendFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MarketingSendFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarketingSendFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MarketingSendFindManyArgs>(args?: Prisma.SelectSubset<T, MarketingSendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MarketingSendCreateArgs>(args: Prisma.SelectSubset<T, MarketingSendCreateArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MarketingSendCreateManyArgs>(args?: Prisma.SelectSubset<T, MarketingSendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MarketingSendCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarketingSendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MarketingSendDeleteArgs>(args: Prisma.SelectSubset<T, MarketingSendDeleteArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MarketingSendUpdateArgs>(args: Prisma.SelectSubset<T, MarketingSendUpdateArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MarketingSendDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarketingSendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MarketingSendUpdateManyArgs>(args: Prisma.SelectSubset<T, MarketingSendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MarketingSendUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarketingSendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MarketingSendUpsertArgs>(args: Prisma.SelectSubset<T, MarketingSendUpsertArgs<ExtArgs>>): Prisma.Prisma__MarketingSendClient<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MarketingSendCountArgs>(args?: Prisma.Subset<T, MarketingSendCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarketingSendCountAggregateOutputType> : number>;
    aggregate<T extends MarketingSendAggregateArgs>(args: Prisma.Subset<T, MarketingSendAggregateArgs>): Prisma.PrismaPromise<GetMarketingSendAggregateType<T>>;
    groupBy<T extends MarketingSendGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarketingSendGroupByArgs['orderBy'];
    } : {
        orderBy?: MarketingSendGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarketingSendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingSendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MarketingSendFieldRefs;
}
export interface Prisma__MarketingSendClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    resource<T extends Prisma.MarketingSend$resourceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketingSend$resourceArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    initiatedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.MarketingSend$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketingSend$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MarketingSendFieldRefs {
    readonly id: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly resourceId: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly subject: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly body: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly targetSegments: Prisma.FieldRef<"MarketingSend", 'String[]'>;
    readonly status: Prisma.FieldRef<"MarketingSend", 'MarketingSendStatus'>;
    readonly initiatedByUserId: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"MarketingSend", 'String'>;
    readonly sentAt: Prisma.FieldRef<"MarketingSend", 'DateTime'>;
    readonly recipientCount: Prisma.FieldRef<"MarketingSend", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MarketingSend", 'DateTime'>;
}
export type MarketingSendFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where: Prisma.MarketingSendWhereUniqueInput;
};
export type MarketingSendFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where: Prisma.MarketingSendWhereUniqueInput;
};
export type MarketingSendFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where?: Prisma.MarketingSendWhereInput;
    orderBy?: Prisma.MarketingSendOrderByWithRelationInput | Prisma.MarketingSendOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSendScalarFieldEnum | Prisma.MarketingSendScalarFieldEnum[];
};
export type MarketingSendFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where?: Prisma.MarketingSendWhereInput;
    orderBy?: Prisma.MarketingSendOrderByWithRelationInput | Prisma.MarketingSendOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSendScalarFieldEnum | Prisma.MarketingSendScalarFieldEnum[];
};
export type MarketingSendFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where?: Prisma.MarketingSendWhereInput;
    orderBy?: Prisma.MarketingSendOrderByWithRelationInput | Prisma.MarketingSendOrderByWithRelationInput[];
    cursor?: Prisma.MarketingSendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingSendScalarFieldEnum | Prisma.MarketingSendScalarFieldEnum[];
};
export type MarketingSendCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSendCreateInput, Prisma.MarketingSendUncheckedCreateInput>;
};
export type MarketingSendCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MarketingSendCreateManyInput | Prisma.MarketingSendCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MarketingSendCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    data: Prisma.MarketingSendCreateManyInput | Prisma.MarketingSendCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MarketingSendIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MarketingSendUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSendUpdateInput, Prisma.MarketingSendUncheckedUpdateInput>;
    where: Prisma.MarketingSendWhereUniqueInput;
};
export type MarketingSendUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MarketingSendUpdateManyMutationInput, Prisma.MarketingSendUncheckedUpdateManyInput>;
    where?: Prisma.MarketingSendWhereInput;
    limit?: number;
};
export type MarketingSendUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingSendUpdateManyMutationInput, Prisma.MarketingSendUncheckedUpdateManyInput>;
    where?: Prisma.MarketingSendWhereInput;
    limit?: number;
    include?: Prisma.MarketingSendIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MarketingSendUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where: Prisma.MarketingSendWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingSendCreateInput, Prisma.MarketingSendUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MarketingSendUpdateInput, Prisma.MarketingSendUncheckedUpdateInput>;
};
export type MarketingSendDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
    where: Prisma.MarketingSendWhereUniqueInput;
};
export type MarketingSendDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSendWhereInput;
    limit?: number;
};
export type MarketingSend$resourceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where?: Prisma.MarketingResourceWhereInput;
};
export type MarketingSend$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type MarketingSendDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingSendSelect<ExtArgs> | null;
    omit?: Prisma.MarketingSendOmit<ExtArgs> | null;
    include?: Prisma.MarketingSendInclude<ExtArgs> | null;
};
