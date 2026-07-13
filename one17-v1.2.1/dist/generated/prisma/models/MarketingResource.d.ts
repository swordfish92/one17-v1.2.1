import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MarketingResourceModel = runtime.Types.Result.DefaultSelection<Prisma.$MarketingResourcePayload>;
export type AggregateMarketingResource = {
    _count: MarketingResourceCountAggregateOutputType | null;
    _avg: MarketingResourceAvgAggregateOutputType | null;
    _sum: MarketingResourceSumAggregateOutputType | null;
    _min: MarketingResourceMinAggregateOutputType | null;
    _max: MarketingResourceMaxAggregateOutputType | null;
};
export type MarketingResourceAvgAggregateOutputType = {
    version: number | null;
};
export type MarketingResourceSumAggregateOutputType = {
    version: number | null;
};
export type MarketingResourceMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    resourceType: string | null;
    fileReference: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type MarketingResourceMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    resourceType: string | null;
    fileReference: string | null;
    version: number | null;
    status: $Enums.GovernedItemStatus | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type MarketingResourceCountAggregateOutputType = {
    id: number;
    title: number;
    resourceType: number;
    fileReference: number;
    version: number;
    status: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type MarketingResourceAvgAggregateInputType = {
    version?: true;
};
export type MarketingResourceSumAggregateInputType = {
    version?: true;
};
export type MarketingResourceMinAggregateInputType = {
    id?: true;
    title?: true;
    resourceType?: true;
    fileReference?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type MarketingResourceMaxAggregateInputType = {
    id?: true;
    title?: true;
    resourceType?: true;
    fileReference?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type MarketingResourceCountAggregateInputType = {
    id?: true;
    title?: true;
    resourceType?: true;
    fileReference?: true;
    version?: true;
    status?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type MarketingResourceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingResourceWhereInput;
    orderBy?: Prisma.MarketingResourceOrderByWithRelationInput | Prisma.MarketingResourceOrderByWithRelationInput[];
    cursor?: Prisma.MarketingResourceWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MarketingResourceCountAggregateInputType;
    _avg?: MarketingResourceAvgAggregateInputType;
    _sum?: MarketingResourceSumAggregateInputType;
    _min?: MarketingResourceMinAggregateInputType;
    _max?: MarketingResourceMaxAggregateInputType;
};
export type GetMarketingResourceAggregateType<T extends MarketingResourceAggregateArgs> = {
    [P in keyof T & keyof AggregateMarketingResource]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMarketingResource[P]> : Prisma.GetScalarType<T[P], AggregateMarketingResource[P]>;
};
export type MarketingResourceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingResourceWhereInput;
    orderBy?: Prisma.MarketingResourceOrderByWithAggregationInput | Prisma.MarketingResourceOrderByWithAggregationInput[];
    by: Prisma.MarketingResourceScalarFieldEnum[] | Prisma.MarketingResourceScalarFieldEnum;
    having?: Prisma.MarketingResourceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MarketingResourceCountAggregateInputType | true;
    _avg?: MarketingResourceAvgAggregateInputType;
    _sum?: MarketingResourceSumAggregateInputType;
    _min?: MarketingResourceMinAggregateInputType;
    _max?: MarketingResourceMaxAggregateInputType;
};
export type MarketingResourceGroupByOutputType = {
    id: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version: number;
    status: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: MarketingResourceCountAggregateOutputType | null;
    _avg: MarketingResourceAvgAggregateOutputType | null;
    _sum: MarketingResourceSumAggregateOutputType | null;
    _min: MarketingResourceMinAggregateOutputType | null;
    _max: MarketingResourceMaxAggregateOutputType | null;
};
export type GetMarketingResourceGroupByPayload<T extends MarketingResourceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MarketingResourceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MarketingResourceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MarketingResourceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MarketingResourceGroupByOutputType[P]>;
}>>;
export type MarketingResourceWhereInput = {
    AND?: Prisma.MarketingResourceWhereInput | Prisma.MarketingResourceWhereInput[];
    OR?: Prisma.MarketingResourceWhereInput[];
    NOT?: Prisma.MarketingResourceWhereInput | Prisma.MarketingResourceWhereInput[];
    id?: Prisma.UuidFilter<"MarketingResource"> | string;
    title?: Prisma.StringFilter<"MarketingResource"> | string;
    resourceType?: Prisma.StringFilter<"MarketingResource"> | string;
    fileReference?: Prisma.StringFilter<"MarketingResource"> | string;
    version?: Prisma.IntFilter<"MarketingResource"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"MarketingResource"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"MarketingResource"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingResource"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"MarketingResource"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingResource"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    sends?: Prisma.MarketingSendListRelationFilter;
};
export type MarketingResourceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    resourceType?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
    sends?: Prisma.MarketingSendOrderByRelationAggregateInput;
};
export type MarketingResourceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.MarketingResourceWhereInput | Prisma.MarketingResourceWhereInput[];
    OR?: Prisma.MarketingResourceWhereInput[];
    NOT?: Prisma.MarketingResourceWhereInput | Prisma.MarketingResourceWhereInput[];
    title?: Prisma.StringFilter<"MarketingResource"> | string;
    resourceType?: Prisma.StringFilter<"MarketingResource"> | string;
    fileReference?: Prisma.StringFilter<"MarketingResource"> | string;
    version?: Prisma.IntFilter<"MarketingResource"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"MarketingResource"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"MarketingResource"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingResource"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingResource"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    sends?: Prisma.MarketingSendListRelationFilter;
}, "id" | "workflowInstanceId">;
export type MarketingResourceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    resourceType?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.MarketingResourceCountOrderByAggregateInput;
    _avg?: Prisma.MarketingResourceAvgOrderByAggregateInput;
    _max?: Prisma.MarketingResourceMaxOrderByAggregateInput;
    _min?: Prisma.MarketingResourceMinOrderByAggregateInput;
    _sum?: Prisma.MarketingResourceSumOrderByAggregateInput;
};
export type MarketingResourceScalarWhereWithAggregatesInput = {
    AND?: Prisma.MarketingResourceScalarWhereWithAggregatesInput | Prisma.MarketingResourceScalarWhereWithAggregatesInput[];
    OR?: Prisma.MarketingResourceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MarketingResourceScalarWhereWithAggregatesInput | Prisma.MarketingResourceScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MarketingResource"> | string;
    title?: Prisma.StringWithAggregatesFilter<"MarketingResource"> | string;
    resourceType?: Prisma.StringWithAggregatesFilter<"MarketingResource"> | string;
    fileReference?: Prisma.StringWithAggregatesFilter<"MarketingResource"> | string;
    version?: Prisma.IntWithAggregatesFilter<"MarketingResource"> | number;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"MarketingResource"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidWithAggregatesFilter<"MarketingResource"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"MarketingResource"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"MarketingResource"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MarketingResource"> | Date | string;
};
export type MarketingResourceCreateInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesApprovedInput;
    sends?: Prisma.MarketingSendCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceUncheckedCreateInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    sends?: Prisma.MarketingSendUncheckedCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingResourcesProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingResourcesApprovedNestedInput;
    sends?: Prisma.MarketingSendUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sends?: Prisma.MarketingSendUncheckedUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceCreateManyInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type MarketingResourceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingResourceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingResourceListRelationFilter = {
    every?: Prisma.MarketingResourceWhereInput;
    some?: Prisma.MarketingResourceWhereInput;
    none?: Prisma.MarketingResourceWhereInput;
};
export type MarketingResourceOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MarketingResourceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    resourceType?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingResourceAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type MarketingResourceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    resourceType?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingResourceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    resourceType?: Prisma.SortOrder;
    fileReference?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type MarketingResourceSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type MarketingResourceNullableScalarRelationFilter = {
    is?: Prisma.MarketingResourceWhereInput | null;
    isNot?: Prisma.MarketingResourceWhereInput | null;
};
export type MarketingResourceCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput> | Prisma.MarketingResourceCreateWithoutProposedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput | Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyProposedByInputEnvelope;
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
};
export type MarketingResourceCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingResourceCreateWithoutApprovedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput | Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyApprovedByInputEnvelope;
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
};
export type MarketingResourceUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput> | Prisma.MarketingResourceCreateWithoutProposedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput | Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyProposedByInputEnvelope;
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
};
export type MarketingResourceUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingResourceCreateWithoutApprovedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput | Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyApprovedByInputEnvelope;
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
};
export type MarketingResourceUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput> | Prisma.MarketingResourceCreateWithoutProposedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput | Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.MarketingResourceUpsertWithWhereUniqueWithoutProposedByInput | Prisma.MarketingResourceUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyProposedByInputEnvelope;
    set?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    disconnect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    delete?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    update?: Prisma.MarketingResourceUpdateWithWhereUniqueWithoutProposedByInput | Prisma.MarketingResourceUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.MarketingResourceUpdateManyWithWhereWithoutProposedByInput | Prisma.MarketingResourceUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
};
export type MarketingResourceUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingResourceCreateWithoutApprovedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput | Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.MarketingResourceUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingResourceUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyApprovedByInputEnvelope;
    set?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    disconnect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    delete?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    update?: Prisma.MarketingResourceUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingResourceUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.MarketingResourceUpdateManyWithWhereWithoutApprovedByInput | Prisma.MarketingResourceUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
};
export type MarketingResourceUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput> | Prisma.MarketingResourceCreateWithoutProposedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput | Prisma.MarketingResourceCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.MarketingResourceUpsertWithWhereUniqueWithoutProposedByInput | Prisma.MarketingResourceUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyProposedByInputEnvelope;
    set?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    disconnect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    delete?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    update?: Prisma.MarketingResourceUpdateWithWhereUniqueWithoutProposedByInput | Prisma.MarketingResourceUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.MarketingResourceUpdateManyWithWhereWithoutProposedByInput | Prisma.MarketingResourceUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
};
export type MarketingResourceUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput> | Prisma.MarketingResourceCreateWithoutApprovedByInput[] | Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput | Prisma.MarketingResourceCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.MarketingResourceUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingResourceUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.MarketingResourceCreateManyApprovedByInputEnvelope;
    set?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    disconnect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    delete?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    connect?: Prisma.MarketingResourceWhereUniqueInput | Prisma.MarketingResourceWhereUniqueInput[];
    update?: Prisma.MarketingResourceUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.MarketingResourceUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.MarketingResourceUpdateManyWithWhereWithoutApprovedByInput | Prisma.MarketingResourceUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
};
export type MarketingResourceCreateNestedOneWithoutSendsInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutSendsInput, Prisma.MarketingResourceUncheckedCreateWithoutSendsInput>;
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutSendsInput;
    connect?: Prisma.MarketingResourceWhereUniqueInput;
};
export type MarketingResourceUpdateOneWithoutSendsNestedInput = {
    create?: Prisma.XOR<Prisma.MarketingResourceCreateWithoutSendsInput, Prisma.MarketingResourceUncheckedCreateWithoutSendsInput>;
    connectOrCreate?: Prisma.MarketingResourceCreateOrConnectWithoutSendsInput;
    upsert?: Prisma.MarketingResourceUpsertWithoutSendsInput;
    disconnect?: Prisma.MarketingResourceWhereInput | boolean;
    delete?: Prisma.MarketingResourceWhereInput | boolean;
    connect?: Prisma.MarketingResourceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MarketingResourceUpdateToOneWithWhereWithoutSendsInput, Prisma.MarketingResourceUpdateWithoutSendsInput>, Prisma.MarketingResourceUncheckedUpdateWithoutSendsInput>;
};
export type MarketingResourceCreateWithoutProposedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesApprovedInput;
    sends?: Prisma.MarketingSendCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceUncheckedCreateWithoutProposedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    sends?: Prisma.MarketingSendUncheckedCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceCreateOrConnectWithoutProposedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput>;
};
export type MarketingResourceCreateManyProposedByInputEnvelope = {
    data: Prisma.MarketingResourceCreateManyProposedByInput | Prisma.MarketingResourceCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type MarketingResourceCreateWithoutApprovedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesProposedInput;
    sends?: Prisma.MarketingSendCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    sends?: Prisma.MarketingSendUncheckedCreateNestedManyWithoutResourceInput;
};
export type MarketingResourceCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput>;
};
export type MarketingResourceCreateManyApprovedByInputEnvelope = {
    data: Prisma.MarketingResourceCreateManyApprovedByInput | Prisma.MarketingResourceCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type MarketingResourceUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutProposedByInput, Prisma.MarketingResourceUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutProposedByInput, Prisma.MarketingResourceUncheckedCreateWithoutProposedByInput>;
};
export type MarketingResourceUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutProposedByInput, Prisma.MarketingResourceUncheckedUpdateWithoutProposedByInput>;
};
export type MarketingResourceUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.MarketingResourceScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateManyMutationInput, Prisma.MarketingResourceUncheckedUpdateManyWithoutProposedByInput>;
};
export type MarketingResourceScalarWhereInput = {
    AND?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
    OR?: Prisma.MarketingResourceScalarWhereInput[];
    NOT?: Prisma.MarketingResourceScalarWhereInput | Prisma.MarketingResourceScalarWhereInput[];
    id?: Prisma.UuidFilter<"MarketingResource"> | string;
    title?: Prisma.StringFilter<"MarketingResource"> | string;
    resourceType?: Prisma.StringFilter<"MarketingResource"> | string;
    fileReference?: Prisma.StringFilter<"MarketingResource"> | string;
    version?: Prisma.IntFilter<"MarketingResource"> | number;
    status?: Prisma.EnumGovernedItemStatusFilter<"MarketingResource"> | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.UuidFilter<"MarketingResource"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"MarketingResource"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"MarketingResource"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"MarketingResource"> | Date | string;
};
export type MarketingResourceUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    update: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedCreateWithoutApprovedByInput>;
};
export type MarketingResourceUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutApprovedByInput, Prisma.MarketingResourceUncheckedUpdateWithoutApprovedByInput>;
};
export type MarketingResourceUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.MarketingResourceScalarWhereInput;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateManyMutationInput, Prisma.MarketingResourceUncheckedUpdateManyWithoutApprovedByInput>;
};
export type MarketingResourceCreateWithoutSendsInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    proposedBy: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutMarketingResourcesApprovedInput;
};
export type MarketingResourceUncheckedCreateWithoutSendsInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type MarketingResourceCreateOrConnectWithoutSendsInput = {
    where: Prisma.MarketingResourceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutSendsInput, Prisma.MarketingResourceUncheckedCreateWithoutSendsInput>;
};
export type MarketingResourceUpsertWithoutSendsInput = {
    update: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutSendsInput, Prisma.MarketingResourceUncheckedUpdateWithoutSendsInput>;
    create: Prisma.XOR<Prisma.MarketingResourceCreateWithoutSendsInput, Prisma.MarketingResourceUncheckedCreateWithoutSendsInput>;
    where?: Prisma.MarketingResourceWhereInput;
};
export type MarketingResourceUpdateToOneWithWhereWithoutSendsInput = {
    where?: Prisma.MarketingResourceWhereInput;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateWithoutSendsInput, Prisma.MarketingResourceUncheckedUpdateWithoutSendsInput>;
};
export type MarketingResourceUpdateWithoutSendsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingResourcesProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingResourcesApprovedNestedInput;
};
export type MarketingResourceUncheckedUpdateWithoutSendsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingResourceCreateManyProposedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type MarketingResourceCreateManyApprovedByInput = {
    id?: string;
    title: string;
    resourceType: string;
    fileReference: string;
    version?: number;
    status?: $Enums.GovernedItemStatus;
    proposedByUserId: string;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type MarketingResourceUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedBy?: Prisma.AppUserUpdateOneWithoutMarketingResourcesApprovedNestedInput;
    sends?: Prisma.MarketingSendUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sends?: Prisma.MarketingSendUncheckedUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingResourceUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneRequiredWithoutMarketingResourcesProposedNestedInput;
    sends?: Prisma.MarketingSendUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    sends?: Prisma.MarketingSendUncheckedUpdateManyWithoutResourceNestedInput;
};
export type MarketingResourceUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    resourceType?: Prisma.StringFieldUpdateOperationsInput | string;
    fileReference?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    proposedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MarketingResourceCountOutputType = {
    sends: number;
};
export type MarketingResourceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sends?: boolean | MarketingResourceCountOutputTypeCountSendsArgs;
};
export type MarketingResourceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceCountOutputTypeSelect<ExtArgs> | null;
};
export type MarketingResourceCountOutputTypeCountSendsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingSendWhereInput;
};
export type MarketingResourceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    resourceType?: boolean;
    fileReference?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
    sends?: boolean | Prisma.MarketingResource$sendsArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketingResourceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["marketingResource"]>;
