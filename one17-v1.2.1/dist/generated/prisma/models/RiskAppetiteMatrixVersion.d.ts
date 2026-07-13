import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RiskAppetiteMatrixVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$RiskAppetiteMatrixVersionPayload>;
export type AggregateRiskAppetiteMatrixVersion = {
    _count: RiskAppetiteMatrixVersionCountAggregateOutputType | null;
    _avg: RiskAppetiteMatrixVersionAvgAggregateOutputType | null;
    _sum: RiskAppetiteMatrixVersionSumAggregateOutputType | null;
    _min: RiskAppetiteMatrixVersionMinAggregateOutputType | null;
    _max: RiskAppetiteMatrixVersionMaxAggregateOutputType | null;
};
export type RiskAppetiteMatrixVersionAvgAggregateOutputType = {
    version: number | null;
};
export type RiskAppetiteMatrixVersionSumAggregateOutputType = {
    version: number | null;
};
export type RiskAppetiteMatrixVersionMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.RiskMatrixStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type RiskAppetiteMatrixVersionMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    status: $Enums.RiskMatrixStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date | null;
};
export type RiskAppetiteMatrixVersionCountAggregateOutputType = {
    id: number;
    version: number;
    status: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    effectiveFrom: number;
    createdAt: number;
    _all: number;
};
export type RiskAppetiteMatrixVersionAvgAggregateInputType = {
    version?: true;
};
export type RiskAppetiteMatrixVersionSumAggregateInputType = {
    version?: true;
};
export type RiskAppetiteMatrixVersionMinAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type RiskAppetiteMatrixVersionMaxAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
};
export type RiskAppetiteMatrixVersionCountAggregateInputType = {
    id?: true;
    version?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    effectiveFrom?: true;
    createdAt?: true;
    _all?: true;
};
export type RiskAppetiteMatrixVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    orderBy?: Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput | Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiskAppetiteMatrixVersionCountAggregateInputType;
    _avg?: RiskAppetiteMatrixVersionAvgAggregateInputType;
    _sum?: RiskAppetiteMatrixVersionSumAggregateInputType;
    _min?: RiskAppetiteMatrixVersionMinAggregateInputType;
    _max?: RiskAppetiteMatrixVersionMaxAggregateInputType;
};
export type GetRiskAppetiteMatrixVersionAggregateType<T extends RiskAppetiteMatrixVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateRiskAppetiteMatrixVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiskAppetiteMatrixVersion[P]> : Prisma.GetScalarType<T[P], AggregateRiskAppetiteMatrixVersion[P]>;
};
export type RiskAppetiteMatrixVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    orderBy?: Prisma.RiskAppetiteMatrixVersionOrderByWithAggregationInput | Prisma.RiskAppetiteMatrixVersionOrderByWithAggregationInput[];
    by: Prisma.RiskAppetiteMatrixVersionScalarFieldEnum[] | Prisma.RiskAppetiteMatrixVersionScalarFieldEnum;
    having?: Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiskAppetiteMatrixVersionCountAggregateInputType | true;
    _avg?: RiskAppetiteMatrixVersionAvgAggregateInputType;
    _sum?: RiskAppetiteMatrixVersionSumAggregateInputType;
    _min?: RiskAppetiteMatrixVersionMinAggregateInputType;
    _max?: RiskAppetiteMatrixVersionMaxAggregateInputType;
};
export type RiskAppetiteMatrixVersionGroupByOutputType = {
    id: string;
    version: number;
    status: $Enums.RiskMatrixStatus;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    effectiveFrom: Date | null;
    createdAt: Date;
    _count: RiskAppetiteMatrixVersionCountAggregateOutputType | null;
    _avg: RiskAppetiteMatrixVersionAvgAggregateOutputType | null;
    _sum: RiskAppetiteMatrixVersionSumAggregateOutputType | null;
    _min: RiskAppetiteMatrixVersionMinAggregateOutputType | null;
    _max: RiskAppetiteMatrixVersionMaxAggregateOutputType | null;
};
export type GetRiskAppetiteMatrixVersionGroupByPayload<T extends RiskAppetiteMatrixVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiskAppetiteMatrixVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiskAppetiteMatrixVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiskAppetiteMatrixVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiskAppetiteMatrixVersionGroupByOutputType[P]>;
}>>;
export type RiskAppetiteMatrixVersionWhereInput = {
    AND?: Prisma.RiskAppetiteMatrixVersionWhereInput | Prisma.RiskAppetiteMatrixVersionWhereInput[];
    OR?: Prisma.RiskAppetiteMatrixVersionWhereInput[];
    NOT?: Prisma.RiskAppetiteMatrixVersionWhereInput | Prisma.RiskAppetiteMatrixVersionWhereInput[];
    id?: Prisma.UuidFilter<"RiskAppetiteMatrixVersion"> | string;
    version?: Prisma.IntFilter<"RiskAppetiteMatrixVersion"> | number;
    status?: Prisma.EnumRiskMatrixStatusFilter<"RiskAppetiteMatrixVersion"> | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"RiskAppetiteMatrixVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskAppetiteMatrixVersion"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    categories?: Prisma.RiskAppetiteCategoryListRelationFilter;
};
export type RiskAppetiteMatrixVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
    categories?: Prisma.RiskAppetiteCategoryOrderByRelationAggregateInput;
};
export type RiskAppetiteMatrixVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    workflowInstanceId?: string;
    AND?: Prisma.RiskAppetiteMatrixVersionWhereInput | Prisma.RiskAppetiteMatrixVersionWhereInput[];
    OR?: Prisma.RiskAppetiteMatrixVersionWhereInput[];
    NOT?: Prisma.RiskAppetiteMatrixVersionWhereInput | Prisma.RiskAppetiteMatrixVersionWhereInput[];
    status?: Prisma.EnumRiskMatrixStatusFilter<"RiskAppetiteMatrixVersion"> | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"RiskAppetiteMatrixVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskAppetiteMatrixVersion"> | Date | string;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    categories?: Prisma.RiskAppetiteCategoryListRelationFilter;
}, "id" | "version" | "workflowInstanceId">;
export type RiskAppetiteMatrixVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RiskAppetiteMatrixVersionCountOrderByAggregateInput;
    _avg?: Prisma.RiskAppetiteMatrixVersionAvgOrderByAggregateInput;
    _max?: Prisma.RiskAppetiteMatrixVersionMaxOrderByAggregateInput;
    _min?: Prisma.RiskAppetiteMatrixVersionMinOrderByAggregateInput;
    _sum?: Prisma.RiskAppetiteMatrixVersionSumOrderByAggregateInput;
};
export type RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput | Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput | Prisma.RiskAppetiteMatrixVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | string;
    version?: Prisma.IntWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | number;
    status?: Prisma.EnumRiskMatrixStatusWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RiskAppetiteMatrixVersion"> | Date | string;
};
export type RiskAppetiteMatrixVersionCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsApprovedInput;
    categories?: Prisma.RiskAppetiteCategoryCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionUncheckedCreateInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsApprovedNestedInput;
    categories?: Prisma.RiskAppetiteCategoryUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionCreateManyInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type RiskAppetiteMatrixVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskAppetiteMatrixVersionListRelationFilter = {
    every?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    some?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    none?: Prisma.RiskAppetiteMatrixVersionWhereInput;
};
export type RiskAppetiteMatrixVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type RiskAppetiteMatrixVersionScalarRelationFilter = {
    is?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    isNot?: Prisma.RiskAppetiteMatrixVersionWhereInput;
};
export type RiskAppetiteMatrixVersionCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
};
export type RiskAppetiteMatrixVersionCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
};
export type RiskAppetiteMatrixVersionUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
};
export type RiskAppetiteMatrixVersionUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
};
export type RiskAppetiteMatrixVersionUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    update?: Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
};
export type RiskAppetiteMatrixVersionUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    update?: Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
};
export type RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    update?: Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
};
export type RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput> | Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput[] | Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    disconnect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    delete?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput | Prisma.RiskAppetiteMatrixVersionWhereUniqueInput[];
    update?: Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
};
export type EnumRiskMatrixStatusFieldUpdateOperationsInput = {
    set?: $Enums.RiskMatrixStatus;
};
export type RiskAppetiteMatrixVersionCreateNestedOneWithoutCategoriesInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutCategoriesInput;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
};
export type RiskAppetiteMatrixVersionUpdateOneRequiredWithoutCategoriesNestedInput = {
    create?: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutCategoriesInput>;
    connectOrCreate?: Prisma.RiskAppetiteMatrixVersionCreateOrConnectWithoutCategoriesInput;
    upsert?: Prisma.RiskAppetiteMatrixVersionUpsertWithoutCategoriesInput;
    connect?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateToOneWithWhereWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUpdateWithoutCategoriesInput>, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutCategoriesInput>;
};
export type RiskAppetiteMatrixVersionCreateWithoutProposedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsApprovedInput;
    categories?: Prisma.RiskAppetiteCategoryCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionCreateOrConnectWithoutProposedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput>;
};
export type RiskAppetiteMatrixVersionCreateManyProposedByInputEnvelope = {
    data: Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInput | Prisma.RiskAppetiteMatrixVersionCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type RiskAppetiteMatrixVersionCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsProposedInput;
    categories?: Prisma.RiskAppetiteCategoryCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedCreateNestedManyWithoutMatrixVersionInput;
};
export type RiskAppetiteMatrixVersionCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput>;
};
export type RiskAppetiteMatrixVersionCreateManyApprovedByInputEnvelope = {
    data: Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInput | Prisma.RiskAppetiteMatrixVersionCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutProposedByInput>;
};
export type RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutProposedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutProposedByInput>;
};
export type RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateManyMutationInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutProposedByInput>;
};
export type RiskAppetiteMatrixVersionScalarWhereInput = {
    AND?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
    OR?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
    NOT?: Prisma.RiskAppetiteMatrixVersionScalarWhereInput | Prisma.RiskAppetiteMatrixVersionScalarWhereInput[];
    id?: Prisma.UuidFilter<"RiskAppetiteMatrixVersion"> | string;
    version?: Prisma.IntFilter<"RiskAppetiteMatrixVersion"> | number;
    status?: Prisma.EnumRiskMatrixStatusFilter<"RiskAppetiteMatrixVersion"> | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"RiskAppetiteMatrixVersion"> | string | null;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"RiskAppetiteMatrixVersion"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskAppetiteMatrixVersion"> | Date | string;
};
export type RiskAppetiteMatrixVersionUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutApprovedByInput>;
};
export type RiskAppetiteMatrixVersionUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutApprovedByInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutApprovedByInput>;
};
export type RiskAppetiteMatrixVersionUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.RiskAppetiteMatrixVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateManyMutationInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutApprovedByInput>;
};
export type RiskAppetiteMatrixVersionCreateWithoutCategoriesInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutRiskAppetiteMatrixVersionsApprovedInput;
};
export type RiskAppetiteMatrixVersionUncheckedCreateWithoutCategoriesInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type RiskAppetiteMatrixVersionCreateOrConnectWithoutCategoriesInput = {
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutCategoriesInput>;
};
export type RiskAppetiteMatrixVersionUpsertWithoutCategoriesInput = {
    update: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutCategoriesInput>;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateWithoutCategoriesInput>;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
};
export type RiskAppetiteMatrixVersionUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateWithoutCategoriesInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateWithoutCategoriesInput>;
};
export type RiskAppetiteMatrixVersionUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsApprovedNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateWithoutCategoriesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskAppetiteMatrixVersionCreateManyProposedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type RiskAppetiteMatrixVersionCreateManyApprovedByInput = {
    id?: string;
    version: number;
    status?: $Enums.RiskMatrixStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type RiskAppetiteMatrixVersionUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsApprovedNestedInput;
    categories?: Prisma.RiskAppetiteCategoryUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskAppetiteMatrixVersionUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    proposedBy?: Prisma.AppUserUpdateOneWithoutRiskAppetiteMatrixVersionsProposedNestedInput;
    categories?: Prisma.RiskAppetiteCategoryUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    categories?: Prisma.RiskAppetiteCategoryUncheckedUpdateManyWithoutMatrixVersionNestedInput;
};
export type RiskAppetiteMatrixVersionUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.EnumRiskMatrixStatusFieldUpdateOperationsInput | $Enums.RiskMatrixStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskAppetiteMatrixVersionCountOutputType = {
    categories: number;
};
export type RiskAppetiteMatrixVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    categories?: boolean | RiskAppetiteMatrixVersionCountOutputTypeCountCategoriesArgs;
};
export type RiskAppetiteMatrixVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type RiskAppetiteMatrixVersionCountOutputTypeCountCategoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteCategoryWhereInput;
};
export type RiskAppetiteMatrixVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
    categories?: boolean | Prisma.RiskAppetiteMatrixVersion$categoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.RiskAppetiteMatrixVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteMatrixVersion"]>;
export type RiskAppetiteMatrixVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteMatrixVersion"]>;
export type RiskAppetiteMatrixVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["riskAppetiteMatrixVersion"]>;
export type RiskAppetiteMatrixVersionSelectScalar = {
    id?: boolean;
    version?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    effectiveFrom?: boolean;
    createdAt?: boolean;
};
export type RiskAppetiteMatrixVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "status" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "effectiveFrom" | "createdAt", ExtArgs["result"]["riskAppetiteMatrixVersion"]>;
export type RiskAppetiteMatrixVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
    categories?: boolean | Prisma.RiskAppetiteMatrixVersion$categoriesArgs<ExtArgs>;
    _count?: boolean | Prisma.RiskAppetiteMatrixVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type RiskAppetiteMatrixVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
};
export type RiskAppetiteMatrixVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>;
};
export type $RiskAppetiteMatrixVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiskAppetiteMatrixVersion";
    objects: {
        proposedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        categories: Prisma.$RiskAppetiteCategoryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        status: $Enums.RiskMatrixStatus;
        boardResolutionRef: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        effectiveFrom: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["riskAppetiteMatrixVersion"]>;
    composites: {};
};
export type RiskAppetiteMatrixVersionGetPayload<S extends boolean | null | undefined | RiskAppetiteMatrixVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload, S>;
export type RiskAppetiteMatrixVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiskAppetiteMatrixVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiskAppetiteMatrixVersionCountAggregateInputType | true;
};
export interface RiskAppetiteMatrixVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiskAppetiteMatrixVersion'];
        meta: {
            name: 'RiskAppetiteMatrixVersion';
        };
    };
    findUnique<T extends RiskAppetiteMatrixVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiskAppetiteMatrixVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiskAppetiteMatrixVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiskAppetiteMatrixVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiskAppetiteMatrixVersionFindManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiskAppetiteMatrixVersionCreateArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionCreateArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiskAppetiteMatrixVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiskAppetiteMatrixVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiskAppetiteMatrixVersionDeleteArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiskAppetiteMatrixVersionUpdateArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiskAppetiteMatrixVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiskAppetiteMatrixVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiskAppetiteMatrixVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiskAppetiteMatrixVersionUpsertArgs>(args: Prisma.SelectSubset<T, RiskAppetiteMatrixVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__RiskAppetiteMatrixVersionClient<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteMatrixVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiskAppetiteMatrixVersionCountArgs>(args?: Prisma.Subset<T, RiskAppetiteMatrixVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiskAppetiteMatrixVersionCountAggregateOutputType> : number>;
    aggregate<T extends RiskAppetiteMatrixVersionAggregateArgs>(args: Prisma.Subset<T, RiskAppetiteMatrixVersionAggregateArgs>): Prisma.PrismaPromise<GetRiskAppetiteMatrixVersionAggregateType<T>>;
    groupBy<T extends RiskAppetiteMatrixVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiskAppetiteMatrixVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: RiskAppetiteMatrixVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiskAppetiteMatrixVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskAppetiteMatrixVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiskAppetiteMatrixVersionFieldRefs;
}
export interface Prisma__RiskAppetiteMatrixVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedBy<T extends Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    categories<T extends Prisma.RiskAppetiteMatrixVersion$categoriesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiskAppetiteMatrixVersion$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskAppetiteCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiskAppetiteMatrixVersionFieldRefs {
    readonly id: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'String'>;
    readonly version: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'Int'>;
    readonly status: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'RiskMatrixStatus'>;
    readonly boardResolutionRef: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'String'>;
    readonly effectiveFrom: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RiskAppetiteMatrixVersion", 'DateTime'>;
}
export type RiskAppetiteMatrixVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
};
export type RiskAppetiteMatrixVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
};
export type RiskAppetiteMatrixVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    orderBy?: Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput | Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteMatrixVersionScalarFieldEnum | Prisma.RiskAppetiteMatrixVersionScalarFieldEnum[];
};
export type RiskAppetiteMatrixVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    orderBy?: Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput | Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteMatrixVersionScalarFieldEnum | Prisma.RiskAppetiteMatrixVersionScalarFieldEnum[];
};
export type RiskAppetiteMatrixVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    orderBy?: Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput | Prisma.RiskAppetiteMatrixVersionOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteMatrixVersionScalarFieldEnum | Prisma.RiskAppetiteMatrixVersionScalarFieldEnum[];
};
export type RiskAppetiteMatrixVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateInput>;
};
export type RiskAppetiteMatrixVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiskAppetiteMatrixVersionCreateManyInput | Prisma.RiskAppetiteMatrixVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiskAppetiteMatrixVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    data: Prisma.RiskAppetiteMatrixVersionCreateManyInput | Prisma.RiskAppetiteMatrixVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiskAppetiteMatrixVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiskAppetiteMatrixVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateInput>;
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
};
export type RiskAppetiteMatrixVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateManyMutationInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateManyInput>;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    limit?: number;
};
export type RiskAppetiteMatrixVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateManyMutationInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateManyInput>;
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    limit?: number;
    include?: Prisma.RiskAppetiteMatrixVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiskAppetiteMatrixVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionCreateInput, Prisma.RiskAppetiteMatrixVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiskAppetiteMatrixVersionUpdateInput, Prisma.RiskAppetiteMatrixVersionUncheckedUpdateInput>;
};
export type RiskAppetiteMatrixVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
    where: Prisma.RiskAppetiteMatrixVersionWhereUniqueInput;
};
export type RiskAppetiteMatrixVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskAppetiteMatrixVersionWhereInput;
    limit?: number;
};
export type RiskAppetiteMatrixVersion$proposedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type RiskAppetiteMatrixVersion$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type RiskAppetiteMatrixVersion$categoriesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteCategorySelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteCategoryOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteCategoryInclude<ExtArgs> | null;
    where?: Prisma.RiskAppetiteCategoryWhereInput;
    orderBy?: Prisma.RiskAppetiteCategoryOrderByWithRelationInput | Prisma.RiskAppetiteCategoryOrderByWithRelationInput[];
    cursor?: Prisma.RiskAppetiteCategoryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskAppetiteCategoryScalarFieldEnum | Prisma.RiskAppetiteCategoryScalarFieldEnum[];
};
export type RiskAppetiteMatrixVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskAppetiteMatrixVersionSelect<ExtArgs> | null;
    omit?: Prisma.RiskAppetiteMatrixVersionOmit<ExtArgs> | null;
    include?: Prisma.RiskAppetiteMatrixVersionInclude<ExtArgs> | null;
};
