import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmRiskAssessmentRunModel = runtime.Types.Result.DefaultSelection<Prisma.$WmRiskAssessmentRunPayload>;
export type AggregateWmRiskAssessmentRun = {
    _count: WmRiskAssessmentRunCountAggregateOutputType | null;
    _avg: WmRiskAssessmentRunAvgAggregateOutputType | null;
    _sum: WmRiskAssessmentRunSumAggregateOutputType | null;
    _min: WmRiskAssessmentRunMinAggregateOutputType | null;
    _max: WmRiskAssessmentRunMaxAggregateOutputType | null;
};
export type WmRiskAssessmentRunAvgAggregateOutputType = {
    preShockValueKobo: number | null;
    postShockValueKobo: number | null;
};
export type WmRiskAssessmentRunSumAggregateOutputType = {
    preShockValueKobo: bigint | null;
    postShockValueKobo: bigint | null;
};
export type WmRiskAssessmentRunMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    scenarioConfigId: string | null;
    preShockValueKobo: bigint | null;
    postShockValueKobo: bigint | null;
    status: $Enums.WmRiskAssessmentStatus | null;
    ranByUserId: string | null;
    reviewedByUserId: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
};
export type WmRiskAssessmentRunMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    scenarioConfigId: string | null;
    preShockValueKobo: bigint | null;
    postShockValueKobo: bigint | null;
    status: $Enums.WmRiskAssessmentStatus | null;
    ranByUserId: string | null;
    reviewedByUserId: string | null;
    publishedAt: Date | null;
    createdAt: Date | null;
};
export type WmRiskAssessmentRunCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    scenarioConfigId: number;
    combinedBookSnapshot: number;
    preShockValueKobo: number;
    postShockValueKobo: number;
    status: number;
    ranByUserId: number;
    reviewedByUserId: number;
    publishedAt: number;
    createdAt: number;
    _all: number;
};
export type WmRiskAssessmentRunAvgAggregateInputType = {
    preShockValueKobo?: true;
    postShockValueKobo?: true;
};
export type WmRiskAssessmentRunSumAggregateInputType = {
    preShockValueKobo?: true;
    postShockValueKobo?: true;
};
export type WmRiskAssessmentRunMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    scenarioConfigId?: true;
    preShockValueKobo?: true;
    postShockValueKobo?: true;
    status?: true;
    ranByUserId?: true;
    reviewedByUserId?: true;
    publishedAt?: true;
    createdAt?: true;
};
export type WmRiskAssessmentRunMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    scenarioConfigId?: true;
    preShockValueKobo?: true;
    postShockValueKobo?: true;
    status?: true;
    ranByUserId?: true;
    reviewedByUserId?: true;
    publishedAt?: true;
    createdAt?: true;
};
export type WmRiskAssessmentRunCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    scenarioConfigId?: true;
    combinedBookSnapshot?: true;
    preShockValueKobo?: true;
    postShockValueKobo?: true;
    status?: true;
    ranByUserId?: true;
    reviewedByUserId?: true;
    publishedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type WmRiskAssessmentRunAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithRelationInput | Prisma.WmRiskAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmRiskAssessmentRunCountAggregateInputType;
    _avg?: WmRiskAssessmentRunAvgAggregateInputType;
    _sum?: WmRiskAssessmentRunSumAggregateInputType;
    _min?: WmRiskAssessmentRunMinAggregateInputType;
    _max?: WmRiskAssessmentRunMaxAggregateInputType;
};
export type GetWmRiskAssessmentRunAggregateType<T extends WmRiskAssessmentRunAggregateArgs> = {
    [P in keyof T & keyof AggregateWmRiskAssessmentRun]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmRiskAssessmentRun[P]> : Prisma.GetScalarType<T[P], AggregateWmRiskAssessmentRun[P]>;
};
export type WmRiskAssessmentRunGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithAggregationInput | Prisma.WmRiskAssessmentRunOrderByWithAggregationInput[];
    by: Prisma.WmRiskAssessmentRunScalarFieldEnum[] | Prisma.WmRiskAssessmentRunScalarFieldEnum;
    having?: Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmRiskAssessmentRunCountAggregateInputType | true;
    _avg?: WmRiskAssessmentRunAvgAggregateInputType;
    _sum?: WmRiskAssessmentRunSumAggregateInputType;
    _min?: WmRiskAssessmentRunMinAggregateInputType;
    _max?: WmRiskAssessmentRunMaxAggregateInputType;
};
export type WmRiskAssessmentRunGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    scenarioConfigId: string;
    combinedBookSnapshot: runtime.JsonValue;
    preShockValueKobo: bigint;
    postShockValueKobo: bigint;
    status: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId: string | null;
    publishedAt: Date | null;
    createdAt: Date;
    _count: WmRiskAssessmentRunCountAggregateOutputType | null;
    _avg: WmRiskAssessmentRunAvgAggregateOutputType | null;
    _sum: WmRiskAssessmentRunSumAggregateOutputType | null;
    _min: WmRiskAssessmentRunMinAggregateOutputType | null;
    _max: WmRiskAssessmentRunMaxAggregateOutputType | null;
};
export type GetWmRiskAssessmentRunGroupByPayload<T extends WmRiskAssessmentRunGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmRiskAssessmentRunGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmRiskAssessmentRunGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmRiskAssessmentRunGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmRiskAssessmentRunGroupByOutputType[P]>;
}>>;
export type WmRiskAssessmentRunWhereInput = {
    AND?: Prisma.WmRiskAssessmentRunWhereInput | Prisma.WmRiskAssessmentRunWhereInput[];
    OR?: Prisma.WmRiskAssessmentRunWhereInput[];
    NOT?: Prisma.WmRiskAssessmentRunWhereInput | Prisma.WmRiskAssessmentRunWhereInput[];
    id?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmRiskAssessmentRun"> | string;
    scenarioConfigId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    combinedBookSnapshot?: Prisma.JsonFilter<"WmRiskAssessmentRun">;
    preShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    postShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFilter<"WmRiskAssessmentRun"> | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    reviewedByUserId?: Prisma.UuidNullableFilter<"WmRiskAssessmentRun"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"WmRiskAssessmentRun"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmRiskAssessmentRun"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
    scenarioConfig?: Prisma.XOR<Prisma.WmStressScenarioConfigScalarRelationFilter, Prisma.WmStressScenarioConfigWhereInput>;
};
export type WmRiskAssessmentRunOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    combinedBookSnapshot?: Prisma.SortOrder;
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    reviewedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
    scenarioConfig?: Prisma.WmStressScenarioConfigOrderByWithRelationInput;
};
export type WmRiskAssessmentRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmRiskAssessmentRunWhereInput | Prisma.WmRiskAssessmentRunWhereInput[];
    OR?: Prisma.WmRiskAssessmentRunWhereInput[];
    NOT?: Prisma.WmRiskAssessmentRunWhereInput | Prisma.WmRiskAssessmentRunWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmRiskAssessmentRun"> | string;
    scenarioConfigId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    combinedBookSnapshot?: Prisma.JsonFilter<"WmRiskAssessmentRun">;
    preShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    postShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFilter<"WmRiskAssessmentRun"> | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    reviewedByUserId?: Prisma.UuidNullableFilter<"WmRiskAssessmentRun"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"WmRiskAssessmentRun"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmRiskAssessmentRun"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
    scenarioConfig?: Prisma.XOR<Prisma.WmStressScenarioConfigScalarRelationFilter, Prisma.WmStressScenarioConfigWhereInput>;
}, "id">;
export type WmRiskAssessmentRunOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    combinedBookSnapshot?: Prisma.SortOrder;
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    reviewedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    publishedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmRiskAssessmentRunCountOrderByAggregateInput;
    _avg?: Prisma.WmRiskAssessmentRunAvgOrderByAggregateInput;
    _max?: Prisma.WmRiskAssessmentRunMaxOrderByAggregateInput;
    _min?: Prisma.WmRiskAssessmentRunMinOrderByAggregateInput;
    _sum?: Prisma.WmRiskAssessmentRunSumOrderByAggregateInput;
};
export type WmRiskAssessmentRunScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput | Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput | Prisma.WmRiskAssessmentRunScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmRiskAssessmentRun"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmRiskAssessmentRun"> | string;
    scenarioConfigId?: Prisma.UuidWithAggregatesFilter<"WmRiskAssessmentRun"> | string;
    combinedBookSnapshot?: Prisma.JsonWithAggregatesFilter<"WmRiskAssessmentRun">;
    preShockValueKobo?: Prisma.BigIntWithAggregatesFilter<"WmRiskAssessmentRun"> | bigint | number;
    postShockValueKobo?: Prisma.BigIntWithAggregatesFilter<"WmRiskAssessmentRun"> | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusWithAggregatesFilter<"WmRiskAssessmentRun"> | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.UuidWithAggregatesFilter<"WmRiskAssessmentRun"> | string;
    reviewedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"WmRiskAssessmentRun"> | string | null;
    publishedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmRiskAssessmentRun"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmRiskAssessmentRun"> | Date | string;
};
export type WmRiskAssessmentRunCreateInput = {
    id?: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutRiskAssessmentRunsInput;
    scenarioConfig: Prisma.WmStressScenarioConfigCreateNestedOneWithoutAssessmentRunsInput;
};
export type WmRiskAssessmentRunUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    scenarioConfigId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutRiskAssessmentRunsNestedInput;
    scenarioConfig?: Prisma.WmStressScenarioConfigUpdateOneRequiredWithoutAssessmentRunsNestedInput;
};
export type WmRiskAssessmentRunUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    scenarioConfigId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunListRelationFilter = {
    every?: Prisma.WmRiskAssessmentRunWhereInput;
    some?: Prisma.WmRiskAssessmentRunWhereInput;
    none?: Prisma.WmRiskAssessmentRunWhereInput;
};
export type WmRiskAssessmentRunOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    combinedBookSnapshot?: Prisma.SortOrder;
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    reviewedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunAvgOrderByAggregateInput = {
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    reviewedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    scenarioConfigId?: Prisma.SortOrder;
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    ranByUserId?: Prisma.SortOrder;
    reviewedByUserId?: Prisma.SortOrder;
    publishedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunSumOrderByAggregateInput = {
    preShockValueKobo?: Prisma.SortOrder;
    postShockValueKobo?: Prisma.SortOrder;
};
export type WmRiskAssessmentRunCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
};
export type WmRiskAssessmentRunUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
};
export type WmRiskAssessmentRunUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    delete?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    update?: Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
};
export type WmRiskAssessmentRunUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    delete?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    update?: Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
};
export type WmRiskAssessmentRunCreateNestedManyWithoutScenarioConfigInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput> | Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInputEnvelope;
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
};
export type WmRiskAssessmentRunUncheckedCreateNestedManyWithoutScenarioConfigInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput> | Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInputEnvelope;
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
};
export type WmRiskAssessmentRunUpdateManyWithoutScenarioConfigNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput> | Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput[];
    upsert?: Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutScenarioConfigInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInputEnvelope;
    set?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    delete?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    update?: Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutScenarioConfigInput[];
    updateMany?: Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutScenarioConfigInput[];
    deleteMany?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
};
export type WmRiskAssessmentRunUncheckedUpdateManyWithoutScenarioConfigNestedInput = {
    create?: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput> | Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput[] | Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput[];
    connectOrCreate?: Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput[];
    upsert?: Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpsertWithWhereUniqueWithoutScenarioConfigInput[];
    createMany?: Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInputEnvelope;
    set?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    disconnect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    delete?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    connect?: Prisma.WmRiskAssessmentRunWhereUniqueInput | Prisma.WmRiskAssessmentRunWhereUniqueInput[];
    update?: Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpdateWithWhereUniqueWithoutScenarioConfigInput[];
    updateMany?: Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutScenarioConfigInput | Prisma.WmRiskAssessmentRunUpdateManyWithWhereWithoutScenarioConfigInput[];
    deleteMany?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
};
export type EnumWmRiskAssessmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.WmRiskAssessmentStatus;
};
export type WmRiskAssessmentRunCreateWithoutWmClientProfileInput = {
    id?: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    scenarioConfig: Prisma.WmStressScenarioConfigCreateNestedOneWithoutAssessmentRunsInput;
};
export type WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    scenarioConfigId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmRiskAssessmentRunCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInput | Prisma.WmRiskAssessmentRunCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmRiskAssessmentRunUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmRiskAssessmentRunUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateWithoutWmClientProfileInput, Prisma.WmRiskAssessmentRunUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmRiskAssessmentRunUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmRiskAssessmentRunScalarWhereInput;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateManyMutationInput, Prisma.WmRiskAssessmentRunUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmRiskAssessmentRunScalarWhereInput = {
    AND?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
    OR?: Prisma.WmRiskAssessmentRunScalarWhereInput[];
    NOT?: Prisma.WmRiskAssessmentRunScalarWhereInput | Prisma.WmRiskAssessmentRunScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmRiskAssessmentRun"> | string;
    scenarioConfigId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    combinedBookSnapshot?: Prisma.JsonFilter<"WmRiskAssessmentRun">;
    preShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    postShockValueKobo?: Prisma.BigIntFilter<"WmRiskAssessmentRun"> | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFilter<"WmRiskAssessmentRun"> | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.UuidFilter<"WmRiskAssessmentRun"> | string;
    reviewedByUserId?: Prisma.UuidNullableFilter<"WmRiskAssessmentRun"> | string | null;
    publishedAt?: Prisma.DateTimeNullableFilter<"WmRiskAssessmentRun"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmRiskAssessmentRun"> | Date | string;
};
export type WmRiskAssessmentRunCreateWithoutScenarioConfigInput = {
    id?: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutRiskAssessmentRunsInput;
};
export type WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput = {
    id?: string;
    wmClientProfileId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunCreateOrConnectWithoutScenarioConfigInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput>;
};
export type WmRiskAssessmentRunCreateManyScenarioConfigInputEnvelope = {
    data: Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInput | Prisma.WmRiskAssessmentRunCreateManyScenarioConfigInput[];
    skipDuplicates?: boolean;
};
export type WmRiskAssessmentRunUpsertWithWhereUniqueWithoutScenarioConfigInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedUpdateWithoutScenarioConfigInput>;
    create: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedCreateWithoutScenarioConfigInput>;
};
export type WmRiskAssessmentRunUpdateWithWhereUniqueWithoutScenarioConfigInput = {
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateWithoutScenarioConfigInput, Prisma.WmRiskAssessmentRunUncheckedUpdateWithoutScenarioConfigInput>;
};
export type WmRiskAssessmentRunUpdateManyWithWhereWithoutScenarioConfigInput = {
    where: Prisma.WmRiskAssessmentRunScalarWhereInput;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateManyMutationInput, Prisma.WmRiskAssessmentRunUncheckedUpdateManyWithoutScenarioConfigInput>;
};
export type WmRiskAssessmentRunCreateManyWmClientProfileInput = {
    id?: string;
    scenarioConfigId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    scenarioConfig?: Prisma.WmStressScenarioConfigUpdateOneRequiredWithoutAssessmentRunsNestedInput;
};
export type WmRiskAssessmentRunUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    scenarioConfigId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunCreateManyScenarioConfigInput = {
    id?: string;
    wmClientProfileId: string;
    combinedBookSnapshot: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo: bigint | number;
    postShockValueKobo: bigint | number;
    status?: $Enums.WmRiskAssessmentStatus;
    ranByUserId: string;
    reviewedByUserId?: string | null;
    publishedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmRiskAssessmentRunUpdateWithoutScenarioConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutRiskAssessmentRunsNestedInput;
};
export type WmRiskAssessmentRunUncheckedUpdateWithoutScenarioConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunUncheckedUpdateManyWithoutScenarioConfigInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    combinedBookSnapshot?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    preShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    postShockValueKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    status?: Prisma.EnumWmRiskAssessmentStatusFieldUpdateOperationsInput | $Enums.WmRiskAssessmentStatus;
    ranByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    reviewedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    publishedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmRiskAssessmentRunSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    scenarioConfigId?: boolean;
    combinedBookSnapshot?: boolean;
    preShockValueKobo?: boolean;
    postShockValueKobo?: boolean;
    status?: boolean;
    ranByUserId?: boolean;
    reviewedByUserId?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskAssessmentRun"]>;
export type WmRiskAssessmentRunSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    scenarioConfigId?: boolean;
    combinedBookSnapshot?: boolean;
    preShockValueKobo?: boolean;
    postShockValueKobo?: boolean;
    status?: boolean;
    ranByUserId?: boolean;
    reviewedByUserId?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskAssessmentRun"]>;
export type WmRiskAssessmentRunSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    scenarioConfigId?: boolean;
    combinedBookSnapshot?: boolean;
    preShockValueKobo?: boolean;
    postShockValueKobo?: boolean;
    status?: boolean;
    ranByUserId?: boolean;
    reviewedByUserId?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmRiskAssessmentRun"]>;
export type WmRiskAssessmentRunSelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    scenarioConfigId?: boolean;
    combinedBookSnapshot?: boolean;
    preShockValueKobo?: boolean;
    postShockValueKobo?: boolean;
    status?: boolean;
    ranByUserId?: boolean;
    reviewedByUserId?: boolean;
    publishedAt?: boolean;
    createdAt?: boolean;
};
export type WmRiskAssessmentRunOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "scenarioConfigId" | "combinedBookSnapshot" | "preShockValueKobo" | "postShockValueKobo" | "status" | "ranByUserId" | "reviewedByUserId" | "publishedAt" | "createdAt", ExtArgs["result"]["wmRiskAssessmentRun"]>;
export type WmRiskAssessmentRunInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
};
export type WmRiskAssessmentRunIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
};
export type WmRiskAssessmentRunIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
    scenarioConfig?: boolean | Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>;
};
export type $WmRiskAssessmentRunPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmRiskAssessmentRun";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
        scenarioConfig: Prisma.$WmStressScenarioConfigPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        scenarioConfigId: string;
        combinedBookSnapshot: runtime.JsonValue;
        preShockValueKobo: bigint;
        postShockValueKobo: bigint;
        status: $Enums.WmRiskAssessmentStatus;
        ranByUserId: string;
        reviewedByUserId: string | null;
        publishedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["wmRiskAssessmentRun"]>;
    composites: {};
};
export type WmRiskAssessmentRunGetPayload<S extends boolean | null | undefined | WmRiskAssessmentRunDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload, S>;
export type WmRiskAssessmentRunCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmRiskAssessmentRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmRiskAssessmentRunCountAggregateInputType | true;
};
export interface WmRiskAssessmentRunDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmRiskAssessmentRun'];
        meta: {
            name: 'WmRiskAssessmentRun';
        };
    };
    findUnique<T extends WmRiskAssessmentRunFindUniqueArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmRiskAssessmentRunFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmRiskAssessmentRunFindFirstArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmRiskAssessmentRunFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmRiskAssessmentRunFindManyArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmRiskAssessmentRunCreateArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunCreateArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmRiskAssessmentRunCreateManyArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmRiskAssessmentRunCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmRiskAssessmentRunDeleteArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunDeleteArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmRiskAssessmentRunUpdateArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunUpdateArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmRiskAssessmentRunDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmRiskAssessmentRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmRiskAssessmentRunUpdateManyArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmRiskAssessmentRunUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmRiskAssessmentRunUpsertArgs>(args: Prisma.SelectSubset<T, WmRiskAssessmentRunUpsertArgs<ExtArgs>>): Prisma.Prisma__WmRiskAssessmentRunClient<runtime.Types.Result.GetResult<Prisma.$WmRiskAssessmentRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmRiskAssessmentRunCountArgs>(args?: Prisma.Subset<T, WmRiskAssessmentRunCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmRiskAssessmentRunCountAggregateOutputType> : number>;
    aggregate<T extends WmRiskAssessmentRunAggregateArgs>(args: Prisma.Subset<T, WmRiskAssessmentRunAggregateArgs>): Prisma.PrismaPromise<GetWmRiskAssessmentRunAggregateType<T>>;
    groupBy<T extends WmRiskAssessmentRunGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmRiskAssessmentRunGroupByArgs['orderBy'];
    } : {
        orderBy?: WmRiskAssessmentRunGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmRiskAssessmentRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmRiskAssessmentRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmRiskAssessmentRunFieldRefs;
}
export interface Prisma__WmRiskAssessmentRunClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    scenarioConfig<T extends Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmStressScenarioConfigDefaultArgs<ExtArgs>>): Prisma.Prisma__WmStressScenarioConfigClient<runtime.Types.Result.GetResult<Prisma.$WmStressScenarioConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmRiskAssessmentRunFieldRefs {
    readonly id: Prisma.FieldRef<"WmRiskAssessmentRun", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmRiskAssessmentRun", 'String'>;
    readonly scenarioConfigId: Prisma.FieldRef<"WmRiskAssessmentRun", 'String'>;
    readonly combinedBookSnapshot: Prisma.FieldRef<"WmRiskAssessmentRun", 'Json'>;
    readonly preShockValueKobo: Prisma.FieldRef<"WmRiskAssessmentRun", 'BigInt'>;
    readonly postShockValueKobo: Prisma.FieldRef<"WmRiskAssessmentRun", 'BigInt'>;
    readonly status: Prisma.FieldRef<"WmRiskAssessmentRun", 'WmRiskAssessmentStatus'>;
    readonly ranByUserId: Prisma.FieldRef<"WmRiskAssessmentRun", 'String'>;
    readonly reviewedByUserId: Prisma.FieldRef<"WmRiskAssessmentRun", 'String'>;
    readonly publishedAt: Prisma.FieldRef<"WmRiskAssessmentRun", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WmRiskAssessmentRun", 'DateTime'>;
}
export type WmRiskAssessmentRunFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
};
export type WmRiskAssessmentRunFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
};
export type WmRiskAssessmentRunFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithRelationInput | Prisma.WmRiskAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskAssessmentRunScalarFieldEnum | Prisma.WmRiskAssessmentRunScalarFieldEnum[];
};
export type WmRiskAssessmentRunFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithRelationInput | Prisma.WmRiskAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskAssessmentRunScalarFieldEnum | Prisma.WmRiskAssessmentRunScalarFieldEnum[];
};
export type WmRiskAssessmentRunFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    orderBy?: Prisma.WmRiskAssessmentRunOrderByWithRelationInput | Prisma.WmRiskAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmRiskAssessmentRunScalarFieldEnum | Prisma.WmRiskAssessmentRunScalarFieldEnum[];
};
export type WmRiskAssessmentRunCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateInput, Prisma.WmRiskAssessmentRunUncheckedCreateInput>;
};
export type WmRiskAssessmentRunCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmRiskAssessmentRunCreateManyInput | Prisma.WmRiskAssessmentRunCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmRiskAssessmentRunCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    data: Prisma.WmRiskAssessmentRunCreateManyInput | Prisma.WmRiskAssessmentRunCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmRiskAssessmentRunIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmRiskAssessmentRunUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateInput, Prisma.WmRiskAssessmentRunUncheckedUpdateInput>;
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
};
export type WmRiskAssessmentRunUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateManyMutationInput, Prisma.WmRiskAssessmentRunUncheckedUpdateManyInput>;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    limit?: number;
};
export type WmRiskAssessmentRunUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateManyMutationInput, Prisma.WmRiskAssessmentRunUncheckedUpdateManyInput>;
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    limit?: number;
    include?: Prisma.WmRiskAssessmentRunIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmRiskAssessmentRunUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmRiskAssessmentRunCreateInput, Prisma.WmRiskAssessmentRunUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmRiskAssessmentRunUpdateInput, Prisma.WmRiskAssessmentRunUncheckedUpdateInput>;
};
export type WmRiskAssessmentRunDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
    where: Prisma.WmRiskAssessmentRunWhereUniqueInput;
};
export type WmRiskAssessmentRunDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmRiskAssessmentRunWhereInput;
    limit?: number;
};
export type WmRiskAssessmentRunDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmRiskAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.WmRiskAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.WmRiskAssessmentRunInclude<ExtArgs> | null;
};
