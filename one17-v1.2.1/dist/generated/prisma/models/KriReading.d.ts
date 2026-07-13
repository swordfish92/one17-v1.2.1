import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type KriReadingModel = runtime.Types.Result.DefaultSelection<Prisma.$KriReadingPayload>;
export type AggregateKriReading = {
    _count: KriReadingCountAggregateOutputType | null;
    _avg: KriReadingAvgAggregateOutputType | null;
    _sum: KriReadingSumAggregateOutputType | null;
    _min: KriReadingMinAggregateOutputType | null;
    _max: KriReadingMaxAggregateOutputType | null;
};
export type KriReadingAvgAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type KriReadingSumAggregateOutputType = {
    value: runtime.Decimal | null;
};
export type KriReadingMinAggregateOutputType = {
    id: string | null;
    kriCode: string | null;
    ledgerEntityCode: string | null;
    isAggregate: boolean | null;
    readingDate: Date | null;
    value: runtime.Decimal | null;
    ragStatus: $Enums.KriRagStatus | null;
    matrixVersionId: string | null;
    computedAt: Date | null;
};
export type KriReadingMaxAggregateOutputType = {
    id: string | null;
    kriCode: string | null;
    ledgerEntityCode: string | null;
    isAggregate: boolean | null;
    readingDate: Date | null;
    value: runtime.Decimal | null;
    ragStatus: $Enums.KriRagStatus | null;
    matrixVersionId: string | null;
    computedAt: Date | null;
};
export type KriReadingCountAggregateOutputType = {
    id: number;
    kriCode: number;
    ledgerEntityCode: number;
    isAggregate: number;
    readingDate: number;
    value: number;
    ragStatus: number;
    matrixVersionId: number;
    detail: number;
    computedAt: number;
    _all: number;
};
export type KriReadingAvgAggregateInputType = {
    value?: true;
};
export type KriReadingSumAggregateInputType = {
    value?: true;
};
export type KriReadingMinAggregateInputType = {
    id?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    isAggregate?: true;
    readingDate?: true;
    value?: true;
    ragStatus?: true;
    matrixVersionId?: true;
    computedAt?: true;
};
export type KriReadingMaxAggregateInputType = {
    id?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    isAggregate?: true;
    readingDate?: true;
    value?: true;
    ragStatus?: true;
    matrixVersionId?: true;
    computedAt?: true;
};
export type KriReadingCountAggregateInputType = {
    id?: true;
    kriCode?: true;
    ledgerEntityCode?: true;
    isAggregate?: true;
    readingDate?: true;
    value?: true;
    ragStatus?: true;
    matrixVersionId?: true;
    detail?: true;
    computedAt?: true;
    _all?: true;
};
export type KriReadingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithRelationInput | Prisma.KriReadingOrderByWithRelationInput[];
    cursor?: Prisma.KriReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | KriReadingCountAggregateInputType;
    _avg?: KriReadingAvgAggregateInputType;
    _sum?: KriReadingSumAggregateInputType;
    _min?: KriReadingMinAggregateInputType;
    _max?: KriReadingMaxAggregateInputType;
};
export type GetKriReadingAggregateType<T extends KriReadingAggregateArgs> = {
    [P in keyof T & keyof AggregateKriReading]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateKriReading[P]> : Prisma.GetScalarType<T[P], AggregateKriReading[P]>;
};
export type KriReadingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithAggregationInput | Prisma.KriReadingOrderByWithAggregationInput[];
    by: Prisma.KriReadingScalarFieldEnum[] | Prisma.KriReadingScalarFieldEnum;
    having?: Prisma.KriReadingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: KriReadingCountAggregateInputType | true;
    _avg?: KriReadingAvgAggregateInputType;
    _sum?: KriReadingSumAggregateInputType;
    _min?: KriReadingMinAggregateInputType;
    _max?: KriReadingMaxAggregateInputType;
};
export type KriReadingGroupByOutputType = {
    id: string;
    kriCode: string;
    ledgerEntityCode: string | null;
    isAggregate: boolean;
    readingDate: Date;
    value: runtime.Decimal | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId: string | null;
    detail: runtime.JsonValue | null;
    computedAt: Date;
    _count: KriReadingCountAggregateOutputType | null;
    _avg: KriReadingAvgAggregateOutputType | null;
    _sum: KriReadingSumAggregateOutputType | null;
    _min: KriReadingMinAggregateOutputType | null;
    _max: KriReadingMaxAggregateOutputType | null;
};
export type GetKriReadingGroupByPayload<T extends KriReadingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<KriReadingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof KriReadingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], KriReadingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], KriReadingGroupByOutputType[P]>;
}>>;
export type KriReadingWhereInput = {
    AND?: Prisma.KriReadingWhereInput | Prisma.KriReadingWhereInput[];
    OR?: Prisma.KriReadingWhereInput[];
    NOT?: Prisma.KriReadingWhereInput | Prisma.KriReadingWhereInput[];
    id?: Prisma.UuidFilter<"KriReading"> | string;
    kriCode?: Prisma.StringFilter<"KriReading"> | string;
    ledgerEntityCode?: Prisma.StringNullableFilter<"KriReading"> | string | null;
    isAggregate?: Prisma.BoolFilter<"KriReading"> | boolean;
    readingDate?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
    value?: Prisma.DecimalNullableFilter<"KriReading"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFilter<"KriReading"> | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.UuidNullableFilter<"KriReading"> | string | null;
    detail?: Prisma.JsonNullableFilter<"KriReading">;
    computedAt?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
    definition?: Prisma.XOR<Prisma.KriDefinitionScalarRelationFilter, Prisma.KriDefinitionWhereInput>;
};
export type KriReadingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAggregate?: Prisma.SortOrder;
    readingDate?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    detail?: Prisma.SortOrderInput | Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
    definition?: Prisma.KriDefinitionOrderByWithRelationInput;
};
export type KriReadingWhereUniqueInput = Prisma.AtLeast<{
    id_readingDate?: Prisma.KriReadingIdReadingDateCompoundUniqueInput;
    AND?: Prisma.KriReadingWhereInput | Prisma.KriReadingWhereInput[];
    OR?: Prisma.KriReadingWhereInput[];
    NOT?: Prisma.KriReadingWhereInput | Prisma.KriReadingWhereInput[];
    id?: Prisma.UuidFilter<"KriReading"> | string;
    kriCode?: Prisma.StringFilter<"KriReading"> | string;
    ledgerEntityCode?: Prisma.StringNullableFilter<"KriReading"> | string | null;
    isAggregate?: Prisma.BoolFilter<"KriReading"> | boolean;
    readingDate?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
    value?: Prisma.DecimalNullableFilter<"KriReading"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFilter<"KriReading"> | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.UuidNullableFilter<"KriReading"> | string | null;
    detail?: Prisma.JsonNullableFilter<"KriReading">;
    computedAt?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
    definition?: Prisma.XOR<Prisma.KriDefinitionScalarRelationFilter, Prisma.KriDefinitionWhereInput>;
}, "id_readingDate">;
export type KriReadingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrderInput | Prisma.SortOrder;
    isAggregate?: Prisma.SortOrder;
    readingDate?: Prisma.SortOrder;
    value?: Prisma.SortOrderInput | Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrderInput | Prisma.SortOrder;
    detail?: Prisma.SortOrderInput | Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
    _count?: Prisma.KriReadingCountOrderByAggregateInput;
    _avg?: Prisma.KriReadingAvgOrderByAggregateInput;
    _max?: Prisma.KriReadingMaxOrderByAggregateInput;
    _min?: Prisma.KriReadingMinOrderByAggregateInput;
    _sum?: Prisma.KriReadingSumOrderByAggregateInput;
};
export type KriReadingScalarWhereWithAggregatesInput = {
    AND?: Prisma.KriReadingScalarWhereWithAggregatesInput | Prisma.KriReadingScalarWhereWithAggregatesInput[];
    OR?: Prisma.KriReadingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.KriReadingScalarWhereWithAggregatesInput | Prisma.KriReadingScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"KriReading"> | string;
    kriCode?: Prisma.StringWithAggregatesFilter<"KriReading"> | string;
    ledgerEntityCode?: Prisma.StringNullableWithAggregatesFilter<"KriReading"> | string | null;
    isAggregate?: Prisma.BoolWithAggregatesFilter<"KriReading"> | boolean;
    readingDate?: Prisma.DateTimeWithAggregatesFilter<"KriReading"> | Date | string;
    value?: Prisma.DecimalNullableWithAggregatesFilter<"KriReading"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusWithAggregatesFilter<"KriReading"> | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.UuidNullableWithAggregatesFilter<"KriReading"> | string | null;
    detail?: Prisma.JsonNullableWithAggregatesFilter<"KriReading">;
    computedAt?: Prisma.DateTimeWithAggregatesFilter<"KriReading"> | Date | string;
};
export type KriReadingCreateInput = {
    id?: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
    definition: Prisma.KriDefinitionCreateNestedOneWithoutReadingsInput;
};
export type KriReadingUncheckedCreateInput = {
    id?: string;
    kriCode: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type KriReadingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    definition?: Prisma.KriDefinitionUpdateOneRequiredWithoutReadingsNestedInput;
};
export type KriReadingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingCreateManyInput = {
    id?: string;
    kriCode: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type KriReadingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    kriCode?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingListRelationFilter = {
    every?: Prisma.KriReadingWhereInput;
    some?: Prisma.KriReadingWhereInput;
    none?: Prisma.KriReadingWhereInput;
};
export type KriReadingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type KriReadingIdReadingDateCompoundUniqueInput = {
    id: string;
    readingDate: Date | string;
};
export type KriReadingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    isAggregate?: Prisma.SortOrder;
    readingDate?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    detail?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type KriReadingAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type KriReadingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    isAggregate?: Prisma.SortOrder;
    readingDate?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type KriReadingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    kriCode?: Prisma.SortOrder;
    ledgerEntityCode?: Prisma.SortOrder;
    isAggregate?: Prisma.SortOrder;
    readingDate?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    ragStatus?: Prisma.SortOrder;
    matrixVersionId?: Prisma.SortOrder;
    computedAt?: Prisma.SortOrder;
};
export type KriReadingSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
};
export type KriReadingCreateNestedManyWithoutDefinitionInput = {
    create?: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput> | Prisma.KriReadingCreateWithoutDefinitionInput[] | Prisma.KriReadingUncheckedCreateWithoutDefinitionInput[];
    connectOrCreate?: Prisma.KriReadingCreateOrConnectWithoutDefinitionInput | Prisma.KriReadingCreateOrConnectWithoutDefinitionInput[];
    createMany?: Prisma.KriReadingCreateManyDefinitionInputEnvelope;
    connect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
};
export type KriReadingUncheckedCreateNestedManyWithoutDefinitionInput = {
    create?: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput> | Prisma.KriReadingCreateWithoutDefinitionInput[] | Prisma.KriReadingUncheckedCreateWithoutDefinitionInput[];
    connectOrCreate?: Prisma.KriReadingCreateOrConnectWithoutDefinitionInput | Prisma.KriReadingCreateOrConnectWithoutDefinitionInput[];
    createMany?: Prisma.KriReadingCreateManyDefinitionInputEnvelope;
    connect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
};
export type KriReadingUpdateManyWithoutDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput> | Prisma.KriReadingCreateWithoutDefinitionInput[] | Prisma.KriReadingUncheckedCreateWithoutDefinitionInput[];
    connectOrCreate?: Prisma.KriReadingCreateOrConnectWithoutDefinitionInput | Prisma.KriReadingCreateOrConnectWithoutDefinitionInput[];
    upsert?: Prisma.KriReadingUpsertWithWhereUniqueWithoutDefinitionInput | Prisma.KriReadingUpsertWithWhereUniqueWithoutDefinitionInput[];
    createMany?: Prisma.KriReadingCreateManyDefinitionInputEnvelope;
    set?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    disconnect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    delete?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    connect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    update?: Prisma.KriReadingUpdateWithWhereUniqueWithoutDefinitionInput | Prisma.KriReadingUpdateWithWhereUniqueWithoutDefinitionInput[];
    updateMany?: Prisma.KriReadingUpdateManyWithWhereWithoutDefinitionInput | Prisma.KriReadingUpdateManyWithWhereWithoutDefinitionInput[];
    deleteMany?: Prisma.KriReadingScalarWhereInput | Prisma.KriReadingScalarWhereInput[];
};
export type KriReadingUncheckedUpdateManyWithoutDefinitionNestedInput = {
    create?: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput> | Prisma.KriReadingCreateWithoutDefinitionInput[] | Prisma.KriReadingUncheckedCreateWithoutDefinitionInput[];
    connectOrCreate?: Prisma.KriReadingCreateOrConnectWithoutDefinitionInput | Prisma.KriReadingCreateOrConnectWithoutDefinitionInput[];
    upsert?: Prisma.KriReadingUpsertWithWhereUniqueWithoutDefinitionInput | Prisma.KriReadingUpsertWithWhereUniqueWithoutDefinitionInput[];
    createMany?: Prisma.KriReadingCreateManyDefinitionInputEnvelope;
    set?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    disconnect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    delete?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    connect?: Prisma.KriReadingWhereUniqueInput | Prisma.KriReadingWhereUniqueInput[];
    update?: Prisma.KriReadingUpdateWithWhereUniqueWithoutDefinitionInput | Prisma.KriReadingUpdateWithWhereUniqueWithoutDefinitionInput[];
    updateMany?: Prisma.KriReadingUpdateManyWithWhereWithoutDefinitionInput | Prisma.KriReadingUpdateManyWithWhereWithoutDefinitionInput[];
    deleteMany?: Prisma.KriReadingScalarWhereInput | Prisma.KriReadingScalarWhereInput[];
};
export type EnumKriRagStatusFieldUpdateOperationsInput = {
    set?: $Enums.KriRagStatus;
};
export type KriReadingCreateWithoutDefinitionInput = {
    id?: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type KriReadingUncheckedCreateWithoutDefinitionInput = {
    id?: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type KriReadingCreateOrConnectWithoutDefinitionInput = {
    where: Prisma.KriReadingWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput>;
};
export type KriReadingCreateManyDefinitionInputEnvelope = {
    data: Prisma.KriReadingCreateManyDefinitionInput | Prisma.KriReadingCreateManyDefinitionInput[];
    skipDuplicates?: boolean;
};
export type KriReadingUpsertWithWhereUniqueWithoutDefinitionInput = {
    where: Prisma.KriReadingWhereUniqueInput;
    update: Prisma.XOR<Prisma.KriReadingUpdateWithoutDefinitionInput, Prisma.KriReadingUncheckedUpdateWithoutDefinitionInput>;
    create: Prisma.XOR<Prisma.KriReadingCreateWithoutDefinitionInput, Prisma.KriReadingUncheckedCreateWithoutDefinitionInput>;
};
export type KriReadingUpdateWithWhereUniqueWithoutDefinitionInput = {
    where: Prisma.KriReadingWhereUniqueInput;
    data: Prisma.XOR<Prisma.KriReadingUpdateWithoutDefinitionInput, Prisma.KriReadingUncheckedUpdateWithoutDefinitionInput>;
};
export type KriReadingUpdateManyWithWhereWithoutDefinitionInput = {
    where: Prisma.KriReadingScalarWhereInput;
    data: Prisma.XOR<Prisma.KriReadingUpdateManyMutationInput, Prisma.KriReadingUncheckedUpdateManyWithoutDefinitionInput>;
};
export type KriReadingScalarWhereInput = {
    AND?: Prisma.KriReadingScalarWhereInput | Prisma.KriReadingScalarWhereInput[];
    OR?: Prisma.KriReadingScalarWhereInput[];
    NOT?: Prisma.KriReadingScalarWhereInput | Prisma.KriReadingScalarWhereInput[];
    id?: Prisma.UuidFilter<"KriReading"> | string;
    kriCode?: Prisma.StringFilter<"KriReading"> | string;
    ledgerEntityCode?: Prisma.StringNullableFilter<"KriReading"> | string | null;
    isAggregate?: Prisma.BoolFilter<"KriReading"> | boolean;
    readingDate?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
    value?: Prisma.DecimalNullableFilter<"KriReading"> | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFilter<"KriReading"> | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.UuidNullableFilter<"KriReading"> | string | null;
    detail?: Prisma.JsonNullableFilter<"KriReading">;
    computedAt?: Prisma.DateTimeFilter<"KriReading"> | Date | string;
};
export type KriReadingCreateManyDefinitionInput = {
    id?: string;
    ledgerEntityCode?: string | null;
    isAggregate?: boolean;
    readingDate: Date | string;
    value?: runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus: $Enums.KriRagStatus;
    matrixVersionId?: string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Date | string;
};
export type KriReadingUpdateWithoutDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingUncheckedUpdateWithoutDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingUncheckedUpdateManyWithoutDefinitionInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ledgerEntityCode?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isAggregate?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    readingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    value?: Prisma.NullableDecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string | null;
    ragStatus?: Prisma.EnumKriRagStatusFieldUpdateOperationsInput | $Enums.KriRagStatus;
    matrixVersionId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    detail?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    computedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type KriReadingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    isAggregate?: boolean;
    readingDate?: boolean;
    value?: boolean;
    ragStatus?: boolean;
    matrixVersionId?: boolean;
    detail?: boolean;
    computedAt?: boolean;
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kriReading"]>;
export type KriReadingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    isAggregate?: boolean;
    readingDate?: boolean;
    value?: boolean;
    ragStatus?: boolean;
    matrixVersionId?: boolean;
    detail?: boolean;
    computedAt?: boolean;
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kriReading"]>;
export type KriReadingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    isAggregate?: boolean;
    readingDate?: boolean;
    value?: boolean;
    ragStatus?: boolean;
    matrixVersionId?: boolean;
    detail?: boolean;
    computedAt?: boolean;
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["kriReading"]>;
export type KriReadingSelectScalar = {
    id?: boolean;
    kriCode?: boolean;
    ledgerEntityCode?: boolean;
    isAggregate?: boolean;
    readingDate?: boolean;
    value?: boolean;
    ragStatus?: boolean;
    matrixVersionId?: boolean;
    detail?: boolean;
    computedAt?: boolean;
};
export type KriReadingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "kriCode" | "ledgerEntityCode" | "isAggregate" | "readingDate" | "value" | "ragStatus" | "matrixVersionId" | "detail" | "computedAt", ExtArgs["result"]["kriReading"]>;
export type KriReadingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
};
export type KriReadingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
};
export type KriReadingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    definition?: boolean | Prisma.KriDefinitionDefaultArgs<ExtArgs>;
};
export type $KriReadingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "KriReading";
    objects: {
        definition: Prisma.$KriDefinitionPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        kriCode: string;
        ledgerEntityCode: string | null;
        isAggregate: boolean;
        readingDate: Date;
        value: runtime.Decimal | null;
        ragStatus: $Enums.KriRagStatus;
        matrixVersionId: string | null;
        detail: runtime.JsonValue | null;
        computedAt: Date;
    }, ExtArgs["result"]["kriReading"]>;
    composites: {};
};
export type KriReadingGetPayload<S extends boolean | null | undefined | KriReadingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$KriReadingPayload, S>;
export type KriReadingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<KriReadingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: KriReadingCountAggregateInputType | true;
};
export interface KriReadingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['KriReading'];
        meta: {
            name: 'KriReading';
        };
    };
    findUnique<T extends KriReadingFindUniqueArgs>(args: Prisma.SelectSubset<T, KriReadingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends KriReadingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, KriReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends KriReadingFindFirstArgs>(args?: Prisma.SelectSubset<T, KriReadingFindFirstArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends KriReadingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, KriReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends KriReadingFindManyArgs>(args?: Prisma.SelectSubset<T, KriReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends KriReadingCreateArgs>(args: Prisma.SelectSubset<T, KriReadingCreateArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends KriReadingCreateManyArgs>(args?: Prisma.SelectSubset<T, KriReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends KriReadingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, KriReadingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends KriReadingDeleteArgs>(args: Prisma.SelectSubset<T, KriReadingDeleteArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends KriReadingUpdateArgs>(args: Prisma.SelectSubset<T, KriReadingUpdateArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends KriReadingDeleteManyArgs>(args?: Prisma.SelectSubset<T, KriReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends KriReadingUpdateManyArgs>(args: Prisma.SelectSubset<T, KriReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends KriReadingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, KriReadingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends KriReadingUpsertArgs>(args: Prisma.SelectSubset<T, KriReadingUpsertArgs<ExtArgs>>): Prisma.Prisma__KriReadingClient<runtime.Types.Result.GetResult<Prisma.$KriReadingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends KriReadingCountArgs>(args?: Prisma.Subset<T, KriReadingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], KriReadingCountAggregateOutputType> : number>;
    aggregate<T extends KriReadingAggregateArgs>(args: Prisma.Subset<T, KriReadingAggregateArgs>): Prisma.PrismaPromise<GetKriReadingAggregateType<T>>;
    groupBy<T extends KriReadingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: KriReadingGroupByArgs['orderBy'];
    } : {
        orderBy?: KriReadingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, KriReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKriReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: KriReadingFieldRefs;
}
export interface Prisma__KriReadingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    definition<T extends Prisma.KriDefinitionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.KriDefinitionDefaultArgs<ExtArgs>>): Prisma.Prisma__KriDefinitionClient<runtime.Types.Result.GetResult<Prisma.$KriDefinitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface KriReadingFieldRefs {
    readonly id: Prisma.FieldRef<"KriReading", 'String'>;
    readonly kriCode: Prisma.FieldRef<"KriReading", 'String'>;
    readonly ledgerEntityCode: Prisma.FieldRef<"KriReading", 'String'>;
    readonly isAggregate: Prisma.FieldRef<"KriReading", 'Boolean'>;
    readonly readingDate: Prisma.FieldRef<"KriReading", 'DateTime'>;
    readonly value: Prisma.FieldRef<"KriReading", 'Decimal'>;
    readonly ragStatus: Prisma.FieldRef<"KriReading", 'KriRagStatus'>;
    readonly matrixVersionId: Prisma.FieldRef<"KriReading", 'String'>;
    readonly detail: Prisma.FieldRef<"KriReading", 'Json'>;
    readonly computedAt: Prisma.FieldRef<"KriReading", 'DateTime'>;
}
export type KriReadingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where: Prisma.KriReadingWhereUniqueInput;
};
export type KriReadingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where: Prisma.KriReadingWhereUniqueInput;
};
export type KriReadingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithRelationInput | Prisma.KriReadingOrderByWithRelationInput[];
    cursor?: Prisma.KriReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriReadingScalarFieldEnum | Prisma.KriReadingScalarFieldEnum[];
};
export type KriReadingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithRelationInput | Prisma.KriReadingOrderByWithRelationInput[];
    cursor?: Prisma.KriReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriReadingScalarFieldEnum | Prisma.KriReadingScalarFieldEnum[];
};
export type KriReadingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where?: Prisma.KriReadingWhereInput;
    orderBy?: Prisma.KriReadingOrderByWithRelationInput | Prisma.KriReadingOrderByWithRelationInput[];
    cursor?: Prisma.KriReadingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.KriReadingScalarFieldEnum | Prisma.KriReadingScalarFieldEnum[];
};
export type KriReadingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriReadingCreateInput, Prisma.KriReadingUncheckedCreateInput>;
};
export type KriReadingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.KriReadingCreateManyInput | Prisma.KriReadingCreateManyInput[];
    skipDuplicates?: boolean;
};
export type KriReadingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    data: Prisma.KriReadingCreateManyInput | Prisma.KriReadingCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.KriReadingIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type KriReadingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriReadingUpdateInput, Prisma.KriReadingUncheckedUpdateInput>;
    where: Prisma.KriReadingWhereUniqueInput;
};
export type KriReadingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.KriReadingUpdateManyMutationInput, Prisma.KriReadingUncheckedUpdateManyInput>;
    where?: Prisma.KriReadingWhereInput;
    limit?: number;
};
export type KriReadingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.KriReadingUpdateManyMutationInput, Prisma.KriReadingUncheckedUpdateManyInput>;
    where?: Prisma.KriReadingWhereInput;
    limit?: number;
    include?: Prisma.KriReadingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type KriReadingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where: Prisma.KriReadingWhereUniqueInput;
    create: Prisma.XOR<Prisma.KriReadingCreateInput, Prisma.KriReadingUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.KriReadingUpdateInput, Prisma.KriReadingUncheckedUpdateInput>;
};
export type KriReadingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
    where: Prisma.KriReadingWhereUniqueInput;
};
export type KriReadingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.KriReadingWhereInput;
    limit?: number;
};
export type KriReadingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.KriReadingSelect<ExtArgs> | null;
    omit?: Prisma.KriReadingOmit<ExtArgs> | null;
    include?: Prisma.KriReadingInclude<ExtArgs> | null;
};
