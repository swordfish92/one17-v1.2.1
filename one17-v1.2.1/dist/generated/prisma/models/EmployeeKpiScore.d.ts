import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeeKpiScoreModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployeeKpiScorePayload>;
export type AggregateEmployeeKpiScore = {
    _count: EmployeeKpiScoreCountAggregateOutputType | null;
    _avg: EmployeeKpiScoreAvgAggregateOutputType | null;
    _sum: EmployeeKpiScoreSumAggregateOutputType | null;
    _min: EmployeeKpiScoreMinAggregateOutputType | null;
    _max: EmployeeKpiScoreMaxAggregateOutputType | null;
};
export type EmployeeKpiScoreAvgAggregateOutputType = {
    selfScorePct: runtime.Decimal | null;
    validatedScorePct: runtime.Decimal | null;
};
export type EmployeeKpiScoreSumAggregateOutputType = {
    selfScorePct: runtime.Decimal | null;
    validatedScorePct: runtime.Decimal | null;
};
export type EmployeeKpiScoreMinAggregateOutputType = {
    id: string | null;
    employeeScoreSubmissionId: string | null;
    kpiDefinitionId: string | null;
    selfScorePct: runtime.Decimal | null;
    validatedScorePct: runtime.Decimal | null;
    evidenceRef: string | null;
    createdAt: Date | null;
};
export type EmployeeKpiScoreMaxAggregateOutputType = {
    id: string | null;
    employeeScoreSubmissionId: string | null;
    kpiDefinitionId: string | null;
    selfScorePct: runtime.Decimal | null;
    validatedScorePct: runtime.Decimal | null;
    evidenceRef: string | null;
    createdAt: Date | null;
};
export type EmployeeKpiScoreCountAggregateOutputType = {
    id: number;
    employeeScoreSubmissionId: number;
    kpiDefinitionId: number;
    selfScorePct: number;
    validatedScorePct: number;
    evidenceRef: number;
    createdAt: number;
    _all: number;
};
export type EmployeeKpiScoreAvgAggregateInputType = {
    selfScorePct?: true;
    validatedScorePct?: true;
};
export type EmployeeKpiScoreSumAggregateInputType = {
    selfScorePct?: true;
    validatedScorePct?: true;
};
export type EmployeeKpiScoreMinAggregateInputType = {
    id?: true;
    employeeScoreSubmissionId?: true;
    kpiDefinitionId?: true;
    selfScorePct?: true;
    validatedScorePct?: true;
    evidenceRef?: true;
    createdAt?: true;
};
export type EmployeeKpiScoreMaxAggregateInputType = {
    id?: true;
    employeeScoreSubmissionId?: true;
    kpiDefinitionId?: true;
    selfScorePct?: true;
    validatedScorePct?: true;
    evidenceRef?: true;
    createdAt?: true;
};
export type EmployeeKpiScoreCountAggregateInputType = {
    id?: true;
    employeeScoreSubmissionId?: true;
    kpiDefinitionId?: true;
    selfScorePct?: true;
    validatedScorePct?: true;
    evidenceRef?: true;
    createdAt?: true;
    _all?: true;
};
export type EmployeeKpiScoreAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithRelationInput | Prisma.EmployeeKpiScoreOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeKpiScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeeKpiScoreCountAggregateInputType;
    _avg?: EmployeeKpiScoreAvgAggregateInputType;
    _sum?: EmployeeKpiScoreSumAggregateInputType;
    _min?: EmployeeKpiScoreMinAggregateInputType;
    _max?: EmployeeKpiScoreMaxAggregateInputType;
};
export type GetEmployeeKpiScoreAggregateType<T extends EmployeeKpiScoreAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployeeKpiScore]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmployeeKpiScore[P]> : Prisma.GetScalarType<T[P], AggregateEmployeeKpiScore[P]>;
};
export type EmployeeKpiScoreGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithAggregationInput | Prisma.EmployeeKpiScoreOrderByWithAggregationInput[];
    by: Prisma.EmployeeKpiScoreScalarFieldEnum[] | Prisma.EmployeeKpiScoreScalarFieldEnum;
    having?: Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeKpiScoreCountAggregateInputType | true;
    _avg?: EmployeeKpiScoreAvgAggregateInputType;
    _sum?: EmployeeKpiScoreSumAggregateInputType;
    _min?: EmployeeKpiScoreMinAggregateInputType;
    _max?: EmployeeKpiScoreMaxAggregateInputType;
};
export type EmployeeKpiScoreGroupByOutputType = {
    id: string;
    employeeScoreSubmissionId: string;
    kpiDefinitionId: string;
    selfScorePct: runtime.Decimal;
    validatedScorePct: runtime.Decimal | null;
    evidenceRef: string | null;
    createdAt: Date;
    _count: EmployeeKpiScoreCountAggregateOutputType | null;
    _avg: EmployeeKpiScoreAvgAggregateOutputType | null;
    _sum: EmployeeKpiScoreSumAggregateOutputType | null;
    _min: EmployeeKpiScoreMinAggregateOutputType | null;
    _max: EmployeeKpiScoreMaxAggregateOutputType | null;
};
export type GetEmployeeKpiScoreGroupByPayload<T extends EmployeeKpiScoreGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeeKpiScoreGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeeKpiScoreGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeeKpiScoreGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeeKpiScoreGroupByOutputType[P]>;
}>>;
export type EmployeeKpiScoreWhereInput = {
    AND?: Prisma.EmployeeKpiScoreWhereInput | Prisma.EmployeeKpiScoreWhereInput[];
    OR?: Prisma.EmployeeKpiScoreWhereInput[];
    NOT?: Prisma.EmployeeKpiScoreWhereInput | Prisma.EmployeeKpiScoreWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    employeeScoreSubmissionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    selfScorePct?: Prisma.DecimalFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.DecimalNullableFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"EmployeeKpiScore"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeKpiScore"> | Date | string;
    submission?: Prisma.XOR<Prisma.EmployeeScoreSubmissionScalarRelationFilter, Prisma.EmployeeScoreSubmissionWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
};
export type EmployeeKpiScoreOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    employeeScoreSubmissionId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    submission?: Prisma.EmployeeScoreSubmissionOrderByWithRelationInput;
    kpiDefinition?: Prisma.KpiDefinitionOrderByWithRelationInput;
};
export type EmployeeKpiScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    employeeScoreSubmissionId_kpiDefinitionId?: Prisma.EmployeeKpiScoreEmployeeScoreSubmissionIdKpiDefinitionIdCompoundUniqueInput;
    AND?: Prisma.EmployeeKpiScoreWhereInput | Prisma.EmployeeKpiScoreWhereInput[];
    OR?: Prisma.EmployeeKpiScoreWhereInput[];
    NOT?: Prisma.EmployeeKpiScoreWhereInput | Prisma.EmployeeKpiScoreWhereInput[];
    employeeScoreSubmissionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    selfScorePct?: Prisma.DecimalFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.DecimalNullableFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"EmployeeKpiScore"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeKpiScore"> | Date | string;
    submission?: Prisma.XOR<Prisma.EmployeeScoreSubmissionScalarRelationFilter, Prisma.EmployeeScoreSubmissionWhereInput>;
    kpiDefinition?: Prisma.XOR<Prisma.KpiDefinitionScalarRelationFilter, Prisma.KpiDefinitionWhereInput>;
}, "id" | "employeeScoreSubmissionId_kpiDefinitionId">;
export type EmployeeKpiScoreOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    employeeScoreSubmissionId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrderInput | Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.EmployeeKpiScoreCountOrderByAggregateInput;
    _avg?: Prisma.EmployeeKpiScoreAvgOrderByAggregateInput;
    _max?: Prisma.EmployeeKpiScoreMaxOrderByAggregateInput;
    _min?: Prisma.EmployeeKpiScoreMinOrderByAggregateInput;
    _sum?: Prisma.EmployeeKpiScoreSumOrderByAggregateInput;
};
export type EmployeeKpiScoreScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput | Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput | Prisma.EmployeeKpiScoreScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"EmployeeKpiScore"> | string;
    employeeScoreSubmissionId?: Prisma.UuidWithAggregatesFilter<"EmployeeKpiScore"> | string;
    kpiDefinitionId?: Prisma.UuidWithAggregatesFilter<"EmployeeKpiScore"> | string;
    selfScorePct?: Prisma.DecimalWithAggregatesFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.DecimalNullableWithAggregatesFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.StringNullableWithAggregatesFilter<"EmployeeKpiScore"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmployeeKpiScore"> | Date | string;
};
export type EmployeeKpiScoreCreateInput = {
    id?: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
    submission: Prisma.EmployeeScoreSubmissionCreateNestedOneWithoutKpiScoresInput;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutKpiScoresInput;
};
export type EmployeeKpiScoreUncheckedCreateInput = {
    id?: string;
    employeeScoreSubmissionId: string;
    kpiDefinitionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: Prisma.EmployeeScoreSubmissionUpdateOneRequiredWithoutKpiScoresNestedInput;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutKpiScoresNestedInput;
};
export type EmployeeKpiScoreUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeScoreSubmissionId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreCreateManyInput = {
    id?: string;
    employeeScoreSubmissionId: string;
    kpiDefinitionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeScoreSubmissionId?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreListRelationFilter = {
    every?: Prisma.EmployeeKpiScoreWhereInput;
    some?: Prisma.EmployeeKpiScoreWhereInput;
    none?: Prisma.EmployeeKpiScoreWhereInput;
};
export type EmployeeKpiScoreOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmployeeKpiScoreEmployeeScoreSubmissionIdKpiDefinitionIdCompoundUniqueInput = {
    employeeScoreSubmissionId: string;
    kpiDefinitionId: string;
};
export type EmployeeKpiScoreCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeScoreSubmissionId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeKpiScoreAvgOrderByAggregateInput = {
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrder;
};
export type EmployeeKpiScoreMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeScoreSubmissionId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeKpiScoreMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    employeeScoreSubmissionId?: Prisma.SortOrder;
    kpiDefinitionId?: Prisma.SortOrder;
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrder;
    evidenceRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type EmployeeKpiScoreSumOrderByAggregateInput = {
    selfScorePct?: Prisma.SortOrder;
    validatedScorePct?: Prisma.SortOrder;
};
export type EmployeeKpiScoreCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput> | Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
};
export type EmployeeKpiScoreUncheckedCreateNestedManyWithoutKpiDefinitionInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput> | Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInputEnvelope;
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
};
export type EmployeeKpiScoreUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput> | Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    disconnect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    delete?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    update?: Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
};
export type EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput> | Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput[];
    upsert?: Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutKpiDefinitionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInputEnvelope;
    set?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    disconnect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    delete?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    update?: Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutKpiDefinitionInput[];
    updateMany?: Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutKpiDefinitionInput | Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutKpiDefinitionInput[];
    deleteMany?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
};
export type EmployeeKpiScoreCreateNestedManyWithoutSubmissionInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput> | Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManySubmissionInputEnvelope;
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
};
export type EmployeeKpiScoreUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput> | Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManySubmissionInputEnvelope;
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
};
export type EmployeeKpiScoreUpdateManyWithoutSubmissionNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput> | Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput[];
    upsert?: Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutSubmissionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManySubmissionInputEnvelope;
    set?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    disconnect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    delete?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    update?: Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutSubmissionInput[];
    updateMany?: Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutSubmissionInput[];
    deleteMany?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
};
export type EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput> | Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput[] | Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput[];
    connectOrCreate?: Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput | Prisma.EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput[];
    upsert?: Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpsertWithWhereUniqueWithoutSubmissionInput[];
    createMany?: Prisma.EmployeeKpiScoreCreateManySubmissionInputEnvelope;
    set?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    disconnect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    delete?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    connect?: Prisma.EmployeeKpiScoreWhereUniqueInput | Prisma.EmployeeKpiScoreWhereUniqueInput[];
    update?: Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpdateWithWhereUniqueWithoutSubmissionInput[];
    updateMany?: Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutSubmissionInput | Prisma.EmployeeKpiScoreUpdateManyWithWhereWithoutSubmissionInput[];
    deleteMany?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
};
export type EmployeeKpiScoreCreateWithoutKpiDefinitionInput = {
    id?: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
    submission: Prisma.EmployeeScoreSubmissionCreateNestedOneWithoutKpiScoresInput;
};
export type EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput = {
    id?: string;
    employeeScoreSubmissionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreCreateOrConnectWithoutKpiDefinitionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput>;
};
export type EmployeeKpiScoreCreateManyKpiDefinitionInputEnvelope = {
    data: Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInput | Prisma.EmployeeKpiScoreCreateManyKpiDefinitionInput[];
    skipDuplicates?: boolean;
};
export type EmployeeKpiScoreUpsertWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedUpdateWithoutKpiDefinitionInput>;
    create: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutKpiDefinitionInput>;
};
export type EmployeeKpiScoreUpdateWithWhereUniqueWithoutKpiDefinitionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateWithoutKpiDefinitionInput, Prisma.EmployeeKpiScoreUncheckedUpdateWithoutKpiDefinitionInput>;
};
export type EmployeeKpiScoreUpdateManyWithWhereWithoutKpiDefinitionInput = {
    where: Prisma.EmployeeKpiScoreScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateManyMutationInput, Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionInput>;
};
export type EmployeeKpiScoreScalarWhereInput = {
    AND?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
    OR?: Prisma.EmployeeKpiScoreScalarWhereInput[];
    NOT?: Prisma.EmployeeKpiScoreScalarWhereInput | Prisma.EmployeeKpiScoreScalarWhereInput[];
    id?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    employeeScoreSubmissionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    kpiDefinitionId?: Prisma.UuidFilter<"EmployeeKpiScore"> | string;
    selfScorePct?: Prisma.DecimalFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.DecimalNullableFilter<"EmployeeKpiScore"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.StringNullableFilter<"EmployeeKpiScore"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmployeeKpiScore"> | Date | string;
};
export type EmployeeKpiScoreCreateWithoutSubmissionInput = {
    id?: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
    kpiDefinition: Prisma.KpiDefinitionCreateNestedOneWithoutKpiScoresInput;
};
export type EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput = {
    id?: string;
    kpiDefinitionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreCreateOrConnectWithoutSubmissionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput>;
};
export type EmployeeKpiScoreCreateManySubmissionInputEnvelope = {
    data: Prisma.EmployeeKpiScoreCreateManySubmissionInput | Prisma.EmployeeKpiScoreCreateManySubmissionInput[];
    skipDuplicates?: boolean;
};
export type EmployeeKpiScoreUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedUpdateWithoutSubmissionInput>;
    create: Prisma.XOR<Prisma.EmployeeKpiScoreCreateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedCreateWithoutSubmissionInput>;
};
export type EmployeeKpiScoreUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateWithoutSubmissionInput, Prisma.EmployeeKpiScoreUncheckedUpdateWithoutSubmissionInput>;
};
export type EmployeeKpiScoreUpdateManyWithWhereWithoutSubmissionInput = {
    where: Prisma.EmployeeKpiScoreScalarWhereInput;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateManyMutationInput, Prisma.EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionInput>;
};
export type EmployeeKpiScoreCreateManyKpiDefinitionInput = {
    id?: string;
    employeeScoreSubmissionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    submission?: Prisma.EmployeeScoreSubmissionUpdateOneRequiredWithoutKpiScoresNestedInput;
};
export type EmployeeKpiScoreUncheckedUpdateWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeScoreSubmissionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreUncheckedUpdateManyWithoutKpiDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    employeeScoreSubmissionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreCreateManySubmissionInput = {
    id?: string;
    kpiDefinitionId: string;
    selfScorePct: runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: string | null;
    createdAt?: Date | string;
};
export type EmployeeKpiScoreUpdateWithoutSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    kpiDefinition?: Prisma.KpiDefinitionUpdateOneRequiredWithoutKpiScoresNestedInput;
};
export type EmployeeKpiScoreUncheckedUpdateWithoutSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreUncheckedUpdateManyWithoutSubmissionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kpiDefinitionId?: Prisma.StringFieldUpdateOperationsInput | string;
    selfScorePct?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    validatedScorePct?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    evidenceRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmployeeKpiScoreSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeScoreSubmissionId?: boolean;
    kpiDefinitionId?: boolean;
    selfScorePct?: boolean;
    validatedScorePct?: boolean;
    evidenceRef?: boolean;
    createdAt?: boolean;
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeKpiScore"]>;
export type EmployeeKpiScoreSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeScoreSubmissionId?: boolean;
    kpiDefinitionId?: boolean;
    selfScorePct?: boolean;
    validatedScorePct?: boolean;
    evidenceRef?: boolean;
    createdAt?: boolean;
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeKpiScore"]>;
export type EmployeeKpiScoreSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    employeeScoreSubmissionId?: boolean;
    kpiDefinitionId?: boolean;
    selfScorePct?: boolean;
    validatedScorePct?: boolean;
    evidenceRef?: boolean;
    createdAt?: boolean;
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employeeKpiScore"]>;
export type EmployeeKpiScoreSelectScalar = {
    id?: boolean;
    employeeScoreSubmissionId?: boolean;
    kpiDefinitionId?: boolean;
    selfScorePct?: boolean;
    validatedScorePct?: boolean;
    evidenceRef?: boolean;
    createdAt?: boolean;
};
export type EmployeeKpiScoreOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "employeeScoreSubmissionId" | "kpiDefinitionId" | "selfScorePct" | "validatedScorePct" | "evidenceRef" | "createdAt", ExtArgs["result"]["employeeKpiScore"]>;
export type EmployeeKpiScoreInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type EmployeeKpiScoreIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type EmployeeKpiScoreIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    submission?: boolean | Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>;
    kpiDefinition?: boolean | Prisma.KpiDefinitionDefaultArgs<ExtArgs>;
};
export type $EmployeeKpiScorePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmployeeKpiScore";
    objects: {
        submission: Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>;
        kpiDefinition: Prisma.$KpiDefinitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        employeeScoreSubmissionId: string;
        kpiDefinitionId: string;
        selfScorePct: runtime.Decimal;
        validatedScorePct: runtime.Decimal | null;
        evidenceRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["employeeKpiScore"]>;
    composites: {};
};
export type EmployeeKpiScoreGetPayload<S extends boolean | null | undefined | EmployeeKpiScoreDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload, S>;
export type EmployeeKpiScoreCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeeKpiScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeeKpiScoreCountAggregateInputType | true;
};
export interface EmployeeKpiScoreDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmployeeKpiScore'];
        meta: {
            name: 'EmployeeKpiScore';
        };
    };
    findUnique<T extends EmployeeKpiScoreFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeeKpiScoreFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeeKpiScoreFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeeKpiScoreFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeeKpiScoreFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeeKpiScoreCreateArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeeKpiScoreCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeeKpiScoreCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeeKpiScoreDeleteArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeeKpiScoreUpdateArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeeKpiScoreDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeeKpiScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeeKpiScoreUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeeKpiScoreUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeeKpiScoreUpsertArgs>(args: Prisma.SelectSubset<T, EmployeeKpiScoreUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeeKpiScoreClient<runtime.Types.Result.GetResult<Prisma.$EmployeeKpiScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeeKpiScoreCountArgs>(args?: Prisma.Subset<T, EmployeeKpiScoreCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeeKpiScoreCountAggregateOutputType> : number>;
    aggregate<T extends EmployeeKpiScoreAggregateArgs>(args: Prisma.Subset<T, EmployeeKpiScoreAggregateArgs>): Prisma.PrismaPromise<GetEmployeeKpiScoreAggregateType<T>>;
    groupBy<T extends EmployeeKpiScoreGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeeKpiScoreGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeeKpiScoreGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeeKpiScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeKpiScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeeKpiScoreFieldRefs;
}
export interface Prisma__EmployeeKpiScoreClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    submission<T extends Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeeScoreSubmissionDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeeScoreSubmissionClient<runtime.Types.Result.GetResult<Prisma.$EmployeeScoreSubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    kpiDefinition<T extends Prisma.KpiDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KpiDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__KpiDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KpiDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeeKpiScoreFieldRefs {
    readonly id: Prisma.FieldRef<"EmployeeKpiScore", 'String'>;
    readonly employeeScoreSubmissionId: Prisma.FieldRef<"EmployeeKpiScore", 'String'>;
    readonly kpiDefinitionId: Prisma.FieldRef<"EmployeeKpiScore", 'String'>;
    readonly selfScorePct: Prisma.FieldRef<"EmployeeKpiScore", 'Decimal'>;
    readonly validatedScorePct: Prisma.FieldRef<"EmployeeKpiScore", 'Decimal'>;
    readonly evidenceRef: Prisma.FieldRef<"EmployeeKpiScore", 'String'>;
    readonly createdAt: Prisma.FieldRef<"EmployeeKpiScore", 'DateTime'>;
}
export type EmployeeKpiScoreFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
};
export type EmployeeKpiScoreFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
};
export type EmployeeKpiScoreFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithRelationInput | Prisma.EmployeeKpiScoreOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeKpiScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeKpiScoreScalarFieldEnum | Prisma.EmployeeKpiScoreScalarFieldEnum[];
};
export type EmployeeKpiScoreFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithRelationInput | Prisma.EmployeeKpiScoreOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeKpiScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeKpiScoreScalarFieldEnum | Prisma.EmployeeKpiScoreScalarFieldEnum[];
};
export type EmployeeKpiScoreFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    orderBy?: Prisma.EmployeeKpiScoreOrderByWithRelationInput | Prisma.EmployeeKpiScoreOrderByWithRelationInput[];
    cursor?: Prisma.EmployeeKpiScoreWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeeKpiScoreScalarFieldEnum | Prisma.EmployeeKpiScoreScalarFieldEnum[];
};
export type EmployeeKpiScoreCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreCreateInput, Prisma.EmployeeKpiScoreUncheckedCreateInput>;
};
export type EmployeeKpiScoreCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeeKpiScoreCreateManyInput | Prisma.EmployeeKpiScoreCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeeKpiScoreCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    data: Prisma.EmployeeKpiScoreCreateManyInput | Prisma.EmployeeKpiScoreCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EmployeeKpiScoreIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EmployeeKpiScoreUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateInput, Prisma.EmployeeKpiScoreUncheckedUpdateInput>;
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
};
export type EmployeeKpiScoreUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateManyMutationInput, Prisma.EmployeeKpiScoreUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    limit?: number;
};
export type EmployeeKpiScoreUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateManyMutationInput, Prisma.EmployeeKpiScoreUncheckedUpdateManyInput>;
    where?: Prisma.EmployeeKpiScoreWhereInput;
    limit?: number;
    include?: Prisma.EmployeeKpiScoreIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EmployeeKpiScoreUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeeKpiScoreCreateInput, Prisma.EmployeeKpiScoreUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeeKpiScoreUpdateInput, Prisma.EmployeeKpiScoreUncheckedUpdateInput>;
};
export type EmployeeKpiScoreDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
    where: Prisma.EmployeeKpiScoreWhereUniqueInput;
};
export type EmployeeKpiScoreDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeeKpiScoreWhereInput;
    limit?: number;
};
export type EmployeeKpiScoreDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeeKpiScoreSelect<ExtArgs> | null;
    omit?: Prisma.EmployeeKpiScoreOmit<ExtArgs> | null;
    include?: Prisma.EmployeeKpiScoreInclude<ExtArgs> | null;
};
