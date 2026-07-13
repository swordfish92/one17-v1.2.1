import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AppraisalCycleModel = runtime.Types.Result.DefaultSelection<Prisma.$AppraisalCyclePayload>;
export type AggregateAppraisalCycle = {
    _count: AppraisalCycleCountAggregateOutputType | null;
    _min: AppraisalCycleMinAggregateOutputType | null;
    _max: AppraisalCycleMaxAggregateOutputType | null;
};
export type AppraisalCycleMinAggregateOutputType = {
    id: string | null;
    cycleType: $Enums.PmsCycleType | null;
    orgUnitCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.PmsCycleStatus | null;
    createdAt: Date | null;
};
export type AppraisalCycleMaxAggregateOutputType = {
    id: string | null;
    cycleType: $Enums.PmsCycleType | null;
    orgUnitCode: string | null;
    periodStart: Date | null;
    periodEnd: Date | null;
    status: $Enums.PmsCycleStatus | null;
    createdAt: Date | null;
};
export type AppraisalCycleCountAggregateOutputType = {
    id: number;
    cycleType: number;
    orgUnitCode: number;
    periodStart: number;
    periodEnd: number;
    status: number;
    createdAt: number;
    _all: number;
};
export type AppraisalCycleMinAggregateInputType = {
    id?: true;
    cycleType?: true;
    orgUnitCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    createdAt?: true;
};
export type AppraisalCycleMaxAggregateInputType = {
    id?: true;
    cycleType?: true;
    orgUnitCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    createdAt?: true;
};
export type AppraisalCycleCountAggregateInputType = {
    id?: true;
    cycleType?: true;
    orgUnitCode?: true;
    periodStart?: true;
    periodEnd?: true;
    status?: true;
    createdAt?: true;
    _all?: true;
};
export type AppraisalCycleAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppraisalCycleWhereInput;
    orderBy?: Prisma.AppraisalCycleOrderByWithRelationInput | Prisma.AppraisalCycleOrderByWithRelationInput[];
    cursor?: Prisma.AppraisalCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AppraisalCycleCountAggregateInputType;
    _min?: AppraisalCycleMinAggregateInputType;
    _max?: AppraisalCycleMaxAggregateInputType;
};
export type GetAppraisalCycleAggregateType<T extends AppraisalCycleAggregateArgs> = {
    [P in keyof T & keyof AggregateAppraisalCycle]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAppraisalCycle[P]> : Prisma.GetScalarType<T[P], AggregateAppraisalCycle[P]>;
};
export type AppraisalCycleGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppraisalCycleWhereInput;
    orderBy?: Prisma.AppraisalCycleOrderByWithAggregationInput | Prisma.AppraisalCycleOrderByWithAggregationInput[];
    by: Prisma.AppraisalCycleScalarFieldEnum[] | Prisma.AppraisalCycleScalarFieldEnum;
    having?: Prisma.AppraisalCycleScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppraisalCycleCountAggregateInputType | true;
    _min?: AppraisalCycleMinAggregateInputType;
    _max?: AppraisalCycleMaxAggregateInputType;
};
export type AppraisalCycleGroupByOutputType = {
    id: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode: string | null;
    periodStart: Date;
    periodEnd: Date;
    status: $Enums.PmsCycleStatus;
    createdAt: Date;
    _count: AppraisalCycleCountAggregateOutputType | null;
    _min: AppraisalCycleMinAggregateOutputType | null;
    _max: AppraisalCycleMaxAggregateOutputType | null;
};
export type GetAppraisalCycleGroupByPayload<T extends AppraisalCycleGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AppraisalCycleGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AppraisalCycleGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AppraisalCycleGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AppraisalCycleGroupByOutputType[P]>;
}>>;
export type AppraisalCycleWhereInput = {
    AND?: Prisma.AppraisalCycleWhereInput | Prisma.AppraisalCycleWhereInput[];
    OR?: Prisma.AppraisalCycleWhereInput[];
    NOT?: Prisma.AppraisalCycleWhereInput | Prisma.AppraisalCycleWhereInput[];
    id?: Prisma.UuidFilter<"AppraisalCycle"> | string;
    cycleType?: Prisma.EnumPmsCycleTypeFilter<"AppraisalCycle"> | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.StringNullableFilter<"AppraisalCycle"> | string | null;
    periodStart?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    status?: Prisma.EnumPmsCycleStatusFilter<"AppraisalCycle"> | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionListRelationFilter;
    gateChecks?: Prisma.BehaviouralGateCheckListRelationFilter;
    incentiveResults?: Prisma.EmployeeIncentiveResultListRelationFilter;
    talentRecommendations?: Prisma.TalentRecommendationListRelationFilter;
};
export type AppraisalCycleOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    cycleType?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionOrderByRelationAggregateInput;
    gateChecks?: Prisma.BehaviouralGateCheckOrderByRelationAggregateInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultOrderByRelationAggregateInput;
    talentRecommendations?: Prisma.TalentRecommendationOrderByRelationAggregateInput;
};
export type AppraisalCycleWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.AppraisalCycleWhereInput | Prisma.AppraisalCycleWhereInput[];
    OR?: Prisma.AppraisalCycleWhereInput[];
    NOT?: Prisma.AppraisalCycleWhereInput | Prisma.AppraisalCycleWhereInput[];
    cycleType?: Prisma.EnumPmsCycleTypeFilter<"AppraisalCycle"> | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.StringNullableFilter<"AppraisalCycle"> | string | null;
    periodStart?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    periodEnd?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    status?: Prisma.EnumPmsCycleStatusFilter<"AppraisalCycle"> | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFilter<"AppraisalCycle"> | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionListRelationFilter;
    gateChecks?: Prisma.BehaviouralGateCheckListRelationFilter;
    incentiveResults?: Prisma.EmployeeIncentiveResultListRelationFilter;
    talentRecommendations?: Prisma.TalentRecommendationListRelationFilter;
}, "id">;
export type AppraisalCycleOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    cycleType?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.AppraisalCycleCountOrderByAggregateInput;
    _max?: Prisma.AppraisalCycleMaxOrderByAggregateInput;
    _min?: Prisma.AppraisalCycleMinOrderByAggregateInput;
};
export type AppraisalCycleScalarWhereWithAggregatesInput = {
    AND?: Prisma.AppraisalCycleScalarWhereWithAggregatesInput | Prisma.AppraisalCycleScalarWhereWithAggregatesInput[];
    OR?: Prisma.AppraisalCycleScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AppraisalCycleScalarWhereWithAggregatesInput | Prisma.AppraisalCycleScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"AppraisalCycle"> | string;
    cycleType?: Prisma.EnumPmsCycleTypeWithAggregatesFilter<"AppraisalCycle"> | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.StringNullableWithAggregatesFilter<"AppraisalCycle"> | string | null;
    periodStart?: Prisma.DateTimeWithAggregatesFilter<"AppraisalCycle"> | Date | string;
    periodEnd?: Prisma.DateTimeWithAggregatesFilter<"AppraisalCycle"> | Date | string;
    status?: Prisma.EnumPmsCycleStatusWithAggregatesFilter<"AppraisalCycle"> | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"AppraisalCycle"> | Date | string;
};
export type AppraisalCycleCreateInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUncheckedCreateInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleCreateManyInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
};
export type AppraisalCycleUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppraisalCycleUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AppraisalCycleCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleType?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AppraisalCycleMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleType?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AppraisalCycleMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    cycleType?: Prisma.SortOrder;
    orgUnitCode?: Prisma.SortOrder;
    periodStart?: Prisma.SortOrder;
    periodEnd?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type AppraisalCycleScalarRelationFilter = {
    is?: Prisma.AppraisalCycleWhereInput;
    isNot?: Prisma.AppraisalCycleWhereInput;
};
export type AppraisalCycleNullableScalarRelationFilter = {
    is?: Prisma.AppraisalCycleWhereInput | null;
    isNot?: Prisma.AppraisalCycleWhereInput | null;
};
export type EnumPmsCycleTypeFieldUpdateOperationsInput = {
    set?: $Enums.PmsCycleType;
};
export type EnumPmsCycleStatusFieldUpdateOperationsInput = {
    set?: $Enums.PmsCycleStatus;
};
export type AppraisalCycleCreateNestedOneWithoutScoreSubmissionsInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedCreateWithoutScoreSubmissionsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutScoreSubmissionsInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleUpdateOneRequiredWithoutScoreSubmissionsNestedInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedCreateWithoutScoreSubmissionsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutScoreSubmissionsInput;
    upsert?: Prisma.AppraisalCycleUpsertWithoutScoreSubmissionsInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppraisalCycleUpdateToOneWithWhereWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUpdateWithoutScoreSubmissionsInput>, Prisma.AppraisalCycleUncheckedUpdateWithoutScoreSubmissionsInput>;
};
export type AppraisalCycleCreateNestedOneWithoutGateChecksInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedCreateWithoutGateChecksInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutGateChecksInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleUpdateOneRequiredWithoutGateChecksNestedInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedCreateWithoutGateChecksInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutGateChecksInput;
    upsert?: Prisma.AppraisalCycleUpsertWithoutGateChecksInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppraisalCycleUpdateToOneWithWhereWithoutGateChecksInput, Prisma.AppraisalCycleUpdateWithoutGateChecksInput>, Prisma.AppraisalCycleUncheckedUpdateWithoutGateChecksInput>;
};
export type AppraisalCycleCreateNestedOneWithoutIncentiveResultsInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedCreateWithoutIncentiveResultsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutIncentiveResultsInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleUpdateOneRequiredWithoutIncentiveResultsNestedInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedCreateWithoutIncentiveResultsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutIncentiveResultsInput;
    upsert?: Prisma.AppraisalCycleUpsertWithoutIncentiveResultsInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppraisalCycleUpdateToOneWithWhereWithoutIncentiveResultsInput, Prisma.AppraisalCycleUpdateWithoutIncentiveResultsInput>, Prisma.AppraisalCycleUncheckedUpdateWithoutIncentiveResultsInput>;
};
export type AppraisalCycleCreateNestedOneWithoutTalentRecommendationsInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedCreateWithoutTalentRecommendationsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutTalentRecommendationsInput;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleUpdateOneWithoutTalentRecommendationsNestedInput = {
    create?: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedCreateWithoutTalentRecommendationsInput>;
    connectOrCreate?: Prisma.AppraisalCycleCreateOrConnectWithoutTalentRecommendationsInput;
    upsert?: Prisma.AppraisalCycleUpsertWithoutTalentRecommendationsInput;
    disconnect?: Prisma.AppraisalCycleWhereInput | boolean;
    delete?: Prisma.AppraisalCycleWhereInput | boolean;
    connect?: Prisma.AppraisalCycleWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AppraisalCycleUpdateToOneWithWhereWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUpdateWithoutTalentRecommendationsInput>, Prisma.AppraisalCycleUncheckedUpdateWithoutTalentRecommendationsInput>;
};
export type AppraisalCycleCreateWithoutScoreSubmissionsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    gateChecks?: Prisma.BehaviouralGateCheckCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUncheckedCreateWithoutScoreSubmissionsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleCreateOrConnectWithoutScoreSubmissionsInput = {
    where: Prisma.AppraisalCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedCreateWithoutScoreSubmissionsInput>;
};
export type AppraisalCycleUpsertWithoutScoreSubmissionsInput = {
    update: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutScoreSubmissionsInput>;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedCreateWithoutScoreSubmissionsInput>;
    where?: Prisma.AppraisalCycleWhereInput;
};
export type AppraisalCycleUpdateToOneWithWhereWithoutScoreSubmissionsInput = {
    where?: Prisma.AppraisalCycleWhereInput;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutScoreSubmissionsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutScoreSubmissionsInput>;
};
export type AppraisalCycleUpdateWithoutScoreSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gateChecks?: Prisma.BehaviouralGateCheckUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleUncheckedUpdateWithoutScoreSubmissionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleCreateWithoutGateChecksInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUncheckedCreateWithoutGateChecksInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleCreateOrConnectWithoutGateChecksInput = {
    where: Prisma.AppraisalCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedCreateWithoutGateChecksInput>;
};
export type AppraisalCycleUpsertWithoutGateChecksInput = {
    update: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedUpdateWithoutGateChecksInput>;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedCreateWithoutGateChecksInput>;
    where?: Prisma.AppraisalCycleWhereInput;
};
export type AppraisalCycleUpdateToOneWithWhereWithoutGateChecksInput = {
    where?: Prisma.AppraisalCycleWhereInput;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutGateChecksInput, Prisma.AppraisalCycleUncheckedUpdateWithoutGateChecksInput>;
};
export type AppraisalCycleUpdateWithoutGateChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleUncheckedUpdateWithoutGateChecksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleCreateWithoutIncentiveResultsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUncheckedCreateWithoutIncentiveResultsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleCreateOrConnectWithoutIncentiveResultsInput = {
    where: Prisma.AppraisalCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedCreateWithoutIncentiveResultsInput>;
};
export type AppraisalCycleUpsertWithoutIncentiveResultsInput = {
    update: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutIncentiveResultsInput>;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedCreateWithoutIncentiveResultsInput>;
    where?: Prisma.AppraisalCycleWhereInput;
};
export type AppraisalCycleUpdateToOneWithWhereWithoutIncentiveResultsInput = {
    where?: Prisma.AppraisalCycleWhereInput;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutIncentiveResultsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutIncentiveResultsInput>;
};
export type AppraisalCycleUpdateWithoutIncentiveResultsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleUncheckedUpdateWithoutIncentiveResultsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    talentRecommendations?: Prisma.TalentRecommendationUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleCreateWithoutTalentRecommendationsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleUncheckedCreateWithoutTalentRecommendationsInput = {
    id?: string;
    cycleType: $Enums.PmsCycleType;
    orgUnitCode?: string | null;
    periodStart: Date | string;
    periodEnd: Date | string;
    status?: $Enums.PmsCycleStatus;
    createdAt?: Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedCreateNestedManyWithoutAppraisalCycleInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedCreateNestedManyWithoutAppraisalCycleInput;
};
export type AppraisalCycleCreateOrConnectWithoutTalentRecommendationsInput = {
    where: Prisma.AppraisalCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedCreateWithoutTalentRecommendationsInput>;
};
export type AppraisalCycleUpsertWithoutTalentRecommendationsInput = {
    update: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutTalentRecommendationsInput>;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedCreateWithoutTalentRecommendationsInput>;
    where?: Prisma.AppraisalCycleWhereInput;
};
export type AppraisalCycleUpdateToOneWithWhereWithoutTalentRecommendationsInput = {
    where?: Prisma.AppraisalCycleWhereInput;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateWithoutTalentRecommendationsInput, Prisma.AppraisalCycleUncheckedUpdateWithoutTalentRecommendationsInput>;
};
export type AppraisalCycleUpdateWithoutTalentRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleUncheckedUpdateWithoutTalentRecommendationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    cycleType?: Prisma.EnumPmsCycleTypeFieldUpdateOperationsInput | $Enums.PmsCycleType;
    orgUnitCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    periodStart?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    periodEnd?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumPmsCycleStatusFieldUpdateOperationsInput | $Enums.PmsCycleStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scoreSubmissions?: Prisma.EmployeeScoreSubmissionUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    gateChecks?: Prisma.BehaviouralGateCheckUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
    incentiveResults?: Prisma.EmployeeIncentiveResultUncheckedUpdateManyWithoutAppraisalCycleNestedInput;
};
export type AppraisalCycleCountOutputType = {
    scoreSubmissions: number;
    gateChecks: number;
    incentiveResults: number;
    talentRecommendations: number;
};
export type AppraisalCycleCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scoreSubmissions?: boolean | AppraisalCycleCountOutputTypeCountScoreSubmissionsArgs;
    gateChecks?: boolean | AppraisalCycleCountOutputTypeCountGateChecksArgs;
    incentiveResults?: boolean | AppraisalCycleCountOutputTypeCountIncentiveResultsArgs;
    talentRecommendations?: boolean | AppraisalCycleCountOutputTypeCountTalentRecommendationsArgs;
};
export type AppraisalCycleCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleCountOutputTypeSelect<ExtArgs> | null;
};
export type AppraisalCycleCountOutputTypeCountScoreSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
};
export type AppraisalCycleCountOutputTypeCountGateChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BehaviouralGateCheckWhereInput;
};
export type AppraisalCycleCountOutputTypeCountIncentiveResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeIncentiveResultWhereInput;
};
export type AppraisalCycleCountOutputTypeCountTalentRecommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TalentRecommendationWhereInput;
};
export type AppraisalCycleSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleType?: boolean;
    orgUnitCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    createdAt?: boolean;
    scoreSubmissions?: boolean | Prisma.AppraisalCycle$scoreSubmissionsArgs<ExtArgs>;
    gateChecks?: boolean | Prisma.AppraisalCycle$gateChecksArgs<ExtArgs>;
    incentiveResults?: boolean | Prisma.AppraisalCycle$incentiveResultsArgs<ExtArgs>;
    talentRecommendations?: boolean | Prisma.AppraisalCycle$talentRecommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppraisalCycleCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["appraisalCycle"]>;
