import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BudgetVersionModel = runtime.Types.Result.DefaultSelection<Prisma.$BudgetVersionPayload>;
export type AggregateBudgetVersion = {
    _count: BudgetVersionCountAggregateOutputType | null;
    _avg: BudgetVersionAvgAggregateOutputType | null;
    _sum: BudgetVersionSumAggregateOutputType | null;
    _min: BudgetVersionMinAggregateOutputType | null;
    _max: BudgetVersionMaxAggregateOutputType | null;
};
export type BudgetVersionAvgAggregateOutputType = {
    fiscalYear: number | null;
};
export type BudgetVersionSumAggregateOutputType = {
    fiscalYear: number | null;
};
export type BudgetVersionMinAggregateOutputType = {
    id: string | null;
    fiscalYear: number | null;
    scenarioLabel: string | null;
    status: $Enums.BudgetVersionStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type BudgetVersionMaxAggregateOutputType = {
    id: string | null;
    fiscalYear: number | null;
    scenarioLabel: string | null;
    status: $Enums.BudgetVersionStatus | null;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type BudgetVersionCountAggregateOutputType = {
    id: number;
    fiscalYear: number;
    scenarioLabel: number;
    status: number;
    boardResolutionRef: number;
    proposedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    linkedObjectiveCodes: number;
    _all: number;
};
export type BudgetVersionAvgAggregateInputType = {
    fiscalYear?: true;
};
export type BudgetVersionSumAggregateInputType = {
    fiscalYear?: true;
};
export type BudgetVersionMinAggregateInputType = {
    id?: true;
    fiscalYear?: true;
    scenarioLabel?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type BudgetVersionMaxAggregateInputType = {
    id?: true;
    fiscalYear?: true;
    scenarioLabel?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type BudgetVersionCountAggregateInputType = {
    id?: true;
    fiscalYear?: true;
    scenarioLabel?: true;
    status?: true;
    boardResolutionRef?: true;
    proposedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    linkedObjectiveCodes?: true;
    _all?: true;
};
export type BudgetVersionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVersionWhereInput;
    orderBy?: Prisma.BudgetVersionOrderByWithRelationInput | Prisma.BudgetVersionOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BudgetVersionCountAggregateInputType;
    _avg?: BudgetVersionAvgAggregateInputType;
    _sum?: BudgetVersionSumAggregateInputType;
    _min?: BudgetVersionMinAggregateInputType;
    _max?: BudgetVersionMaxAggregateInputType;
};
export type GetBudgetVersionAggregateType<T extends BudgetVersionAggregateArgs> = {
    [P in keyof T & keyof AggregateBudgetVersion]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBudgetVersion[P]> : Prisma.GetScalarType<T[P], AggregateBudgetVersion[P]>;
};
export type BudgetVersionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVersionWhereInput;
    orderBy?: Prisma.BudgetVersionOrderByWithAggregationInput | Prisma.BudgetVersionOrderByWithAggregationInput[];
    by: Prisma.BudgetVersionScalarFieldEnum[] | Prisma.BudgetVersionScalarFieldEnum;
    having?: Prisma.BudgetVersionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BudgetVersionCountAggregateInputType | true;
    _avg?: BudgetVersionAvgAggregateInputType;
    _sum?: BudgetVersionSumAggregateInputType;
    _min?: BudgetVersionMinAggregateInputType;
    _max?: BudgetVersionMaxAggregateInputType;
};
export type BudgetVersionGroupByOutputType = {
    id: string;
    fiscalYear: number;
    scenarioLabel: string;
    status: $Enums.BudgetVersionStatus;
    boardResolutionRef: string | null;
    proposedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    linkedObjectiveCodes: string[];
    _count: BudgetVersionCountAggregateOutputType | null;
    _avg: BudgetVersionAvgAggregateOutputType | null;
    _sum: BudgetVersionSumAggregateOutputType | null;
    _min: BudgetVersionMinAggregateOutputType | null;
    _max: BudgetVersionMaxAggregateOutputType | null;
};
export type GetBudgetVersionGroupByPayload<T extends BudgetVersionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BudgetVersionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BudgetVersionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BudgetVersionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BudgetVersionGroupByOutputType[P]>;
}>>;
export type BudgetVersionWhereInput = {
    AND?: Prisma.BudgetVersionWhereInput | Prisma.BudgetVersionWhereInput[];
    OR?: Prisma.BudgetVersionWhereInput[];
    NOT?: Prisma.BudgetVersionWhereInput | Prisma.BudgetVersionWhereInput[];
    id?: Prisma.UuidFilter<"BudgetVersion"> | string;
    fiscalYear?: Prisma.IntFilter<"BudgetVersion"> | number;
    scenarioLabel?: Prisma.StringFilter<"BudgetVersion"> | string;
    status?: Prisma.EnumBudgetVersionStatusFilter<"BudgetVersion"> | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"BudgetVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetVersion"> | Date | string;
    linkedObjectiveCodes?: Prisma.StringNullableListFilter<"BudgetVersion">;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    lines?: Prisma.BudgetLineListRelationFilter;
    targets?: Prisma.BudgetTargetListRelationFilter;
};
export type BudgetVersionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fiscalYear?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    linkedObjectiveCodes?: Prisma.SortOrder;
    proposedBy?: Prisma.AppUserOrderByWithRelationInput;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
    lines?: Prisma.BudgetLineOrderByRelationAggregateInput;
    targets?: Prisma.BudgetTargetOrderByRelationAggregateInput;
};
export type BudgetVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    fiscalYear_scenarioLabel?: Prisma.BudgetVersionFiscalYearScenarioLabelCompoundUniqueInput;
    AND?: Prisma.BudgetVersionWhereInput | Prisma.BudgetVersionWhereInput[];
    OR?: Prisma.BudgetVersionWhereInput[];
    NOT?: Prisma.BudgetVersionWhereInput | Prisma.BudgetVersionWhereInput[];
    fiscalYear?: Prisma.IntFilter<"BudgetVersion"> | number;
    scenarioLabel?: Prisma.StringFilter<"BudgetVersion"> | string;
    status?: Prisma.EnumBudgetVersionStatusFilter<"BudgetVersion"> | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"BudgetVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetVersion"> | Date | string;
    linkedObjectiveCodes?: Prisma.StringNullableListFilter<"BudgetVersion">;
    proposedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
    lines?: Prisma.BudgetLineListRelationFilter;
    targets?: Prisma.BudgetTargetListRelationFilter;
}, "id" | "workflowInstanceId" | "fiscalYear_scenarioLabel">;
export type BudgetVersionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fiscalYear?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    linkedObjectiveCodes?: Prisma.SortOrder;
    _count?: Prisma.BudgetVersionCountOrderByAggregateInput;
    _avg?: Prisma.BudgetVersionAvgOrderByAggregateInput;
    _max?: Prisma.BudgetVersionMaxOrderByAggregateInput;
    _min?: Prisma.BudgetVersionMinOrderByAggregateInput;
    _sum?: Prisma.BudgetVersionSumOrderByAggregateInput;
};
export type BudgetVersionScalarWhereWithAggregatesInput = {
    AND?: Prisma.BudgetVersionScalarWhereWithAggregatesInput | Prisma.BudgetVersionScalarWhereWithAggregatesInput[];
    OR?: Prisma.BudgetVersionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BudgetVersionScalarWhereWithAggregatesInput | Prisma.BudgetVersionScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"BudgetVersion"> | string;
    fiscalYear?: Prisma.IntWithAggregatesFilter<"BudgetVersion"> | number;
    scenarioLabel?: Prisma.StringWithAggregatesFilter<"BudgetVersion"> | string;
    status?: Prisma.EnumBudgetVersionStatusWithAggregatesFilter<"BudgetVersion"> | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"BudgetVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BudgetVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"BudgetVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"BudgetVersion"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BudgetVersion"> | Date | string;
    linkedObjectiveCodes?: Prisma.StringNullableListFilter<"BudgetVersion">;
};
export type BudgetVersionCreateInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsApprovedInput;
    lines?: Prisma.BudgetLineCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUncheckedCreateInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetUncheckedCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsApprovedNestedInput;
    lines?: Prisma.BudgetLineUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUncheckedUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionCreateManyInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionListRelationFilter = {
    every?: Prisma.BudgetVersionWhereInput;
    some?: Prisma.BudgetVersionWhereInput;
    none?: Prisma.BudgetVersionWhereInput;
};
export type BudgetVersionOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BudgetVersionFiscalYearScenarioLabelCompoundUniqueInput = {
    fiscalYear: number;
    scenarioLabel: string;
};
export type BudgetVersionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fiscalYear?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    linkedObjectiveCodes?: Prisma.SortOrder;
};
export type BudgetVersionAvgOrderByAggregateInput = {
    fiscalYear?: Prisma.SortOrder;
};
export type BudgetVersionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fiscalYear?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetVersionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fiscalYear?: Prisma.SortOrder;
    scenarioLabel?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    proposedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type BudgetVersionSumOrderByAggregateInput = {
    fiscalYear?: Prisma.SortOrder;
};
export type BudgetVersionScalarRelationFilter = {
    is?: Prisma.BudgetVersionWhereInput;
    isNot?: Prisma.BudgetVersionWhereInput;
};
export type BudgetVersionCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput> | Prisma.BudgetVersionCreateWithoutProposedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput | Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
};
export type BudgetVersionCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput> | Prisma.BudgetVersionCreateWithoutApprovedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput | Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
};
export type BudgetVersionUncheckedCreateNestedManyWithoutProposedByInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput> | Prisma.BudgetVersionCreateWithoutProposedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput | Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyProposedByInputEnvelope;
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
};
export type BudgetVersionUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput> | Prisma.BudgetVersionCreateWithoutApprovedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput | Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyApprovedByInputEnvelope;
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
};
export type BudgetVersionUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput> | Prisma.BudgetVersionCreateWithoutProposedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput | Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.BudgetVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.BudgetVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    disconnect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    delete?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    update?: Prisma.BudgetVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.BudgetVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.BudgetVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.BudgetVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
};
export type BudgetVersionUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput> | Prisma.BudgetVersionCreateWithoutApprovedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput | Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.BudgetVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.BudgetVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    disconnect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    delete?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    update?: Prisma.BudgetVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.BudgetVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.BudgetVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.BudgetVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
};
export type BudgetVersionUncheckedUpdateManyWithoutProposedByNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput> | Prisma.BudgetVersionCreateWithoutProposedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput | Prisma.BudgetVersionCreateOrConnectWithoutProposedByInput[];
    upsert?: Prisma.BudgetVersionUpsertWithWhereUniqueWithoutProposedByInput | Prisma.BudgetVersionUpsertWithWhereUniqueWithoutProposedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyProposedByInputEnvelope;
    set?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    disconnect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    delete?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    update?: Prisma.BudgetVersionUpdateWithWhereUniqueWithoutProposedByInput | Prisma.BudgetVersionUpdateWithWhereUniqueWithoutProposedByInput[];
    updateMany?: Prisma.BudgetVersionUpdateManyWithWhereWithoutProposedByInput | Prisma.BudgetVersionUpdateManyWithWhereWithoutProposedByInput[];
    deleteMany?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
};
export type BudgetVersionUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput> | Prisma.BudgetVersionCreateWithoutApprovedByInput[] | Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput | Prisma.BudgetVersionCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.BudgetVersionUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.BudgetVersionUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.BudgetVersionCreateManyApprovedByInputEnvelope;
    set?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    disconnect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    delete?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    connect?: Prisma.BudgetVersionWhereUniqueInput | Prisma.BudgetVersionWhereUniqueInput[];
    update?: Prisma.BudgetVersionUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.BudgetVersionUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.BudgetVersionUpdateManyWithWhereWithoutApprovedByInput | Prisma.BudgetVersionUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
};
export type BudgetVersionCreatelinkedObjectiveCodesInput = {
    set: string[];
};
export type EnumBudgetVersionStatusFieldUpdateOperationsInput = {
    set?: $Enums.BudgetVersionStatus;
};
export type BudgetVersionUpdatelinkedObjectiveCodesInput = {
    set?: string[];
    push?: string | string[];
};
export type BudgetVersionCreateNestedOneWithoutLinesInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutLinesInput, Prisma.BudgetVersionUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutLinesInput;
    connect?: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionUpdateOneRequiredWithoutLinesNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutLinesInput, Prisma.BudgetVersionUncheckedCreateWithoutLinesInput>;
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutLinesInput;
    upsert?: Prisma.BudgetVersionUpsertWithoutLinesInput;
    connect?: Prisma.BudgetVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetVersionUpdateToOneWithWhereWithoutLinesInput, Prisma.BudgetVersionUpdateWithoutLinesInput>, Prisma.BudgetVersionUncheckedUpdateWithoutLinesInput>;
};
export type BudgetVersionCreateNestedOneWithoutTargetsInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutTargetsInput, Prisma.BudgetVersionUncheckedCreateWithoutTargetsInput>;
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutTargetsInput;
    connect?: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionUpdateOneRequiredWithoutTargetsNestedInput = {
    create?: Prisma.XOR<Prisma.BudgetVersionCreateWithoutTargetsInput, Prisma.BudgetVersionUncheckedCreateWithoutTargetsInput>;
    connectOrCreate?: Prisma.BudgetVersionCreateOrConnectWithoutTargetsInput;
    upsert?: Prisma.BudgetVersionUpsertWithoutTargetsInput;
    connect?: Prisma.BudgetVersionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BudgetVersionUpdateToOneWithWhereWithoutTargetsInput, Prisma.BudgetVersionUpdateWithoutTargetsInput>, Prisma.BudgetVersionUncheckedUpdateWithoutTargetsInput>;
};
export type BudgetVersionCreateWithoutProposedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsApprovedInput;
    lines?: Prisma.BudgetLineCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUncheckedCreateWithoutProposedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetUncheckedCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionCreateOrConnectWithoutProposedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput>;
};
export type BudgetVersionCreateManyProposedByInputEnvelope = {
    data: Prisma.BudgetVersionCreateManyProposedByInput | Prisma.BudgetVersionCreateManyProposedByInput[];
    skipDuplicates?: boolean;
};
export type BudgetVersionCreateWithoutApprovedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsProposedInput;
    lines?: Prisma.BudgetLineCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedCreateNestedManyWithoutBudgetVersionInput;
    targets?: Prisma.BudgetTargetUncheckedCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput>;
};
export type BudgetVersionCreateManyApprovedByInputEnvelope = {
    data: Prisma.BudgetVersionCreateManyApprovedByInput | Prisma.BudgetVersionCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type BudgetVersionUpsertWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutProposedByInput, Prisma.BudgetVersionUncheckedUpdateWithoutProposedByInput>;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutProposedByInput, Prisma.BudgetVersionUncheckedCreateWithoutProposedByInput>;
};
export type BudgetVersionUpdateWithWhereUniqueWithoutProposedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutProposedByInput, Prisma.BudgetVersionUncheckedUpdateWithoutProposedByInput>;
};
export type BudgetVersionUpdateManyWithWhereWithoutProposedByInput = {
    where: Prisma.BudgetVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateManyMutationInput, Prisma.BudgetVersionUncheckedUpdateManyWithoutProposedByInput>;
};
export type BudgetVersionScalarWhereInput = {
    AND?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
    OR?: Prisma.BudgetVersionScalarWhereInput[];
    NOT?: Prisma.BudgetVersionScalarWhereInput | Prisma.BudgetVersionScalarWhereInput[];
    id?: Prisma.UuidFilter<"BudgetVersion"> | string;
    fiscalYear?: Prisma.IntFilter<"BudgetVersion"> | number;
    scenarioLabel?: Prisma.StringFilter<"BudgetVersion"> | string;
    status?: Prisma.EnumBudgetVersionStatusFilter<"BudgetVersion"> | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.StringNullableFilter<"BudgetVersion"> | string | null;
    proposedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    approvedByUserId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"BudgetVersion"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"BudgetVersion"> | Date | string;
    linkedObjectiveCodes?: Prisma.StringNullableListFilter<"BudgetVersion">;
};
export type BudgetVersionUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    update: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedCreateWithoutApprovedByInput>;
};
export type BudgetVersionUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutApprovedByInput, Prisma.BudgetVersionUncheckedUpdateWithoutApprovedByInput>;
};
export type BudgetVersionUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.BudgetVersionScalarWhereInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateManyMutationInput, Prisma.BudgetVersionUncheckedUpdateManyWithoutApprovedByInput>;
};
export type BudgetVersionCreateWithoutLinesInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsApprovedInput;
    targets?: Prisma.BudgetTargetCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUncheckedCreateWithoutLinesInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    targets?: Prisma.BudgetTargetUncheckedCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionCreateOrConnectWithoutLinesInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutLinesInput, Prisma.BudgetVersionUncheckedCreateWithoutLinesInput>;
};
export type BudgetVersionUpsertWithoutLinesInput = {
    update: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutLinesInput, Prisma.BudgetVersionUncheckedUpdateWithoutLinesInput>;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutLinesInput, Prisma.BudgetVersionUncheckedCreateWithoutLinesInput>;
    where?: Prisma.BudgetVersionWhereInput;
};
export type BudgetVersionUpdateToOneWithWhereWithoutLinesInput = {
    where?: Prisma.BudgetVersionWhereInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutLinesInput, Prisma.BudgetVersionUncheckedUpdateWithoutLinesInput>;
};
export type BudgetVersionUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsApprovedNestedInput;
    targets?: Prisma.BudgetTargetUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateWithoutLinesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    targets?: Prisma.BudgetTargetUncheckedUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionCreateWithoutTargetsInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsProposedInput;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutBudgetVersionsApprovedInput;
    lines?: Prisma.BudgetLineCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionUncheckedCreateWithoutTargetsInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedCreateNestedManyWithoutBudgetVersionInput;
};
export type BudgetVersionCreateOrConnectWithoutTargetsInput = {
    where: Prisma.BudgetVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutTargetsInput, Prisma.BudgetVersionUncheckedCreateWithoutTargetsInput>;
};
export type BudgetVersionUpsertWithoutTargetsInput = {
    update: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutTargetsInput, Prisma.BudgetVersionUncheckedUpdateWithoutTargetsInput>;
    create: Prisma.XOR<Prisma.BudgetVersionCreateWithoutTargetsInput, Prisma.BudgetVersionUncheckedCreateWithoutTargetsInput>;
    where?: Prisma.BudgetVersionWhereInput;
};
export type BudgetVersionUpdateToOneWithWhereWithoutTargetsInput = {
    where?: Prisma.BudgetVersionWhereInput;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateWithoutTargetsInput, Prisma.BudgetVersionUncheckedUpdateWithoutTargetsInput>;
};
export type BudgetVersionUpdateWithoutTargetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsProposedNestedInput;
    approvedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsApprovedNestedInput;
    lines?: Prisma.BudgetLineUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateWithoutTargetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionCreateManyProposedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionCreateManyApprovedByInput = {
    id?: string;
    fiscalYear: number;
    scenarioLabel: string;
    status?: $Enums.BudgetVersionStatus;
    boardResolutionRef?: string | null;
    proposedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionCreatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    approvedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsApprovedNestedInput;
    lines?: Prisma.BudgetLineUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUncheckedUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateManyWithoutProposedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    proposedBy?: Prisma.AppUserUpdateOneWithoutBudgetVersionsProposedNestedInput;
    lines?: Prisma.BudgetLineUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
    lines?: Prisma.BudgetLineUncheckedUpdateManyWithoutBudgetVersionNestedInput;
    targets?: Prisma.BudgetTargetUncheckedUpdateManyWithoutBudgetVersionNestedInput;
};
export type BudgetVersionUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fiscalYear?: Prisma.IntFieldUpdateOperationsInput | number;
    scenarioLabel?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumBudgetVersionStatusFieldUpdateOperationsInput | $Enums.BudgetVersionStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    proposedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    linkedObjectiveCodes?: Prisma.BudgetVersionUpdatelinkedObjectiveCodesInput | string[];
};
export type BudgetVersionCountOutputType = {
    lines: number;
    targets: number;
};
export type BudgetVersionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    lines?: boolean | BudgetVersionCountOutputTypeCountLinesArgs;
    targets?: boolean | BudgetVersionCountOutputTypeCountTargetsArgs;
};
export type BudgetVersionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionCountOutputTypeSelect<ExtArgs> | null;
};
export type BudgetVersionCountOutputTypeCountLinesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetLineWhereInput;
};
export type BudgetVersionCountOutputTypeCountTargetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetTargetWhereInput;
};
export type BudgetVersionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fiscalYear?: boolean;
    scenarioLabel?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    linkedObjectiveCodes?: boolean;
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
    lines?: boolean | Prisma.BudgetVersion$linesArgs<ExtArgs>;
    targets?: boolean | Prisma.BudgetVersion$targetsArgs<ExtArgs>;
    _count?: boolean | Prisma.BudgetVersionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["budgetVersion"]>;