export type MarketingResourceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    resourceType?: boolean;
    fileReference?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["marketingResource"]>;
export type MarketingResourceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    resourceType?: boolean;
    fileReference?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["marketingResource"]>;
export type MarketingResourceSelectScalar = {
    id?: boolean;
    title?: boolean;
    resourceType?: boolean;
    fileReference?: boolean;
    version?: boolean;
    status?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type MarketingResourceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "resourceType" | "fileReference" | "version" | "status" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["marketingResource"]>;
export type MarketingResourceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
    sends?: boolean | Prisma.MarketingResource$sendsArgs<ExtArgs>;
    _count?: boolean | Prisma.MarketingResourceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MarketingResourceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
};
export type MarketingResourceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.MarketingResource$approvedByArgs<ExtArgs>;
};
export type $MarketingResourcePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MarketingResource";
    objects: {
        proposedBy: Prisma.$AppUserPayload<ExtArgs>;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        sends: Prisma.$MarketingSendPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        resourceType: string;
        fileReference: string;
        version: number;
        status: $Enums.GovernedItemStatus;
        proposedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["marketingResource"]>;
    composites: {};
};
export type MarketingResourceGetPayload<S extends boolean | null | undefined | MarketingResourceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload, S>;
export type MarketingResourceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MarketingResourceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MarketingResourceCountAggregateInputType | true;
};
export interface MarketingResourceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MarketingResource'];
        meta: {
            name: 'MarketingResource';
        };
    };
    findUnique<T extends MarketingResourceFindUniqueArgs>(args: Prisma.SelectSubset<T, MarketingResourceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MarketingResourceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MarketingResourceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MarketingResourceFindFirstArgs>(args?: Prisma.SelectSubset<T, MarketingResourceFindFirstArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MarketingResourceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MarketingResourceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MarketingResourceFindManyArgs>(args?: Prisma.SelectSubset<T, MarketingResourceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MarketingResourceCreateArgs>(args: Prisma.SelectSubset<T, MarketingResourceCreateArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MarketingResourceCreateManyArgs>(args?: Prisma.SelectSubset<T, MarketingResourceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MarketingResourceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MarketingResourceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MarketingResourceDeleteArgs>(args: Prisma.SelectSubset<T, MarketingResourceDeleteArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MarketingResourceUpdateArgs>(args: Prisma.SelectSubset<T, MarketingResourceUpdateArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MarketingResourceDeleteManyArgs>(args?: Prisma.SelectSubset<T, MarketingResourceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MarketingResourceUpdateManyArgs>(args: Prisma.SelectSubset<T, MarketingResourceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MarketingResourceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MarketingResourceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MarketingResourceUpsertArgs>(args: Prisma.SelectSubset<T, MarketingResourceUpsertArgs<ExtArgs>>): Prisma.Prisma__MarketingResourceClient<runtime.Types.Result.GetResult<Prisma.$MarketingResourcePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MarketingResourceCountArgs>(args?: Prisma.Subset<T, MarketingResourceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MarketingResourceCountAggregateOutputType> : number>;
    aggregate<T extends MarketingResourceAggregateArgs>(args: Prisma.Subset<T, MarketingResourceAggregateArgs>): Prisma.PrismaPromise<GetMarketingResourceAggregateType<T>>;
    groupBy<T extends MarketingResourceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MarketingResourceGroupByArgs['orderBy'];
    } : {
        orderBy?: MarketingResourceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MarketingResourceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarketingResourceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MarketingResourceFieldRefs;
}
export interface Prisma__MarketingResourceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.MarketingResource$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketingResource$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    sends<T extends Prisma.MarketingResource$sendsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MarketingResource$sendsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MarketingSendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MarketingResourceFieldRefs {
    readonly id: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly title: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly resourceType: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly fileReference: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly version: Prisma.FieldRef<"MarketingResource", 'Int'>;
    readonly status: Prisma.FieldRef<"MarketingResource", 'GovernedItemStatus'>;
    readonly proposedByUserId: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"MarketingResource", 'String'>;
    readonly createdAt: Prisma.FieldRef<"MarketingResource", 'DateTime'>;
}
export type MarketingResourceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where: Prisma.MarketingResourceWhereUniqueInput;
};
export type MarketingResourceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where: Prisma.MarketingResourceWhereUniqueInput;
};
export type MarketingResourceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where?: Prisma.MarketingResourceWhereInput;
    orderBy?: Prisma.MarketingResourceOrderByWithRelationInput | Prisma.MarketingResourceOrderByWithRelationInput[];
    cursor?: Prisma.MarketingResourceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingResourceScalarFieldEnum | Prisma.MarketingResourceScalarFieldEnum[];
};
export type MarketingResourceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where?: Prisma.MarketingResourceWhereInput;
    orderBy?: Prisma.MarketingResourceOrderByWithRelationInput | Prisma.MarketingResourceOrderByWithRelationInput[];
    cursor?: Prisma.MarketingResourceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingResourceScalarFieldEnum | Prisma.MarketingResourceScalarFieldEnum[];
};
export type MarketingResourceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where?: Prisma.MarketingResourceWhereInput;
    orderBy?: Prisma.MarketingResourceOrderByWithRelationInput | Prisma.MarketingResourceOrderByWithRelationInput[];
    cursor?: Prisma.MarketingResourceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MarketingResourceScalarFieldEnum | Prisma.MarketingResourceScalarFieldEnum[];
};
export type MarketingResourceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingResourceCreateInput, Prisma.MarketingResourceUncheckedCreateInput>;
};
export type MarketingResourceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MarketingResourceCreateManyInput | Prisma.MarketingResourceCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MarketingResourceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    data: Prisma.MarketingResourceCreateManyInput | Prisma.MarketingResourceCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MarketingResourceIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MarketingResourceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateInput, Prisma.MarketingResourceUncheckedUpdateInput>;
    where: Prisma.MarketingResourceWhereUniqueInput;
};
export type MarketingResourceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MarketingResourceUpdateManyMutationInput, Prisma.MarketingResourceUncheckedUpdateManyInput>;
    where?: Prisma.MarketingResourceWhereInput;
    limit?: number;
};
export type MarketingResourceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MarketingResourceUpdateManyMutationInput, Prisma.MarketingResourceUncheckedUpdateManyInput>;
    where?: Prisma.MarketingResourceWhereInput;
    limit?: number;
    include?: Prisma.MarketingResourceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MarketingResourceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where: Prisma.MarketingResourceWhereUniqueInput;
    create: Prisma.XOR<Prisma.MarketingResourceCreateInput, Prisma.MarketingResourceUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MarketingResourceUpdateInput, Prisma.MarketingResourceUncheckedUpdateInput>;
};
export type MarketingResourceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
    where: Prisma.MarketingResourceWhereUniqueInput;
};
export type MarketingResourceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MarketingResourceWhereInput;
    limit?: number;
};
export type MarketingResource$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type MarketingResource$sendsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MarketingResourceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MarketingResourceSelect<ExtArgs> | null;
    omit?: Prisma.MarketingResourceOmit<ExtArgs> | null;
    include?: Prisma.MarketingResourceInclude<ExtArgs> | null;
};