export type AppraisalCycleSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleType?: boolean;
    orgUnitCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["appraisalCycle"]>;
export type AppraisalCycleSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    cycleType?: boolean;
    orgUnitCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["appraisalCycle"]>;
export type AppraisalCycleSelectScalar = {
    id?: boolean;
    cycleType?: boolean;
    orgUnitCode?: boolean;
    periodStart?: boolean;
    periodEnd?: boolean;
    status?: boolean;
    createdAt?: boolean;
};
export type AppraisalCycleOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "cycleType" | "orgUnitCode" | "periodStart" | "periodEnd" | "status" | "createdAt", ExtArgs["result"]["appraisalCycle"]>;
export type AppraisalCycleInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    scoreSubmissions?: boolean | Prisma.AppraisalCycle$scoreSubmissionsArgs<ExtArgs>;
    gateChecks?: boolean | Prisma.AppraisalCycle$gateChecksArgs<ExtArgs>;
    incentiveResults?: boolean | Prisma.AppraisalCycle$incentiveResultsArgs<ExtArgs>;
    talentRecommendations?: boolean | Prisma.AppraisalCycle$talentRecommendationsArgs<ExtArgs>;
    _count?: boolean | Prisma.AppraisalCycleCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AppraisalCycleIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type AppraisalCycleIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $AppraisalCyclePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "AppraisalCycle";
    objects: {
        scoreSubmissions: Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>[];
        gateChecks: Prisma.$BehaviouralGateCheckPayload<ExtArgs>[];
        incentiveResults: Prisma.$EmployeeIncentiveResultPayload<ExtArgs>[];
        talentRecommendations: Prisma.$TalentRecommendationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        cycleType: $Enums.PmsCycleType;
        orgUnitCode: string | null;
        periodStart: Date;
        periodEnd: Date;
        status: $Enums.PmsCycleStatus;
        createdAt: Date;
    }, ExtArgs["result"]["appraisalCycle"]>;
    composites: {};
};
export type AppraisalCycleGetPayload<S extends boolean | null | undefined | AppraisalCycleDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload, S>;
export type AppraisalCycleCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AppraisalCycleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AppraisalCycleCountAggregateInputType | true;
};
export interface AppraisalCycleDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['AppraisalCycle'];
        meta: {
            name: 'AppraisalCycle';
        };
    };
    findUnique<T extends AppraisalCycleFindUniqueArgs>(args: Prisma.SelectSubset<T, AppraisalCycleFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AppraisalCycleFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AppraisalCycleFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AppraisalCycleFindFirstArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleFindFirstArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AppraisalCycleFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AppraisalCycleFindManyArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AppraisalCycleCreateArgs>(args: Prisma.SelectSubset<T, AppraisalCycleCreateArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AppraisalCycleCreateManyArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AppraisalCycleCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AppraisalCycleDeleteArgs>(args: Prisma.SelectSubset<T, AppraisalCycleDeleteArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AppraisalCycleUpdateArgs>(args: Prisma.SelectSubset<T, AppraisalCycleUpdateArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AppraisalCycleDeleteManyArgs>(args?: Prisma.SelectSubset<T, AppraisalCycleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AppraisalCycleUpdateManyArgs>(args: Prisma.SelectSubset<T, AppraisalCycleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AppraisalCycleUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AppraisalCycleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AppraisalCycleUpsertArgs>(args: Prisma.SelectSubset<T, AppraisalCycleUpsertArgs<ExtArgs>>): Prisma.Prisma__AppraisalCycleClient<runtime.Types.Result.GetResult<Prisma.$AppraisalCyclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AppraisalCycleCountArgs>(args?: Prisma.Subset<T, AppraisalCycleCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AppraisalCycleCountAggregateOutputType> : number>;
    aggregate<T extends AppraisalCycleAggregateArgs>(args: Prisma.Subset<T, AppraisalCycleAggregateArgs>): Prisma.PrismaPromise<GetAppraisalCycleAggregateType<T>>;
    groupBy<T extends AppraisalCycleGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AppraisalCycleGroupByArgs['orderBy'];
    } : {
        orderBy?: AppraisalCycleGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AppraisalCycleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppraisalCycleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AppraisalCycleFieldRefs;
}
export interface Prisma__AppraisalCycleClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    scoreSubmissions<T extends Prisma.AppraisalCycle$scoreSubmissionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycle$scoreSubmissionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    gateChecks<T extends Prisma.AppraisalCycle$gateChecksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycle$gateChecksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BehaviouralGateCheckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    incentiveResults<T extends Prisma.AppraisalCycle$incentiveResultsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycle$incentiveResultsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeIncentiveResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    talentRecommendations<T extends Prisma.AppraisalCycle$talentRecommendationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppraisalCycle$talentRecommendationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TalentRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AppraisalCycleFieldRefs {
    readonly id: Prisma.FieldRef<"AppraisalCycle", 'String'>;
    readonly cycleType: Prisma.FieldRef<"AppraisalCycle", 'PmsCycleType'>;
    readonly orgUnitCode: Prisma.FieldRef<"AppraisalCycle", 'String'>;
    readonly periodStart: Prisma.FieldRef<"AppraisalCycle", 'DateTime'>;
    readonly periodEnd: Prisma.FieldRef<"AppraisalCycle", 'DateTime'>;
    readonly status: Prisma.FieldRef<"AppraisalCycle", 'PmsCycleStatus'>;
    readonly createdAt: Prisma.FieldRef<"AppraisalCycle", 'DateTime'>;
}
export type AppraisalCycleFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where?: Prisma.AppraisalCycleWhereInput;
    orderBy?: Prisma.AppraisalCycleOrderByWithRelationInput | Prisma.AppraisalCycleOrderByWithRelationInput[];
    cursor?: Prisma.AppraisalCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppraisalCycleScalarFieldEnum | Prisma.AppraisalCycleScalarFieldEnum[];
};
export type AppraisalCycleFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where?: Prisma.AppraisalCycleWhereInput;
    orderBy?: Prisma.AppraisalCycleOrderByWithRelationInput | Prisma.AppraisalCycleOrderByWithRelationInput[];
    cursor?: Prisma.AppraisalCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppraisalCycleScalarFieldEnum | Prisma.AppraisalCycleScalarFieldEnum[];
};
export type AppraisalCycleFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where?: Prisma.AppraisalCycleWhereInput;
    orderBy?: Prisma.AppraisalCycleOrderByWithRelationInput | Prisma.AppraisalCycleOrderByWithRelationInput[];
    cursor?: Prisma.AppraisalCycleWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AppraisalCycleScalarFieldEnum | Prisma.AppraisalCycleScalarFieldEnum[];
};
export type AppraisalCycleCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppraisalCycleCreateInput, Prisma.AppraisalCycleUncheckedCreateInput>;
};
export type AppraisalCycleCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AppraisalCycleCreateManyInput | Prisma.AppraisalCycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppraisalCycleCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    data: Prisma.AppraisalCycleCreateManyInput | Prisma.AppraisalCycleCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AppraisalCycleUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateInput, Prisma.AppraisalCycleUncheckedUpdateInput>;
    where: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateManyMutationInput, Prisma.AppraisalCycleUncheckedUpdateManyInput>;
    where?: Prisma.AppraisalCycleWhereInput;
    limit?: number;
};
export type AppraisalCycleUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AppraisalCycleUpdateManyMutationInput, Prisma.AppraisalCycleUncheckedUpdateManyInput>;
    where?: Prisma.AppraisalCycleWhereInput;
    limit?: number;
};
export type AppraisalCycleUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where: Prisma.AppraisalCycleWhereUniqueInput;
    create: Prisma.XOR<Prisma.AppraisalCycleCreateInput, Prisma.AppraisalCycleUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AppraisalCycleUpdateInput, Prisma.AppraisalCycleUncheckedUpdateInput>;
};
export type AppraisalCycleDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
    where: Prisma.AppraisalCycleWhereUniqueInput;
};
export type AppraisalCycleDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AppraisalCycleWhereInput;
    limit?: number;
};
export type AppraisalCycle$scoreSubmissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeScoreSubmissionSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeScoreSubmissionOmit<ExtArgs> | null;
    include?: Prisma.EmployeeScoreSubmissionInclude<ExtArgs> | null;
    where?: Prisma.EmployeeScoreSubmissionWhereInput;
    orderBy?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput | Prisma.EmployeeScoreSubmissionOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeScoreSubmissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeScoreSubmissionScalarFieldEnum | Prisma.EmployeeScoreSubmissionScalarFieldEnum[];
};
export type AppraisalCycle$gateChecksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BehaviouralGateCheckSelect<ExtArgs> | null;
    omit?: Prisma.BehaviouralGateCheckOmit<ExtArgs> | null;
    include?: Prisma.BehaviouralGateCheckInclude<ExtArgs> | null;
    where?: Prisma.BehaviouralGateCheckWhereInput;
    orderBy?: Prisma.BehaviouralGateCheckOrderByWithRelationInput | Prisma.BehaviouralGateCheckOrderByWithRelationInput[];
    cursor?: Prisma.BehaviouralGateCheckWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BehaviouralGateCheckScalarFieldEnum | Prisma.BehaviouralGateCheckScalarFieldEnum[];
};
export type AppraisalCycle$incentiveResultsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeIncentiveResultSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeIncentiveResultOmit<ExtArgs> | null;
    include?: Prisma.EmployeeIncentiveResultInclude<ExtArgs> | null;
    where?: Prisma.EmployeeIncentiveResultWhereInput;
    orderBy?: Prisma.EmployeeIncentiveResultOrderByWithRelationInput | Prisma.EmployeeIncentiveResultOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeIncentiveResultWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeIncentiveResultScalarFieldEnum | Prisma.EmployeeIncentiveResultScalarFieldEnum[];
};
export type AppraisalCycle$talentRecommendationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AppraisalCycleDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppraisalCycleSelect<ExtArgs> | null;
    omit?: Prisma.AppraisalCycleOmit<ExtArgs> | null;
    include?: Prisma.AppraisalCycleInclude<ExtArgs> | null;
};
