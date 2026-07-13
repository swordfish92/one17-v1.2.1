import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type StampDutyAssessmentModel = runtime.Types.Result.DefaultSelection<Prisma.$StampDutyAssessmentPayload>;
export type AggregateStampDutyAssessment = {
    _count: StampDutyAssessmentCountAggregateOutputType | null;
    _avg: StampDutyAssessmentAvgAggregateOutputType | null;
    _sum: StampDutyAssessmentSumAggregateOutputType | null;
    _min: StampDutyAssessmentMinAggregateOutputType | null;
    _max: StampDutyAssessmentMaxAggregateOutputType | null;
};
export type StampDutyAssessmentAvgAggregateOutputType = {
    dutyKobo: number | null;
};
export type StampDutyAssessmentSumAggregateOutputType = {
    dutyKobo: bigint | null;
};
export type StampDutyAssessmentMinAggregateOutputType = {
    id: string | null;
    instrumentType: string | null;
    entityType: string | null;
    entityId: string | null;
    dutyKobo: bigint | null;
    taxRateVersionId: string | null;
    assessedByUserId: string | null;
    assessedAt: Date | null;
};
export type StampDutyAssessmentMaxAggregateOutputType = {
    id: string | null;
    instrumentType: string | null;
    entityType: string | null;
    entityId: string | null;
    dutyKobo: bigint | null;
    taxRateVersionId: string | null;
    assessedByUserId: string | null;
    assessedAt: Date | null;
};
export type StampDutyAssessmentCountAggregateOutputType = {
    id: number;
    instrumentType: number;
    entityType: number;
    entityId: number;
    dutyKobo: number;
    taxRateVersionId: number;
    assessedByUserId: number;
    assessedAt: number;
    _all: number;
};
export type StampDutyAssessmentAvgAggregateInputType = {
    dutyKobo?: true;
};
export type StampDutyAssessmentSumAggregateInputType = {
    dutyKobo?: true;
};
export type StampDutyAssessmentMinAggregateInputType = {
    id?: true;
    instrumentType?: true;
    entityType?: true;
    entityId?: true;
    dutyKobo?: true;
    taxRateVersionId?: true;
    assessedByUserId?: true;
    assessedAt?: true;
};
export type StampDutyAssessmentMaxAggregateInputType = {
    id?: true;
    instrumentType?: true;
    entityType?: true;
    entityId?: true;
    dutyKobo?: true;
    taxRateVersionId?: true;
    assessedByUserId?: true;
    assessedAt?: true;
};
export type StampDutyAssessmentCountAggregateInputType = {
    id?: true;
    instrumentType?: true;
    entityType?: true;
    entityId?: true;
    dutyKobo?: true;
    taxRateVersionId?: true;
    assessedByUserId?: true;
    assessedAt?: true;
    _all?: true;
};
export type StampDutyAssessmentAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithRelationInput | Prisma.StampDutyAssessmentOrderByWithRelationInput[];
    cursor?: Prisma.StampDutyAssessmentWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StampDutyAssessmentCountAggregateInputType;
    _avg?: StampDutyAssessmentAvgAggregateInputType;
    _sum?: StampDutyAssessmentSumAggregateInputType;
    _min?: StampDutyAssessmentMinAggregateInputType;
    _max?: StampDutyAssessmentMaxAggregateInputType;
};
export type GetStampDutyAssessmentAggregateType<T extends StampDutyAssessmentAggregateArgs> = {
    [P in keyof T & keyof AggregateStampDutyAssessment]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStampDutyAssessment[P]> : Prisma.GetScalarType<T[P], AggregateStampDutyAssessment[P]>;
};
export type StampDutyAssessmentGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithAggregationInput | Prisma.StampDutyAssessmentOrderByWithAggregationInput[];
    by: Prisma.StampDutyAssessmentScalarFieldEnum[] | Prisma.StampDutyAssessmentScalarFieldEnum;
    having?: Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StampDutyAssessmentCountAggregateInputType | true;
    _avg?: StampDutyAssessmentAvgAggregateInputType;
    _sum?: StampDutyAssessmentSumAggregateInputType;
    _min?: StampDutyAssessmentMinAggregateInputType;
    _max?: StampDutyAssessmentMaxAggregateInputType;
};
export type StampDutyAssessmentGroupByOutputType = {
    id: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint;
    taxRateVersionId: string;
    assessedByUserId: string;
    assessedAt: Date;
    _count: StampDutyAssessmentCountAggregateOutputType | null;
    _avg: StampDutyAssessmentAvgAggregateOutputType | null;
    _sum: StampDutyAssessmentSumAggregateOutputType | null;
    _min: StampDutyAssessmentMinAggregateOutputType | null;
    _max: StampDutyAssessmentMaxAggregateOutputType | null;
};
export type GetStampDutyAssessmentGroupByPayload<T extends StampDutyAssessmentGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StampDutyAssessmentGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StampDutyAssessmentGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StampDutyAssessmentGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StampDutyAssessmentGroupByOutputType[P]>;
}>>;
export type StampDutyAssessmentWhereInput = {
    AND?: Prisma.StampDutyAssessmentWhereInput | Prisma.StampDutyAssessmentWhereInput[];
    OR?: Prisma.StampDutyAssessmentWhereInput[];
    NOT?: Prisma.StampDutyAssessmentWhereInput | Prisma.StampDutyAssessmentWhereInput[];
    id?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    instrumentType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityId?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    dutyKobo?: Prisma.BigIntFilter<"StampDutyAssessment"> | bigint | number;
    taxRateVersionId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedByUserId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedAt?: Prisma.DateTimeFilter<"StampDutyAssessment"> | Date | string;
    taxRateVersion?: Prisma.XOR<Prisma.TaxRateVersionScalarRelationFilter, Prisma.TaxRateVersionWhereInput>;
    assessedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
};
export type StampDutyAssessmentOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    instrumentType?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    dutyKobo?: Prisma.SortOrder;
    taxRateVersionId?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    assessedAt?: Prisma.SortOrder;
    taxRateVersion?: Prisma.TaxRateVersionOrderByWithRelationInput;
    assessedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type StampDutyAssessmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StampDutyAssessmentWhereInput | Prisma.StampDutyAssessmentWhereInput[];
    OR?: Prisma.StampDutyAssessmentWhereInput[];
    NOT?: Prisma.StampDutyAssessmentWhereInput | Prisma.StampDutyAssessmentWhereInput[];
    instrumentType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityId?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    dutyKobo?: Prisma.BigIntFilter<"StampDutyAssessment"> | bigint | number;
    taxRateVersionId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedByUserId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedAt?: Prisma.DateTimeFilter<"StampDutyAssessment"> | Date | string;
    taxRateVersion?: Prisma.XOR<Prisma.TaxRateVersionScalarRelationFilter, Prisma.TaxRateVersionWhereInput>;
    assessedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
}, "id">;
export type StampDutyAssessmentOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    instrumentType?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    dutyKobo?: Prisma.SortOrder;
    taxRateVersionId?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    assessedAt?: Prisma.SortOrder;
    _count?: Prisma.StampDutyAssessmentCountOrderByAggregateInput;
    _avg?: Prisma.StampDutyAssessmentAvgOrderByAggregateInput;
    _max?: Prisma.StampDutyAssessmentMaxOrderByAggregateInput;
    _min?: Prisma.StampDutyAssessmentMinOrderByAggregateInput;
    _sum?: Prisma.StampDutyAssessmentSumOrderByAggregateInput;
};
export type StampDutyAssessmentScalarWhereWithAggregatesInput = {
    AND?: Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput | Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput[];
    OR?: Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput | Prisma.StampDutyAssessmentScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"StampDutyAssessment"> | string;
    instrumentType?: Prisma.StringWithAggregatesFilter<"StampDutyAssessment"> | string;
    entityType?: Prisma.StringWithAggregatesFilter<"StampDutyAssessment"> | string;
    entityId?: Prisma.StringWithAggregatesFilter<"StampDutyAssessment"> | string;
    dutyKobo?: Prisma.BigIntWithAggregatesFilter<"StampDutyAssessment"> | bigint | number;
    taxRateVersionId?: Prisma.UuidWithAggregatesFilter<"StampDutyAssessment"> | string;
    assessedByUserId?: Prisma.UuidWithAggregatesFilter<"StampDutyAssessment"> | string;
    assessedAt?: Prisma.DateTimeWithAggregatesFilter<"StampDutyAssessment"> | Date | string;
};
export type StampDutyAssessmentCreateInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    assessedAt?: Date | string;
    taxRateVersion: Prisma.TaxRateVersionCreateNestedOneWithoutStampDutyAssessmentsInput;
    assessedBy: Prisma.AppUserCreateNestedOneWithoutStampDutyAssessmentsMadeInput;
};
export type StampDutyAssessmentUncheckedCreateInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    taxRateVersionId: string;
    assessedByUserId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxRateVersion?: Prisma.TaxRateVersionUpdateOneRequiredWithoutStampDutyAssessmentsNestedInput;
    assessedBy?: Prisma.AppUserUpdateOneRequiredWithoutStampDutyAssessmentsMadeNestedInput;
};
export type StampDutyAssessmentUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    taxRateVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentCreateManyInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    taxRateVersionId: string;
    assessedByUserId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    taxRateVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentListRelationFilter = {
    every?: Prisma.StampDutyAssessmentWhereInput;
    some?: Prisma.StampDutyAssessmentWhereInput;
    none?: Prisma.StampDutyAssessmentWhereInput;
};
export type StampDutyAssessmentOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type StampDutyAssessmentCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instrumentType?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    dutyKobo?: Prisma.SortOrder;
    taxRateVersionId?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    assessedAt?: Prisma.SortOrder;
};
export type StampDutyAssessmentAvgOrderByAggregateInput = {
    dutyKobo?: Prisma.SortOrder;
};
export type StampDutyAssessmentMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instrumentType?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    dutyKobo?: Prisma.SortOrder;
    taxRateVersionId?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    assessedAt?: Prisma.SortOrder;
};
export type StampDutyAssessmentMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    instrumentType?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    entityId?: Prisma.SortOrder;
    dutyKobo?: Prisma.SortOrder;
    taxRateVersionId?: Prisma.SortOrder;
    assessedByUserId?: Prisma.SortOrder;
    assessedAt?: Prisma.SortOrder;
};
export type StampDutyAssessmentSumOrderByAggregateInput = {
    dutyKobo?: Prisma.SortOrder;
};
export type StampDutyAssessmentCreateNestedManyWithoutAssessedByInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput> | Prisma.StampDutyAssessmentCreateWithoutAssessedByInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyAssessedByInputEnvelope;
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
};
export type StampDutyAssessmentUncheckedCreateNestedManyWithoutAssessedByInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput> | Prisma.StampDutyAssessmentCreateWithoutAssessedByInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyAssessedByInputEnvelope;
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
};
export type StampDutyAssessmentUpdateManyWithoutAssessedByNestedInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput> | Prisma.StampDutyAssessmentCreateWithoutAssessedByInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput[];
    upsert?: Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutAssessedByInput | Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutAssessedByInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyAssessedByInputEnvelope;
    set?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    disconnect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    delete?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    update?: Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutAssessedByInput | Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutAssessedByInput[];
    updateMany?: Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutAssessedByInput | Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutAssessedByInput[];
    deleteMany?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
};
export type StampDutyAssessmentUncheckedUpdateManyWithoutAssessedByNestedInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput> | Prisma.StampDutyAssessmentCreateWithoutAssessedByInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutAssessedByInput[];
    upsert?: Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutAssessedByInput | Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutAssessedByInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyAssessedByInputEnvelope;
    set?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    disconnect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    delete?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    update?: Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutAssessedByInput | Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutAssessedByInput[];
    updateMany?: Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutAssessedByInput | Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutAssessedByInput[];
    deleteMany?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
};
export type StampDutyAssessmentCreateNestedManyWithoutTaxRateVersionInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput> | Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyTaxRateVersionInputEnvelope;
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
};
export type StampDutyAssessmentUncheckedCreateNestedManyWithoutTaxRateVersionInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput> | Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyTaxRateVersionInputEnvelope;
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
};
export type StampDutyAssessmentUpdateManyWithoutTaxRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput> | Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput[];
    upsert?: Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutTaxRateVersionInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyTaxRateVersionInputEnvelope;
    set?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    disconnect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    delete?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    update?: Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutTaxRateVersionInput[];
    updateMany?: Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutTaxRateVersionInput[];
    deleteMany?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
};
export type StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionNestedInput = {
    create?: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput> | Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput[] | Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput[];
    connectOrCreate?: Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput[];
    upsert?: Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpsertWithWhereUniqueWithoutTaxRateVersionInput[];
    createMany?: Prisma.StampDutyAssessmentCreateManyTaxRateVersionInputEnvelope;
    set?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    disconnect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    delete?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    connect?: Prisma.StampDutyAssessmentWhereUniqueInput | Prisma.StampDutyAssessmentWhereUniqueInput[];
    update?: Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpdateWithWhereUniqueWithoutTaxRateVersionInput[];
    updateMany?: Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutTaxRateVersionInput | Prisma.StampDutyAssessmentUpdateManyWithWhereWithoutTaxRateVersionInput[];
    deleteMany?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
};
export type StampDutyAssessmentCreateWithoutAssessedByInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    assessedAt?: Date | string;
    taxRateVersion: Prisma.TaxRateVersionCreateNestedOneWithoutStampDutyAssessmentsInput;
};
export type StampDutyAssessmentUncheckedCreateWithoutAssessedByInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    taxRateVersionId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentCreateOrConnectWithoutAssessedByInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput>;
};
export type StampDutyAssessmentCreateManyAssessedByInputEnvelope = {
    data: Prisma.StampDutyAssessmentCreateManyAssessedByInput | Prisma.StampDutyAssessmentCreateManyAssessedByInput[];
    skipDuplicates?: boolean;
};
export type StampDutyAssessmentUpsertWithWhereUniqueWithoutAssessedByInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StampDutyAssessmentUpdateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedUpdateWithoutAssessedByInput>;
    create: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutAssessedByInput>;
};
export type StampDutyAssessmentUpdateWithWhereUniqueWithoutAssessedByInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateWithoutAssessedByInput, Prisma.StampDutyAssessmentUncheckedUpdateWithoutAssessedByInput>;
};
export type StampDutyAssessmentUpdateManyWithWhereWithoutAssessedByInput = {
    where: Prisma.StampDutyAssessmentScalarWhereInput;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateManyMutationInput, Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutAssessedByInput>;
};
export type StampDutyAssessmentScalarWhereInput = {
    AND?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
    OR?: Prisma.StampDutyAssessmentScalarWhereInput[];
    NOT?: Prisma.StampDutyAssessmentScalarWhereInput | Prisma.StampDutyAssessmentScalarWhereInput[];
    id?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    instrumentType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityType?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    entityId?: Prisma.StringFilter<"StampDutyAssessment"> | string;
    dutyKobo?: Prisma.BigIntFilter<"StampDutyAssessment"> | bigint | number;
    taxRateVersionId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedByUserId?: Prisma.UuidFilter<"StampDutyAssessment"> | string;
    assessedAt?: Prisma.DateTimeFilter<"StampDutyAssessment"> | Date | string;
};
export type StampDutyAssessmentCreateWithoutTaxRateVersionInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    assessedAt?: Date | string;
    assessedBy: Prisma.AppUserCreateNestedOneWithoutStampDutyAssessmentsMadeInput;
};
export type StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    assessedByUserId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentCreateOrConnectWithoutTaxRateVersionInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput>;
};
export type StampDutyAssessmentCreateManyTaxRateVersionInputEnvelope = {
    data: Prisma.StampDutyAssessmentCreateManyTaxRateVersionInput | Prisma.StampDutyAssessmentCreateManyTaxRateVersionInput[];
    skipDuplicates?: boolean;
};
export type StampDutyAssessmentUpsertWithWhereUniqueWithoutTaxRateVersionInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    update: Prisma.XOR<Prisma.StampDutyAssessmentUpdateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedUpdateWithoutTaxRateVersionInput>;
    create: Prisma.XOR<Prisma.StampDutyAssessmentCreateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedCreateWithoutTaxRateVersionInput>;
};
export type StampDutyAssessmentUpdateWithWhereUniqueWithoutTaxRateVersionInput = {
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateWithoutTaxRateVersionInput, Prisma.StampDutyAssessmentUncheckedUpdateWithoutTaxRateVersionInput>;
};
export type StampDutyAssessmentUpdateManyWithWhereWithoutTaxRateVersionInput = {
    where: Prisma.StampDutyAssessmentScalarWhereInput;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateManyMutationInput, Prisma.StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionInput>;
};
export type StampDutyAssessmentCreateManyAssessedByInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    taxRateVersionId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentUpdateWithoutAssessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    taxRateVersion?: Prisma.TaxRateVersionUpdateOneRequiredWithoutStampDutyAssessmentsNestedInput;
};
export type StampDutyAssessmentUncheckedUpdateWithoutAssessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    taxRateVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentUncheckedUpdateManyWithoutAssessedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    taxRateVersionId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentCreateManyTaxRateVersionInput = {
    id?: string;
    instrumentType: string;
    entityType: string;
    entityId: string;
    dutyKobo: bigint | number;
    assessedByUserId: string;
    assessedAt?: Date | string;
};
export type StampDutyAssessmentUpdateWithoutTaxRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    assessedBy?: Prisma.AppUserUpdateOneRequiredWithoutStampDutyAssessmentsMadeNestedInput;
};
export type StampDutyAssessmentUncheckedUpdateWithoutTaxRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentUncheckedUpdateManyWithoutTaxRateVersionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    instrumentType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityType?: Prisma.StringFieldUpdateOperationsInput | string;
    entityId?: Prisma.StringFieldUpdateOperationsInput | string;
    dutyKobo?: Prisma.BigIntFieldUpdateOperationsInput | bigint | number;
    assessedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    assessedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StampDutyAssessmentSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instrumentType?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    dutyKobo?: boolean;
    taxRateVersionId?: boolean;
    assessedByUserId?: boolean;
    assessedAt?: boolean;
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stampDutyAssessment"]>;
export type StampDutyAssessmentSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instrumentType?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    dutyKobo?: boolean;
    taxRateVersionId?: boolean;
    assessedByUserId?: boolean;
    assessedAt?: boolean;
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stampDutyAssessment"]>;
export type StampDutyAssessmentSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    instrumentType?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    dutyKobo?: boolean;
    taxRateVersionId?: boolean;
    assessedByUserId?: boolean;
    assessedAt?: boolean;
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["stampDutyAssessment"]>;
export type StampDutyAssessmentSelectScalar = {
    id?: boolean;
    instrumentType?: boolean;
    entityType?: boolean;
    entityId?: boolean;
    dutyKobo?: boolean;
    taxRateVersionId?: boolean;
    assessedByUserId?: boolean;
    assessedAt?: boolean;
};
export type StampDutyAssessmentOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "instrumentType" | "entityType" | "entityId" | "dutyKobo" | "taxRateVersionId" | "assessedByUserId" | "assessedAt", ExtArgs["result"]["stampDutyAssessment"]>;
export type StampDutyAssessmentInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StampDutyAssessmentIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type StampDutyAssessmentIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    taxRateVersion?: boolean | Prisma.TaxRateVersionDefaultArgs<ExtArgs>;
    assessedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $StampDutyAssessmentPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "StampDutyAssessment";
    objects: {
        taxRateVersion: Prisma.$TaxRateVersionPayload<ExtArgs>;
        assessedBy: Prisma.$AppUserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        instrumentType: string;
        entityType: string;
        entityId: string;
        dutyKobo: bigint;
        taxRateVersionId: string;
        assessedByUserId: string;
        assessedAt: Date;
    }, ExtArgs["result"]["stampDutyAssessment"]>;
    composites: {};
};
export type StampDutyAssessmentGetPayload<S extends boolean | null | undefined | StampDutyAssessmentDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload, S>;
export type StampDutyAssessmentCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StampDutyAssessmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StampDutyAssessmentCountAggregateInputType | true;
};
export interface StampDutyAssessmentDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['StampDutyAssessment'];
        meta: {
            name: 'StampDutyAssessment';
        };
    };
    findUnique<T extends StampDutyAssessmentFindUniqueArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StampDutyAssessmentFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StampDutyAssessmentFindFirstArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentFindFirstArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StampDutyAssessmentFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StampDutyAssessmentFindManyArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StampDutyAssessmentCreateArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentCreateArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StampDutyAssessmentCreateManyArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StampDutyAssessmentCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StampDutyAssessmentDeleteArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentDeleteArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StampDutyAssessmentUpdateArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentUpdateArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StampDutyAssessmentDeleteManyArgs>(args?: Prisma.SelectSubset<T, StampDutyAssessmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StampDutyAssessmentUpdateManyArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StampDutyAssessmentUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StampDutyAssessmentUpsertArgs>(args: Prisma.SelectSubset<T, StampDutyAssessmentUpsertArgs<ExtArgs>>): Prisma.Prisma__StampDutyAssessmentClient<runtime.Types.Result.GetResult<Prisma.$StampDutyAssessmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StampDutyAssessmentCountArgs>(args?: Prisma.Subset<T, StampDutyAssessmentCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StampDutyAssessmentCountAggregateOutputType> : number>;
    aggregate<T extends StampDutyAssessmentAggregateArgs>(args: Prisma.Subset<T, StampDutyAssessmentAggregateArgs>): Prisma.PrismaPromise<GetStampDutyAssessmentAggregateType<T>>;
    groupBy<T extends StampDutyAssessmentGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StampDutyAssessmentGroupByArgs['orderBy'];
    } : {
        orderBy?: StampDutyAssessmentGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StampDutyAssessmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStampDutyAssessmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StampDutyAssessmentFieldRefs;
}
export interface Prisma__StampDutyAssessmentClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    taxRateVersion<T extends Prisma.TaxRateVersionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.TaxRateVersionDefaultArgs<ExtArgs>>): Prisma.Prisma__TaxRateVersionClient<runtime.Types.Result.GetResult<Prisma.$TaxRateVersionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    assessedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StampDutyAssessmentFieldRefs {
    readonly id: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly instrumentType: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly entityType: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly entityId: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly dutyKobo: Prisma.FieldRef<"StampDutyAssessment", 'BigInt'>;
    readonly taxRateVersionId: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly assessedByUserId: Prisma.FieldRef<"StampDutyAssessment", 'String'>;
    readonly assessedAt: Prisma.FieldRef<"StampDutyAssessment", 'DateTime'>;
}
export type StampDutyAssessmentFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
};
export type StampDutyAssessmentFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
};
export type StampDutyAssessmentFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithRelationInput | Prisma.StampDutyAssessmentOrderByWithRelationInput[];
    cursor?: Prisma.StampDutyAssessmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StampDutyAssessmentScalarFieldEnum | Prisma.StampDutyAssessmentScalarFieldEnum[];
};
export type StampDutyAssessmentFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithRelationInput | Prisma.StampDutyAssessmentOrderByWithRelationInput[];
    cursor?: Prisma.StampDutyAssessmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StampDutyAssessmentScalarFieldEnum | Prisma.StampDutyAssessmentScalarFieldEnum[];
};
export type StampDutyAssessmentFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where?: Prisma.StampDutyAssessmentWhereInput;
    orderBy?: Prisma.StampDutyAssessmentOrderByWithRelationInput | Prisma.StampDutyAssessmentOrderByWithRelationInput[];
    cursor?: Prisma.StampDutyAssessmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StampDutyAssessmentScalarFieldEnum | Prisma.StampDutyAssessmentScalarFieldEnum[];
};
export type StampDutyAssessmentCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StampDutyAssessmentCreateInput, Prisma.StampDutyAssessmentUncheckedCreateInput>;
};
export type StampDutyAssessmentCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StampDutyAssessmentCreateManyInput | Prisma.StampDutyAssessmentCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StampDutyAssessmentCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    data: Prisma.StampDutyAssessmentCreateManyInput | Prisma.StampDutyAssessmentCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.StampDutyAssessmentIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type StampDutyAssessmentUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateInput, Prisma.StampDutyAssessmentUncheckedUpdateInput>;
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
};
export type StampDutyAssessmentUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateManyMutationInput, Prisma.StampDutyAssessmentUncheckedUpdateManyInput>;
    where?: Prisma.StampDutyAssessmentWhereInput;
    limit?: number;
};
export type StampDutyAssessmentUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StampDutyAssessmentUpdateManyMutationInput, Prisma.StampDutyAssessmentUncheckedUpdateManyInput>;
    where?: Prisma.StampDutyAssessmentWhereInput;
    limit?: number;
    include?: Prisma.StampDutyAssessmentIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type StampDutyAssessmentUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
    create: Prisma.XOR<Prisma.StampDutyAssessmentCreateInput, Prisma.StampDutyAssessmentUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StampDutyAssessmentUpdateInput, Prisma.StampDutyAssessmentUncheckedUpdateInput>;
};
export type StampDutyAssessmentDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
    where: Prisma.StampDutyAssessmentWhereUniqueInput;
};
export type StampDutyAssessmentDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StampDutyAssessmentWhereInput;
    limit?: number;
};
export type StampDutyAssessmentDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StampDutyAssessmentSelect<ExtArgs> | null;
    omit?: Prisma.StampDutyAssessmentOmit<ExtArgs> | null;
    include?: Prisma.StampDutyAssessmentInclude<ExtArgs> | null;
};
