import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type TalentRecommendationModel = runtime.Types.Result.DefaultSelection<Prisma.$TalentRecommendationPayload>;
export type AggregateTalentRecommendation = {
    _count: TalentRecommendationCountAggregateOutputType | null;
    _min: TalentRecommendationMinAggregateOutputType | null;
    _max: TalentRecommendationMaxAggregateOutputType | null;
};
export type TalentRecommendationMinAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    recommendationType: $Enums.TalentRecommendationType | null;
    welfareSchemeId: string | null;
    rewardTypeId: string | null;
    appraisalCycleId: string | null;
    justification: string | null;
    status: $Enums.TalentRecommendationStatus | null;
    recommendedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type TalentRecommendationMaxAggregateOutputType = {
    id: string | null;
    employeeId: string | null;
    recommendationType: $Enums.TalentRecommendationType | null;
    welfareSchemeId: string | null;
    rewardTypeId: string | null;
    appraisalCycleId: string | null;
    justification: string | null;
    status: $Enums.TalentRecommendationStatus | null;
    recommendedByUserId: string | null;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date | null;
};
export type TalentRecommendationCountAggregateOutputType = {
    id: number;
    employeeId: number;
    recommendationType: number;
    welfareSchemeId: number;
    rewardTypeId: number;
    appraisalCycleId: number;
    justification: number;
    status: number;
    recommendedByUserId: number;
    approvedByUserId: number;
    workflowInstanceId: number;
    createdAt: number;
    _all: number;
};
export type TalentRecommendationMinAggregateInputType = {
    id?: true;
    employeeId?: true;
    recommendationType?: true;
    welfareSchemeId?: true;
    rewardTypeId?: true;
    appraisalCycleId?: true;
    justification?: true;
    status?: true;
    recommendedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type TalentRecommendationMaxAggregateInputType = {
    id?: true;
    employeeId?: true;
    recommendationType?: true;
    welfareSchemeId?: true;
    rewardTypeId?: true;
    appraisalCycleId?: true;
    justification?: true;
    status?: true;
    recommendedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
};
export type TalentRecommendationCountAggregateInputType = {
    id?: true;
    employeeId?: true;
    recommendationType?: true;
    welfareSchemeId?: true;
    rewardTypeId?: true;
    appraisalCycleId?: true;
    justification?: true;
    status?: true;
    recommendedByUserId?: true;
    approvedByUserId?: true;
    workflowInstanceId?: true;
    createdAt?: true;
    _all?: true;
};
export type TalentRecommendationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithRelationInput | Prisma.TalentRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.TalentRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TalentRecommendationCountAggregateInputType;
    _min?: TalentRecommendationMinAggregateInputType;
    _max?: TalentRecommendationMaxAggregateInputType;
};
export type GetTalentRecommendationAggregateType<T extends TalentRecommendationAggregateArgs> = {
    [P in keyof T & keyof AggregateTalentRecommendation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTalentRecommendation[P]> : Prisma.GetScalarType<T[P], AggregateTalentRecommendation[P]>;
};
export type TalentRecommendationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithAggregationInput | Prisma.TalentRecommendationOrderByWithAggregationInput[];
    by: Prisma.TalentRecommendationScalarFieldEnum[] | Prisma.TalentRecommendationScalarFieldEnum;
    having?: Prisma.TalentRecommendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TalentRecommendationCountAggregateInputType | true;
    _min?: TalentRecommendationMinAggregateInputType;
    _max?: TalentRecommendationMaxAggregateInputType;
};
export type TalentRecommendationGroupByOutputType = {
    id: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId: string | null;
    rewardTypeId: string | null;
    appraisalCycleId: string | null;
    justification: string;
    status: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId: string | null;
    workflowInstanceId: string | null;
    createdAt: Date;
    _count: TalentRecommendationCountAggregateOutputType | null;
    _min: TalentRecommendationMinAggregateOutputType | null;
    _max: TalentRecommendationMaxAggregateOutputType | null;
};
export type GetTalentRecommendationGroupByPayload<T extends TalentRecommendationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TalentRecommendationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TalentRecommendationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TalentRecommendationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TalentRecommendationGroupByOutputType[P]>;
}>>;
export type TalentRecommendationWhereInput = {
    AND?: Prisma.TalentRecommendationWhereInput | Prisma.TalentRecommendationWhereInput[];
    OR?: Prisma.TalentRecommendationWhereInput[];
    NOT?: Prisma.TalentRecommendationWhereInput | Prisma.TalentRecommendationWhereInput[];
    id?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    employeeId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFilter<"TalentRecommendation"> | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    rewardTypeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    appraisalCycleId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    justification?: Prisma.StringFilter<"TalentRecommendation"> | string;
    status?: Prisma.EnumTalentRecommendationStatusFilter<"TalentRecommendation"> | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TalentRecommendation"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    welfareScheme?: Prisma.XOR<Prisma.WelfareSchemeNullableScalarRelationFilter, Prisma.WelfareSchemeWhereInput> | null;
    rewardType?: Prisma.XOR<Prisma.RewardTypeNullableScalarRelationFilter, Prisma.RewardTypeWhereInput> | null;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleNullableScalarRelationFilter, Prisma.AppraisalCycleWhereInput> | null;
};
export type TalentRecommendationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    recommendationType?: Prisma.SortOrder;
    welfareSchemeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rewardTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recommendedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    employee?: Prisma.EmployeeOrderByWithRelationInput;
    welfareScheme?: Prisma.WelfareSchemeOrderByWithRelationInput;
    rewardType?: Prisma.RewardTypeOrderByWithRelationInput;
    appraisalCycle?: Prisma.AppraisalCycleOrderByWithRelationInput;
};
export type TalentRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    workflowInstanceId?: string;
    AND?: Prisma.TalentRecommendationWhereInput | Prisma.TalentRecommendationWhereInput[];
    OR?: Prisma.TalentRecommendationWhereInput[];
    NOT?: Prisma.TalentRecommendationWhereInput | Prisma.TalentRecommendationWhereInput[];
    employeeId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFilter<"TalentRecommendation"> | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    rewardTypeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    appraisalCycleId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    justification?: Prisma.StringFilter<"TalentRecommendation"> | string;
    status?: Prisma.EnumTalentRecommendationStatusFilter<"TalentRecommendation"> | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TalentRecommendation"> | Date | string;
    employee?: Prisma.XOR<Prisma.EmployeeScalarRelationFilter, Prisma.EmployeeWhereInput>;
    welfareScheme?: Prisma.XOR<Prisma.WelfareSchemeNullableScalarRelationFilter, Prisma.WelfareSchemeWhereInput> | null;
    rewardType?: Prisma.XOR<Prisma.RewardTypeNullableScalarRelationFilter, Prisma.RewardTypeWhereInput> | null;
    appraisalCycle?: Prisma.XOR<Prisma.AppraisalCycleNullableScalarRelationFilter, Prisma.AppraisalCycleWhereInput> | null;
}, "id" | "workflowInstanceId">;
export type TalentRecommendationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    recommendationType?: Prisma.SortOrder;
    welfareSchemeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    rewardTypeId?: Prisma.SortOrderInput | Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrderInput | Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recommendedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.TalentRecommendationCountOrderByAggregateInput;
    _max?: Prisma.TalentRecommendationMaxOrderByAggregateInput;
    _min?: Prisma.TalentRecommendationMinOrderByAggregateInput;
};
export type TalentRecommendationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TalentRecommendationScalarWhereWithAggregatesInput | Prisma.TalentRecommendationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TalentRecommendationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TalentRecommendationScalarWhereWithAggregatesInput | Prisma.TalentRecommendationScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"TalentRecommendation"> | string;
    employeeId?: Prisma.UuidWithAggregatesFilter<"TalentRecommendation"> | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeWithAggregatesFilter<"TalentRecommendation"> | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.UuidNullableWithAggregatesFilter<"TalentRecommendation"> | string | null;
    rewardTypeId?: Prisma.UuidNullableWithAggregatesFilter<"TalentRecommendation"> | string | null;
    appraisalCycleId?: Prisma.UuidNullableWithAggregatesFilter<"TalentRecommendation"> | string | null;
    justification?: Prisma.StringWithAggregatesFilter<"TalentRecommendation"> | string;
    status?: Prisma.EnumTalentRecommendationStatusWithAggregatesFilter<"TalentRecommendation"> | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.UuidWithAggregatesFilter<"TalentRecommendation"> | string;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"TalentRecommendation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableWithAggregatesFilter<"TalentRecommendation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"TalentRecommendation"> | Date | string;
};
export type TalentRecommendationCreateInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutTalentRecommendationsInput;
    welfareScheme?: Prisma.WelfareSchemeCreateNestedOneWithoutRecommendationsInput;
    rewardType?: Prisma.RewardTypeCreateNestedOneWithoutRecommendationsInput;
    appraisalCycle?: Prisma.AppraisalCycleCreateNestedOneWithoutTalentRecommendationsInput;
};
export type TalentRecommendationUncheckedCreateInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTalentRecommendationsNestedInput;
    welfareScheme?: Prisma.WelfareSchemeUpdateOneWithoutRecommendationsNestedInput;
    rewardType?: Prisma.RewardTypeUpdateOneWithoutRecommendationsNestedInput;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneWithoutTalentRecommendationsNestedInput;
};
export type TalentRecommendationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationCreateManyInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationListRelationFilter = {
    every?: Prisma.TalentRecommendationWhereInput;
    some?: Prisma.TalentRecommendationWhereInput;
    none?: Prisma.TalentRecommendationWhereInput;
};
export type TalentRecommendationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type TalentRecommendationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    recommendationType?: Prisma.SortOrder;
    welfareSchemeId?: Prisma.SortOrder;
    rewardTypeId?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recommendedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TalentRecommendationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    recommendationType?: Prisma.SortOrder;
    welfareSchemeId?: Prisma.SortOrder;
    rewardTypeId?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recommendedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TalentRecommendationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeId?: Prisma.SortOrder;
    recommendationType?: Prisma.SortOrder;
    welfareSchemeId?: Prisma.SortOrder;
    rewardTypeId?: Prisma.SortOrder;
    appraisalCycleId?: Prisma.SortOrder;
    justification?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    recommendedByUserId?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    workflowInstanceId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type TalentRecommendationCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput> | Prisma.TalentRecommendationCreateWithoutEmployeeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput | Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput> | Prisma.TalentRecommendationCreateWithoutEmployeeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput | Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyEmployeeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput> | Prisma.TalentRecommendationCreateWithoutEmployeeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput | Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyEmployeeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutEmployeeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput> | Prisma.TalentRecommendationCreateWithoutEmployeeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput | Prisma.TalentRecommendationCreateOrConnectWithoutEmployeeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutEmployeeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutEmployeeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyEmployeeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutEmployeeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutEmployeeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutEmployeeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutEmployeeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput> | Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput | Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.TalentRecommendationCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUncheckedCreateNestedManyWithoutAppraisalCycleInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput> | Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput | Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput[];
    createMany?: Prisma.TalentRecommendationCreateManyAppraisalCycleInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput> | Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput | Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.TalentRecommendationCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput> | Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput | Prisma.TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutAppraisalCycleInput[];
    createMany?: Prisma.TalentRecommendationCreateManyAppraisalCycleInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutAppraisalCycleInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutAppraisalCycleInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutAppraisalCycleInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationCreateNestedManyWithoutWelfareSchemeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput> | Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput | Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyWelfareSchemeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUncheckedCreateNestedManyWithoutWelfareSchemeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput> | Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput | Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyWelfareSchemeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUpdateManyWithoutWelfareSchemeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput> | Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput | Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutWelfareSchemeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyWelfareSchemeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutWelfareSchemeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutWelfareSchemeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationUncheckedUpdateManyWithoutWelfareSchemeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput> | Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput | Prisma.TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutWelfareSchemeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyWelfareSchemeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutWelfareSchemeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutWelfareSchemeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutWelfareSchemeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationCreateNestedManyWithoutRewardTypeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput> | Prisma.TalentRecommendationCreateWithoutRewardTypeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput | Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyRewardTypeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUncheckedCreateNestedManyWithoutRewardTypeInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput> | Prisma.TalentRecommendationCreateWithoutRewardTypeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput | Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyRewardTypeInputEnvelope;
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
};
export type TalentRecommendationUpdateManyWithoutRewardTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput> | Prisma.TalentRecommendationCreateWithoutRewardTypeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput | Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutRewardTypeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutRewardTypeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyRewardTypeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutRewardTypeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutRewardTypeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutRewardTypeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutRewardTypeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type TalentRecommendationUncheckedUpdateManyWithoutRewardTypeNestedInput = {
    create?: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput> | Prisma.TalentRecommendationCreateWithoutRewardTypeInput[] | Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput[];
    connectOrCreate?: Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput | Prisma.TalentRecommendationCreateOrConnectWithoutRewardTypeInput[];
    upsert?: Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutRewardTypeInput | Prisma.TalentRecommendationUpsertWithWhereUniqueWithoutRewardTypeInput[];
    createMany?: Prisma.TalentRecommendationCreateManyRewardTypeInputEnvelope;
    set?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    disconnect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    delete?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    connect?: Prisma.TalentRecommendationWhereUniqueInput | Prisma.TalentRecommendationWhereUniqueInput[];
    update?: Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutRewardTypeInput | Prisma.TalentRecommendationUpdateWithWhereUniqueWithoutRewardTypeInput[];
    updateMany?: Prisma.TalentRecommendationUpdateManyWithWhereWithoutRewardTypeInput | Prisma.TalentRecommendationUpdateManyWithWhereWithoutRewardTypeInput[];
    deleteMany?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
};
export type EnumTalentRecommendationTypeFieldUpdateOperationsInput = {
    set?: $Enums.TalentRecommendationType;
};
export type EnumTalentRecommendationStatusFieldUpdateOperationsInput = {
    set?: $Enums.TalentRecommendationStatus;
};
export type TalentRecommendationCreateWithoutEmployeeInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    welfareScheme?: Prisma.WelfareSchemeCreateNestedOneWithoutRecommendationsInput;
    rewardType?: Prisma.RewardTypeCreateNestedOneWithoutRecommendationsInput;
    appraisalCycle?: Prisma.AppraisalCycleCreateNestedOneWithoutTalentRecommendationsInput;
};
export type TalentRecommendationUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationCreateOrConnectWithoutEmployeeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput>;
};
export type TalentRecommendationCreateManyEmployeeInputEnvelope = {
    data: Prisma.TalentRecommendationCreateManyEmployeeInput | Prisma.TalentRecommendationCreateManyEmployeeInput[];
    skipDuplicates?: boolean;
};
export type TalentRecommendationUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutEmployeeInput>;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedCreateWithoutEmployeeInput>;
};
export type TalentRecommendationUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutEmployeeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutEmployeeInput>;
};
export type TalentRecommendationUpdateManyWithWhereWithoutEmployeeInput = {
    where: Prisma.TalentRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyWithoutEmployeeInput>;
};
export type TalentRecommendationScalarWhereInput = {
    AND?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
    OR?: Prisma.TalentRecommendationScalarWhereInput[];
    NOT?: Prisma.TalentRecommendationScalarWhereInput | Prisma.TalentRecommendationScalarWhereInput[];
    id?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    employeeId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFilter<"TalentRecommendation"> | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    rewardTypeId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    appraisalCycleId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    justification?: Prisma.StringFilter<"TalentRecommendation"> | string;
    status?: Prisma.EnumTalentRecommendationStatusFilter<"TalentRecommendation"> | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.UuidFilter<"TalentRecommendation"> | string;
    approvedByUserId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    workflowInstanceId?: Prisma.UuidNullableFilter<"TalentRecommendation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"TalentRecommendation"> | Date | string;
};
export type TalentRecommendationCreateWithoutAppraisalCycleInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutTalentRecommendationsInput;
    welfareScheme?: Prisma.WelfareSchemeCreateNestedOneWithoutRecommendationsInput;
    rewardType?: Prisma.RewardTypeCreateNestedOneWithoutRecommendationsInput;
};
export type TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationCreateOrConnectWithoutAppraisalCycleInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput>;
};
export type TalentRecommendationCreateManyAppraisalCycleInputEnvelope = {
    data: Prisma.TalentRecommendationCreateManyAppraisalCycleInput | Prisma.TalentRecommendationCreateManyAppraisalCycleInput[];
    skipDuplicates?: boolean;
};
export type TalentRecommendationUpsertWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedUpdateWithoutAppraisalCycleInput>;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedCreateWithoutAppraisalCycleInput>;
};
export type TalentRecommendationUpdateWithWhereUniqueWithoutAppraisalCycleInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutAppraisalCycleInput, Prisma.TalentRecommendationUncheckedUpdateWithoutAppraisalCycleInput>;
};
export type TalentRecommendationUpdateManyWithWhereWithoutAppraisalCycleInput = {
    where: Prisma.TalentRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleInput>;
};
export type TalentRecommendationCreateWithoutWelfareSchemeInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutTalentRecommendationsInput;
    rewardType?: Prisma.RewardTypeCreateNestedOneWithoutRecommendationsInput;
    appraisalCycle?: Prisma.AppraisalCycleCreateNestedOneWithoutTalentRecommendationsInput;
};
export type TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationCreateOrConnectWithoutWelfareSchemeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput>;
};
export type TalentRecommendationCreateManyWelfareSchemeInputEnvelope = {
    data: Prisma.TalentRecommendationCreateManyWelfareSchemeInput | Prisma.TalentRecommendationCreateManyWelfareSchemeInput[];
    skipDuplicates?: boolean;
};
export type TalentRecommendationUpsertWithWhereUniqueWithoutWelfareSchemeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutWelfareSchemeInput>;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedCreateWithoutWelfareSchemeInput>;
};
export type TalentRecommendationUpdateWithWhereUniqueWithoutWelfareSchemeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutWelfareSchemeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutWelfareSchemeInput>;
};
export type TalentRecommendationUpdateManyWithWhereWithoutWelfareSchemeInput = {
    where: Prisma.TalentRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyWithoutWelfareSchemeInput>;
};
export type TalentRecommendationCreateWithoutRewardTypeInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
    employee: Prisma.EmployeeCreateNestedOneWithoutTalentRecommendationsInput;
    welfareScheme?: Prisma.WelfareSchemeCreateNestedOneWithoutRecommendationsInput;
    appraisalCycle?: Prisma.AppraisalCycleCreateNestedOneWithoutTalentRecommendationsInput;
};
export type TalentRecommendationUncheckedCreateWithoutRewardTypeInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationCreateOrConnectWithoutRewardTypeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput>;
};
export type TalentRecommendationCreateManyRewardTypeInputEnvelope = {
    data: Prisma.TalentRecommendationCreateManyRewardTypeInput | Prisma.TalentRecommendationCreateManyRewardTypeInput[];
    skipDuplicates?: boolean;
};
export type TalentRecommendationUpsertWithWhereUniqueWithoutRewardTypeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutRewardTypeInput>;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedCreateWithoutRewardTypeInput>;
};
export type TalentRecommendationUpdateWithWhereUniqueWithoutRewardTypeInput = {
    where: Prisma.TalentRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateWithoutRewardTypeInput, Prisma.TalentRecommendationUncheckedUpdateWithoutRewardTypeInput>;
};
export type TalentRecommendationUpdateManyWithWhereWithoutRewardTypeInput = {
    where: Prisma.TalentRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyWithoutRewardTypeInput>;
};
export type TalentRecommendationCreateManyEmployeeInput = {
    id?: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    welfareScheme?: Prisma.WelfareSchemeUpdateOneWithoutRecommendationsNestedInput;
    rewardType?: Prisma.RewardTypeUpdateOneWithoutRecommendationsNestedInput;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneWithoutTalentRecommendationsNestedInput;
};
export type TalentRecommendationUncheckedUpdateWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationUncheckedUpdateManyWithoutEmployeeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationCreateManyAppraisalCycleInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    rewardTypeId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTalentRecommendationsNestedInput;
    welfareScheme?: Prisma.WelfareSchemeUpdateOneWithoutRecommendationsNestedInput;
    rewardType?: Prisma.RewardTypeUpdateOneWithoutRecommendationsNestedInput;
};
export type TalentRecommendationUncheckedUpdateWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationCreateManyWelfareSchemeInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    rewardTypeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateWithoutWelfareSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTalentRecommendationsNestedInput;
    rewardType?: Prisma.RewardTypeUpdateOneWithoutRecommendationsNestedInput;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneWithoutTalentRecommendationsNestedInput;
};
export type TalentRecommendationUncheckedUpdateWithoutWelfareSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationUncheckedUpdateManyWithoutWelfareSchemeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    rewardTypeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationCreateManyRewardTypeInput = {
    id?: string;
    employeeId: string;
    recommendationType: $Enums.TalentRecommendationType;
    welfareSchemeId?: string | null;
    appraisalCycleId?: string | null;
    justification: string;
    status?: $Enums.TalentRecommendationStatus;
    recommendedByUserId: string;
    approvedByUserId?: string | null;
    workflowInstanceId?: string | null;
    createdAt?: Date | string;
};
export type TalentRecommendationUpdateWithoutRewardTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    employee?: Prisma.EmployeeUpdateOneRequiredWithoutTalentRecommendationsNestedInput;
    welfareScheme?: Prisma.WelfareSchemeUpdateOneWithoutRecommendationsNestedInput;
    appraisalCycle?: Prisma.AppraisalCycleUpdateOneWithoutTalentRecommendationsNestedInput;
};
export type TalentRecommendationUncheckedUpdateWithoutRewardTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationUncheckedUpdateManyWithoutRewardTypeInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendationType?: Prisma.EnumTalentRecommendationTypeFieldUpdateOperationsInput | $Enums.TalentRecommendationType;
    welfareSchemeId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    appraisalCycleId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    justification?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTalentRecommendationStatusFieldUpdateOperationsInput | $Enums.TalentRecommendationStatus;
    recommendedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    workflowInstanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TalentRecommendationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    recommendationType?: boolean;
    welfareSchemeId?: boolean;
    rewardTypeId?: boolean;
    appraisalCycleId?: boolean;
    justification?: boolean;
    status?: boolean;
    recommendedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
}, ExtArgs["result"]["talentRecommendation"]>;
export type TalentRecommendationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    recommendationType?: boolean;
    welfareSchemeId?: boolean;
    rewardTypeId?: boolean;
    appraisalCycleId?: boolean;
    justification?: boolean;
    status?: boolean;
    recommendedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
}, ExtArgs["result"]["talentRecommendation"]>;
export type TalentRecommendationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeId?: boolean;
    recommendationType?: boolean;
    welfareSchemeId?: boolean;
    rewardTypeId?: boolean;
    appraisalCycleId?: boolean;
    justification?: boolean;
    status?: boolean;
    recommendedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
}, ExtArgs["result"]["talentRecommendation"]>;
export type TalentRecommendationSelectScalar = {
    id?: boolean;
    employeeId?: boolean;
    recommendationType?: boolean;
    welfareSchemeId?: boolean;
    rewardTypeId?: boolean;
    appraisalCycleId?: boolean;
    justification?: boolean;
    status?: boolean;
    recommendedByUserId?: boolean;
    approvedByUserId?: boolean;
    workflowInstanceId?: boolean;
    createdAt?: boolean;
};
export type TalentRecommendationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeId" | "recommendationType" | "welfareSchemeId" | "rewardTypeId" | "appraisalCycleId" | "justification" | "status" | "recommendedByUserId" | "approvedByUserId" | "workflowInstanceId" | "createdAt", ExtArgs["result"]["talentRecommendation"]>;
export type TalentRecommendationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
};
export type TalentRecommendationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
};
export type TalentRecommendationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    employee?: boolean | Prisma.EmployeeDefaultArgs<ExtArgs>;
    welfareScheme?: boolean | Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>;
    rewardType?: boolean | Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>;
    appraisalCycle?: boolean | Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>;
};
export type $TalentRecommendationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TalentRecommendation";
    objects: {
        employee: Prisma.$EmployeePayload<ExtArgs>;
        welfareScheme: Prisma.$WelfareSchemePayload<ExtArgs> | null;
        rewardType: Prisma.$RewardTypePayload<ExtArgs> | null;
        appraisalCycle: Prisma.$AppraisalCyclePayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeId: string;
        recommendationType: $Enums.TalentRecommendationType;
        welfareSchemeId: string | null;
        rewardTypeId: string | null;
        appraisalCycleId: string | null;
        justification: string;
        status: $Enums.TalentRecommendationStatus;
        recommendedByUserId: string;
        approvedByUserId: string | null;
        workflowInstanceId: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["talentRecommendation"]>;
    composites: {};
};
export type TalentRecommendationGetPayload<S extends boolean | null | undefined | TalentRecommendationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload, S>;
export type TalentRecommendationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TalentRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TalentRecommendationCountAggregateInputType | true;
};
export interface TalentRecommendationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TalentRecommendation'];
        meta: {
            name: 'TalentRecommendation';
        };
    };
    findUnique<T extends TalentRecommendationFindUniqueArgs>(args: Prisma.SelectSubset<T, TalentRecommendationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TalentRecommendationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TalentRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TalentRecommendationFindFirstArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TalentRecommendationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TalentRecommendationFindManyArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TalentRecommendationCreateArgs>(args: Prisma.SelectSubset<T, TalentRecommendationCreateArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TalentRecommendationCreateManyArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TalentRecommendationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TalentRecommendationDeleteArgs>(args: Prisma.SelectSubset<T, TalentRecommendationDeleteArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TalentRecommendationUpdateArgs>(args: Prisma.SelectSubset<T, TalentRecommendationUpdateArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TalentRecommendationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TalentRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TalentRecommendationUpdateManyArgs>(args: Prisma.SelectSubset<T, TalentRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TalentRecommendationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TalentRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TalentRecommendationUpsertArgs>(args: Prisma.SelectSubset<T, TalentRecommendationUpsertArgs<ExtArgs>>): Prisma.Prisma__TalentRecommendationClient<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TalentRecommendationCountArgs>(args?: Prisma.Subset<T, TalentRecommendationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TalentRecommendationCountAggregateOutputType> : number>;
    aggregate<T extends TalentRecommendationAggregateArgs>(args: Prisma.Subset<T, TalentRecommendationAggregateArgs>): Prisma.PrismaPromise<GetTalentRecommendationAggregateType<T>>;
    groupBy<T extends TalentRecommendationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TalentRecommendationGroupByArgs['orderBy'];
    } : {
        orderBy?: TalentRecommendationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TalentRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalentRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TalentRecommendationFieldRefs;
}
export interface Prisma__TalentRecommendationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    employee<T extends Prisma.EmployeeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeClient<runtime.Types.Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    welfareScheme<T extends Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TalentRecommendation$welfareSchemeArgs<ExtArgs>>): Prisma.Prisma__WelfareSchemeClient<runtime.Types.Result.GetResult<Prisma.$WelfareSchemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    rewardType<T extends Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TalentRecommendation$rewardTypeArgs<ExtArgs>>): Prisma.Prisma__RewardTypeClient<runtime.Types.Result.GetResult<Prisma.$RewardTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    appraisalCycle<T extends Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TalentRecommendation$appraisalCycleArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TalentRecommendationFieldRefs {
    readonly id: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly employeeId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly recommendationType: Prisma.FieldRef<"TalentRecommendation", 'TalentRecommendationType'>;
    readonly welfareSchemeId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly rewardTypeId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly appraisalCycleId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly justification: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly status: Prisma.FieldRef<"TalentRecommendation", 'TalentRecommendationStatus'>;
    readonly recommendedByUserId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly approvedByUserId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly workflowInstanceId: Prisma.FieldRef<"TalentRecommendation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"TalentRecommendation", 'DateTime'>;
}
export type TalentRecommendationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where: Prisma.TalentRecommendationWhereUniqueInput;
};
export type TalentRecommendationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where: Prisma.TalentRecommendationWhereUniqueInput;
};
export type TalentRecommendationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithRelationInput | Prisma.TalentRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.TalentRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TalentRecommendationScalarFieldEnum | Prisma.TalentRecommendationScalarFieldEnum[];
};
export type TalentRecommendationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithRelationInput | Prisma.TalentRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.TalentRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TalentRecommendationScalarFieldEnum | Prisma.TalentRecommendationScalarFieldEnum[];
};
export type TalentRecommendationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where?: Prisma.TalentRecommendationWhereInput;
    orderBy?: Prisma.TalentRecommendationOrderByWithRelationInput | Prisma.TalentRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.TalentRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TalentRecommendationScalarFieldEnum | Prisma.TalentRecommendationScalarFieldEnum[];
};
export type TalentRecommendationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TalentRecommendationCreateInput, Prisma.TalentRecommendationUncheckedCreateInput>;
};
export type TalentRecommendationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TalentRecommendationCreateManyInput | Prisma.TalentRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TalentRecommendationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    data: Prisma.TalentRecommendationCreateManyInput | Prisma.TalentRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TalentRecommendationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TalentRecommendationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateInput, Prisma.TalentRecommendationUncheckedUpdateInput>;
    where: Prisma.TalentRecommendationWhereUniqueInput;
};
export type TalentRecommendationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.TalentRecommendationWhereInput;
    limit?: number;
};
export type TalentRecommendationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TalentRecommendationUpdateManyMutationInput, Prisma.TalentRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.TalentRecommendationWhereInput;
    limit?: number;
    include?: Prisma.TalentRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TalentRecommendationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where: Prisma.TalentRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TalentRecommendationCreateInput, Prisma.TalentRecommendationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TalentRecommendationUpdateInput, Prisma.TalentRecommendationUncheckedUpdateInput>;
};
export type TalentRecommendationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
    where: Prisma.TalentRecommendationWhereUniqueInput;
};
export type TalentRecommendationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
    limit?: number;
};
export type TalentRecommendation$welfareSchemeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WelfareSchemeSelect<ExtArgs> | null;
    omit?: Prisma.WelfareSchemeOmit<ExtArgs> | null;
    include?: Prisma.WelfareSchemeInclude<ExtArgs> | null;
    where?: Prisma.WelfareSchemeWhereInput;
};
export type TalentRecommendation$rewardTypeArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RewardTypeSelect<ExtArgs> | null;
    omit?: Prisma.RewardTypeOmit<ExtArgs> | null;
    include?: Prisma.RewardTypeInclude<ExtArgs> | null;
    where?: Prisma.RewardTypeWhereInput;
};
export type TalentRecommendation$appraisalCycleArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where?: Prisma.AppraisalCycleWhereInput;
};
export type TalentRecommendationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TalentRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.TalentRecommendationOmit<ExtArgs> | null;
    include?: Prisma.TalentRecommendationInclude<ExtArgs> | null;
};