export type BudgetVersionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fiscalYear?: boolean;
    scenarioLabel?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    linkedObjectiveCodes?: boolean;
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["budgetVersion"]>;
export type BudgetVersionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fiscalYear?: boolean;
    scenarioLabel?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    linkedObjectiveCodes?: boolean;
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["budgetVersion"]>;
export type BudgetVersionSelectScalar = {
    id?: boolean;
    fiscalYear?: boolean;
    scenarioLabel?: boolean;
    status?: boolean;
    boardResolutionRef?: boolean;
    proposedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    linkedObjectiveCodes?: boolean;
};
export type BudgetVersionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fiscalYear" | "scenarioLabel" | "status" | "boardResolutionRef" | "proposedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt" | "linkedObjectiveCodes", ExtArgs["result"]["budgetVersion"]>;
export type BudgetVersionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
    lines?: boolean | Prisma.BudgetVersion$linesArgs<ExtArgs>;
    targets?: boolean | Prisma.BudgetVersion$targetsArgs<ExtArgs>;
    _count?: boolean | Prisma.BudgetVersionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BudgetVersionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
};
export type BudgetVersionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    proposedBy?: boolean | Prisma.BudgetVersion$proposedByArgs<ExtArgs>;
    approvedBy?: boolean | Prisma.BudgetVersion$approvedByArgs<ExtArgs>;
};
export type $BudgetVersionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BudgetVersion";
    objects: {
        proposedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
        lines: Prisma.$BudgetLinePayload<ExtArgs>[];
        targets: Prisma.$BudgetTargetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fiscalYear: number;
        scenarioLabel: string;
        status: $Enums.BudgetVersionStatus;
        boardResolutionRef: string | null;
        proposedByUserId: string | null;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
        linkedObjectiveCodes: string[];
    }, ExtArgs["result"]["budgetVersion"]>;
    composites: {};
};
export type BudgetVersionGetPayload<S extends boolean | null | undefined | BudgetVersionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload, S>;
export type BudgetVersionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BudgetVersionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BudgetVersionCountAggregateInputType | true;
};
export interface BudgetVersionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BudgetVersion'];
        meta: {
            name: 'BudgetVersion';
        };
    };
    findUnique<T extends BudgetVersionFindUniqueArgs>(args: Prisma.SelectSubset<T, BudgetVersionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BudgetVersionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BudgetVersionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BudgetVersionFindFirstArgs>(args?: Prisma.SelectSubset<T, BudgetVersionFindFirstArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BudgetVersionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BudgetVersionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BudgetVersionFindManyArgs>(args?: Prisma.SelectSubset<T, BudgetVersionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BudgetVersionCreateArgs>(args: Prisma.SelectSubset<T, BudgetVersionCreateArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BudgetVersionCreateManyArgs>(args?: Prisma.SelectSubset<T, BudgetVersionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BudgetVersionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BudgetVersionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BudgetVersionDeleteArgs>(args: Prisma.SelectSubset<T, BudgetVersionDeleteArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BudgetVersionUpdateArgs>(args: Prisma.SelectSubset<T, BudgetVersionUpdateArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BudgetVersionDeleteManyArgs>(args?: Prisma.SelectSubset<T, BudgetVersionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BudgetVersionUpdateManyArgs>(args: Prisma.SelectSubset<T, BudgetVersionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BudgetVersionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BudgetVersionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BudgetVersionUpsertArgs>(args: Prisma.SelectSubset<T, BudgetVersionUpsertArgs<ExtArgs>>): Prisma.Prisma__BudgetVersionClient<runtime.Types.Result.GetResult<Prisma.$BudgetVersionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BudgetVersionCountArgs>(args?: Prisma.Subset<T, BudgetVersionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BudgetVersionCountAggregateOutputType> : number>;
    aggregate<T extends BudgetVersionAggregateArgs>(args: Prisma.Subset<T, BudgetVersionAggregateArgs>): Prisma.PrismaPromise<GetBudgetVersionAggregateType<T>>;
    groupBy<T extends BudgetVersionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BudgetVersionGroupByArgs['orderBy'];
    } : {
        orderBy?: BudgetVersionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BudgetVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBudgetVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BudgetVersionFieldRefs;
}
export interface Prisma__BudgetVersionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    proposedBy<T extends Prisma.BudgetVersion$proposedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersion$proposedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    approvedBy<T extends Prisma.BudgetVersion$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersion$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    lines<T extends Prisma.BudgetVersion$linesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersion$linesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetLinePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    targets<T extends Prisma.BudgetVersion$targetsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BudgetVersion$targetsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BudgetTargetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BudgetVersionFieldRefs {
    readonly id: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly fiscalYear: Prisma.FieldRef<"BudgetVersion", 'Int'>;
    readonly scenarioLabel: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly status: Prisma.FieldRef<"BudgetVersion", 'BudgetVersionStatus'>;
    readonly boardResolutionRef: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly proposedByUserId: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"BudgetVersion", 'String'>;
    readonly createdAt: Prisma.FieldRef<"BudgetVersion", 'DateTime'>;
    readonly linkedObjectiveCodes: Prisma.FieldRef<"BudgetVersion", 'String[]'>;
}
export type BudgetVersionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where?: Prisma.BudgetVersionWhereInput;
    orderBy?: Prisma.BudgetVersionOrderByWithRelationInput | Prisma.BudgetVersionOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVersionScalarFieldEnum | Prisma.BudgetVersionScalarFieldEnum[];
};
export type BudgetVersionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where?: Prisma.BudgetVersionWhereInput;
    orderBy?: Prisma.BudgetVersionOrderByWithRelationInput | Prisma.BudgetVersionOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVersionScalarFieldEnum | Prisma.BudgetVersionScalarFieldEnum[];
};
export type BudgetVersionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where?: Prisma.BudgetVersionWhereInput;
    orderBy?: Prisma.BudgetVersionOrderByWithRelationInput | Prisma.BudgetVersionOrderByWithRelationInput[];
    cursor?: Prisma.BudgetVersionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetVersionScalarFieldEnum | Prisma.BudgetVersionScalarFieldEnum[];
};
export type BudgetVersionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVersionCreateInput, Prisma.BudgetVersionUncheckedCreateInput>;
};
export type BudgetVersionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BudgetVersionCreateManyInput | Prisma.BudgetVersionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BudgetVersionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    data: Prisma.BudgetVersionCreateManyInput | Prisma.BudgetVersionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BudgetVersionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BudgetVersionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateInput, Prisma.BudgetVersionUncheckedUpdateInput>;
    where: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BudgetVersionUpdateManyMutationInput, Prisma.BudgetVersionUncheckedUpdateManyInput>;
    where?: Prisma.BudgetVersionWhereInput;
    limit?: number;
};
export type BudgetVersionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BudgetVersionUpdateManyMutationInput, Prisma.BudgetVersionUncheckedUpdateManyInput>;
    where?: Prisma.BudgetVersionWhereInput;
    limit?: number;
    include?: Prisma.BudgetVersionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BudgetVersionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where: Prisma.BudgetVersionWhereUniqueInput;
    create: Prisma.XOR<Prisma.BudgetVersionCreateInput, Prisma.BudgetVersionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BudgetVersionUpdateInput, Prisma.BudgetVersionUncheckedUpdateInput>;
};
export type BudgetVersionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
    where: Prisma.BudgetVersionWhereUniqueInput;
};
export type BudgetVersionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BudgetVersionWhereInput;
    limit?: number;
};
export type BudgetVersion$proposedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BudgetVersion$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type BudgetVersion$linesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetLineSelect<ExtArgs> | null;
    omit?: Prisma.BudgetLineOmit<ExtArgs> | null;
    include?: Prisma.BudgetLineInclude<ExtArgs> | null;
    where?: Prisma.BudgetLineWhereInput;
    orderBy?: Prisma.BudgetLineOrderByWithRelationInput | Prisma.BudgetLineOrderByWithRelationInput[];
    cursor?: Prisma.BudgetLineWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetLineScalarFieldEnum | Prisma.BudgetLineScalarFieldEnum[];
};
export type BudgetVersion$targetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetTargetSelect<ExtArgs> | null;
    omit?: Prisma.BudgetTargetOmit<ExtArgs> | null;
    include?: Prisma.BudgetTargetInclude<ExtArgs> | null;
    where?: Prisma.BudgetTargetWhereInput;
    orderBy?: Prisma.BudgetTargetOrderByWithRelationInput | Prisma.BudgetTargetOrderByWithRelationInput[];
    cursor?: Prisma.BudgetTargetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BudgetTargetScalarFieldEnum | Prisma.BudgetTargetScalarFieldEnum[];
};
export type BudgetVersionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BudgetVersionSelect<ExtArgs> | null;
    omit?: Prisma.BudgetVersionOmit<ExtArgs> | null;
    include?: Prisma.BudgetVersionInclude<ExtArgs> | null;
};
