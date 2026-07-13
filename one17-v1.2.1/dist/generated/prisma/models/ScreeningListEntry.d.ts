import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ScreeningListEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$ScreeningListEntryPayload>;
export type AggregateScreeningListEntry = {
    _count: ScreeningListEntryCountAggregateOutputType | null;
    _min: ScreeningListEntryMinAggregateOutputType | null;
    _max: ScreeningListEntryMaxAggregateOutputType | null;
};
export type ScreeningListEntryMinAggregateOutputType = {
    id: string | null;
    sourceCode: $Enums.ScreeningListSourceCode | null;
    sourceRecordId: string | null;
    primaryName: string | null;
    dateOfBirth: string | null;
    nationality: string | null;
    entityType: string | null;
    programme: string | null;
    listVersion: string | null;
    createdAt: Date | null;
};
export type ScreeningListEntryMaxAggregateOutputType = {
    id: string | null;
    sourceCode: $Enums.ScreeningListSourceCode | null;
    sourceRecordId: string | null;
    primaryName: string | null;
    dateOfBirth: string | null;
    nationality: string | null;
    entityType: string | null;
    programme: string | null;
    listVersion: string | null;
    createdAt: Date | null;
};
export type ScreeningListEntryCountAggregateOutputType = {
    id: number;
    sourceCode: number;
    sourceRecordId: number;
    primaryName: number;
    aliases: number;
    dateOfBirth: number;
    nationality: number;
    entityType: number;
    programme: number;
    listVersion: number;
    rawDetail: number;
    createdAt: number;
    _all: number;
};
export type ScreeningListEntryMinAggregateInputType = {
    id?: true;
    sourceCode?: true;
    sourceRecordId?: true;
    primaryName?: true;
    dateOfBirth?: true;
    nationality?: true;
    entityType?: true;
    programme?: true;
    listVersion?: true;
    createdAt?: true;
};
export type ScreeningListEntryMaxAggregateInputType = {
    id?: true;
    sourceCode?: true;
    sourceRecordId?: true;
    primaryName?: true;
    dateOfBirth?: true;
    nationality?: true;
    entityType?: true;
    programme?: true;
    listVersion?: true;
    createdAt?: true;
};
export type ScreeningListEntryCountAggregateInputType = {
    id?: true;
    sourceCode?: true;
    sourceRecordId?: true;
    primaryName?: true;
    aliases?: true;
    dateOfBirth?: true;
    nationality?: true;
    entityType?: true;
    programme?: true;
    listVersion?: true;
    rawDetail?: true;
    createdAt?: true;
    _all?: true;
};
export type ScreeningListEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListEntryWhereInput;
    orderBy?: Prisma.ScreeningListEntryOrderByWithRelationInput | Prisma.ScreeningListEntryOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ScreeningListEntryCountAggregateInputType;
    _min?: ScreeningListEntryMinAggregateInputType;
    _max?: ScreeningListEntryMaxAggregateInputType;
};
export type GetScreeningListEntryAggregateType<T extends ScreeningListEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateScreeningListEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateScreeningListEntry[P]> : Prisma.GetScalarType<T[P], AggregateScreeningListEntry[P]>;
};
export type ScreeningListEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListEntryWhereInput;
    orderBy?: Prisma.ScreeningListEntryOrderByWithAggregationInput | Prisma.ScreeningListEntryOrderByWithAggregationInput[];
    by: Prisma.ScreeningListEntryScalarFieldEnum[] | Prisma.ScreeningListEntryScalarFieldEnum;
    having?: Prisma.ScreeningListEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ScreeningListEntryCountAggregateInputType | true;
    _min?: ScreeningListEntryMinAggregateInputType;
    _max?: ScreeningListEntryMaxAggregateInputType;
};
export type ScreeningListEntryGroupByOutputType = {
    id: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    sourceRecordId: string;
    primaryName: string;
    aliases: runtime.JsonValue;
    dateOfBirth: string | null;
    nationality: string | null;
    entityType: string | null;
    programme: string | null;
    listVersion: string;
    rawDetail: runtime.JsonValue;
    createdAt: Date;
    _count: ScreeningListEntryCountAggregateOutputType | null;
    _min: ScreeningListEntryMinAggregateOutputType | null;
    _max: ScreeningListEntryMaxAggregateOutputType | null;
};
export type GetScreeningListEntryGroupByPayload<T extends ScreeningListEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ScreeningListEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ScreeningListEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ScreeningListEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ScreeningListEntryGroupByOutputType[P]>;
}>>;
export type ScreeningListEntryWhereInput = {
    AND?: Prisma.ScreeningListEntryWhereInput | Prisma.ScreeningListEntryWhereInput[];
    OR?: Prisma.ScreeningListEntryWhereInput[];
    NOT?: Prisma.ScreeningListEntryWhereInput | Prisma.ScreeningListEntryWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningListEntry"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListEntry"> | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    primaryName?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    aliases?: Prisma.JsonFilter<"ScreeningListEntry">;
    dateOfBirth?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    nationality?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    entityType?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    programme?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    listVersion?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    rawDetail?: Prisma.JsonFilter<"ScreeningListEntry">;
    createdAt?: Prisma.DateTimeFilter<"ScreeningListEntry"> | Date | string;
    source?: Prisma.XOR<Prisma.ScreeningListSourceScalarRelationFilter, Prisma.ScreeningListSourceWhereInput>;
    hits?: Prisma.ScreeningHitListRelationFilter;
};
export type ScreeningListEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    sourceRecordId?: Prisma.SortOrder;
    primaryName?: Prisma.SortOrder;
    aliases?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationality?: Prisma.SortOrderInput | Prisma.SortOrder;
    entityType?: Prisma.SortOrderInput | Prisma.SortOrder;
    programme?: Prisma.SortOrderInput | Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    rawDetail?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    source?: Prisma.ScreeningListSourceOrderByWithRelationInput;
    hits?: Prisma.ScreeningHitOrderByRelationAggregateInput;
};
export type ScreeningListEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    sourceCode_sourceRecordId?: Prisma.ScreeningListEntrySourceCodeSourceRecordIdCompoundUniqueInput;
    AND?: Prisma.ScreeningListEntryWhereInput | Prisma.ScreeningListEntryWhereInput[];
    OR?: Prisma.ScreeningListEntryWhereInput[];
    NOT?: Prisma.ScreeningListEntryWhereInput | Prisma.ScreeningListEntryWhereInput[];
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListEntry"> | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    primaryName?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    aliases?: Prisma.JsonFilter<"ScreeningListEntry">;
    dateOfBirth?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    nationality?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    entityType?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    programme?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    listVersion?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    rawDetail?: Prisma.JsonFilter<"ScreeningListEntry">;
    createdAt?: Prisma.DateTimeFilter<"ScreeningListEntry"> | Date | string;
    source?: Prisma.XOR<Prisma.ScreeningListSourceScalarRelationFilter, Prisma.ScreeningListSourceWhereInput>;
    hits?: Prisma.ScreeningHitListRelationFilter;
}, "id" | "sourceCode_sourceRecordId">;
export type ScreeningListEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    sourceRecordId?: Prisma.SortOrder;
    primaryName?: Prisma.SortOrder;
    aliases?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    nationality?: Prisma.SortOrderInput | Prisma.SortOrder;
    entityType?: Prisma.SortOrderInput | Prisma.SortOrder;
    programme?: Prisma.SortOrderInput | Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    rawDetail?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.ScreeningListEntryCountOrderByAggregateInput;
    _max?: Prisma.ScreeningListEntryMaxOrderByAggregateInput;
    _min?: Prisma.ScreeningListEntryMinOrderByAggregateInput;
};
export type ScreeningListEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.ScreeningListEntryScalarWhereWithAggregatesInput | Prisma.ScreeningListEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.ScreeningListEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ScreeningListEntryScalarWhereWithAggregatesInput | Prisma.ScreeningListEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"ScreeningListEntry"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeWithAggregatesFilter<"ScreeningListEntry"> | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringWithAggregatesFilter<"ScreeningListEntry"> | string;
    primaryName?: Prisma.StringWithAggregatesFilter<"ScreeningListEntry"> | string;
    aliases?: Prisma.JsonWithAggregatesFilter<"ScreeningListEntry">;
    dateOfBirth?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListEntry"> | string | null;
    nationality?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListEntry"> | string | null;
    entityType?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListEntry"> | string | null;
    programme?: Prisma.StringNullableWithAggregatesFilter<"ScreeningListEntry"> | string | null;
    listVersion?: Prisma.StringWithAggregatesFilter<"ScreeningListEntry"> | string;
    rawDetail?: Prisma.JsonWithAggregatesFilter<"ScreeningListEntry">;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"ScreeningListEntry"> | Date | string;
};
export type ScreeningListEntryCreateInput = {
    id?: string;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    source: Prisma.ScreeningListSourceCreateNestedOneWithoutEntriesInput;
    hits?: Prisma.ScreeningHitCreateNestedManyWithoutListEntryInput;
};
export type ScreeningListEntryUncheckedCreateInput = {
    id?: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    hits?: Prisma.ScreeningHitUncheckedCreateNestedManyWithoutListEntryInput;
};
export type ScreeningListEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    source?: Prisma.ScreeningListSourceUpdateOneRequiredWithoutEntriesNestedInput;
    hits?: Prisma.ScreeningHitUpdateManyWithoutListEntryNestedInput;
};
export type ScreeningListEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFieldUpdateOperationsInput | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hits?: Prisma.ScreeningHitUncheckedUpdateManyWithoutListEntryNestedInput;
};
export type ScreeningListEntryCreateManyInput = {
    id?: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ScreeningListEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningListEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFieldUpdateOperationsInput | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningListEntryListRelationFilter = {
    every?: Prisma.ScreeningListEntryWhereInput;
    some?: Prisma.ScreeningListEntryWhereInput;
    none?: Prisma.ScreeningListEntryWhereInput;
};
export type ScreeningListEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ScreeningListEntrySourceCodeSourceRecordIdCompoundUniqueInput = {
    sourceCode: $Enums.ScreeningListSourceCode;
    sourceRecordId: string;
};
export type ScreeningListEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    sourceRecordId?: Prisma.SortOrder;
    primaryName?: Prisma.SortOrder;
    aliases?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    programme?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    rawDetail?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningListEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    sourceRecordId?: Prisma.SortOrder;
    primaryName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    programme?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningListEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceCode?: Prisma.SortOrder;
    sourceRecordId?: Prisma.SortOrder;
    primaryName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    nationality?: Prisma.SortOrder;
    entityType?: Prisma.SortOrder;
    programme?: Prisma.SortOrder;
    listVersion?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type ScreeningListEntryNullableScalarRelationFilter = {
    is?: Prisma.ScreeningListEntryWhereInput | null;
    isNot?: Prisma.ScreeningListEntryWhereInput | null;
};
export type ScreeningListEntryCreateNestedManyWithoutSourceInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListEntryCreateWithoutSourceInput[] | Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput | Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput[];
    createMany?: Prisma.ScreeningListEntryCreateManySourceInputEnvelope;
    connect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
};
export type ScreeningListEntryUncheckedCreateNestedManyWithoutSourceInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListEntryCreateWithoutSourceInput[] | Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput | Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput[];
    createMany?: Prisma.ScreeningListEntryCreateManySourceInputEnvelope;
    connect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
};
export type ScreeningListEntryUpdateManyWithoutSourceNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListEntryCreateWithoutSourceInput[] | Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput | Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput[];
    upsert?: Prisma.ScreeningListEntryUpsertWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListEntryUpsertWithWhereUniqueWithoutSourceInput[];
    createMany?: Prisma.ScreeningListEntryCreateManySourceInputEnvelope;
    set?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    disconnect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    delete?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    connect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    update?: Prisma.ScreeningListEntryUpdateWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListEntryUpdateWithWhereUniqueWithoutSourceInput[];
    updateMany?: Prisma.ScreeningListEntryUpdateManyWithWhereWithoutSourceInput | Prisma.ScreeningListEntryUpdateManyWithWhereWithoutSourceInput[];
    deleteMany?: Prisma.ScreeningListEntryScalarWhereInput | Prisma.ScreeningListEntryScalarWhereInput[];
};
export type ScreeningListEntryUncheckedUpdateManyWithoutSourceNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput> | Prisma.ScreeningListEntryCreateWithoutSourceInput[] | Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput[];
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput | Prisma.ScreeningListEntryCreateOrConnectWithoutSourceInput[];
    upsert?: Prisma.ScreeningListEntryUpsertWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListEntryUpsertWithWhereUniqueWithoutSourceInput[];
    createMany?: Prisma.ScreeningListEntryCreateManySourceInputEnvelope;
    set?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    disconnect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    delete?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    connect?: Prisma.ScreeningListEntryWhereUniqueInput | Prisma.ScreeningListEntryWhereUniqueInput[];
    update?: Prisma.ScreeningListEntryUpdateWithWhereUniqueWithoutSourceInput | Prisma.ScreeningListEntryUpdateWithWhereUniqueWithoutSourceInput[];
    updateMany?: Prisma.ScreeningListEntryUpdateManyWithWhereWithoutSourceInput | Prisma.ScreeningListEntryUpdateManyWithWhereWithoutSourceInput[];
    deleteMany?: Prisma.ScreeningListEntryScalarWhereInput | Prisma.ScreeningListEntryScalarWhereInput[];
};
export type ScreeningListEntryCreateNestedOneWithoutHitsInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedCreateWithoutHitsInput>;
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutHitsInput;
    connect?: Prisma.ScreeningListEntryWhereUniqueInput;
};
export type ScreeningListEntryUpdateOneWithoutHitsNestedInput = {
    create?: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedCreateWithoutHitsInput>;
    connectOrCreate?: Prisma.ScreeningListEntryCreateOrConnectWithoutHitsInput;
    upsert?: Prisma.ScreeningListEntryUpsertWithoutHitsInput;
    disconnect?: Prisma.ScreeningListEntryWhereInput | boolean;
    delete?: Prisma.ScreeningListEntryWhereInput | boolean;
    connect?: Prisma.ScreeningListEntryWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ScreeningListEntryUpdateToOneWithWhereWithoutHitsInput, Prisma.ScreeningListEntryUpdateWithoutHitsInput>, Prisma.ScreeningListEntryUncheckedUpdateWithoutHitsInput>;
};
export type ScreeningListEntryCreateWithoutSourceInput = {
    id?: string;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    hits?: Prisma.ScreeningHitCreateNestedManyWithoutListEntryInput;
};
export type ScreeningListEntryUncheckedCreateWithoutSourceInput = {
    id?: string;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    hits?: Prisma.ScreeningHitUncheckedCreateNestedManyWithoutListEntryInput;
};
export type ScreeningListEntryCreateOrConnectWithoutSourceInput = {
    where: Prisma.ScreeningListEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput>;
};
export type ScreeningListEntryCreateManySourceInputEnvelope = {
    data: Prisma.ScreeningListEntryCreateManySourceInput | Prisma.ScreeningListEntryCreateManySourceInput[];
    skipDuplicates?: boolean;
};
export type ScreeningListEntryUpsertWithWhereUniqueWithoutSourceInput = {
    where: Prisma.ScreeningListEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.ScreeningListEntryUpdateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedUpdateWithoutSourceInput>;
    create: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedCreateWithoutSourceInput>;
};
export type ScreeningListEntryUpdateWithWhereUniqueWithoutSourceInput = {
    where: Prisma.ScreeningListEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateWithoutSourceInput, Prisma.ScreeningListEntryUncheckedUpdateWithoutSourceInput>;
};
export type ScreeningListEntryUpdateManyWithWhereWithoutSourceInput = {
    where: Prisma.ScreeningListEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateManyMutationInput, Prisma.ScreeningListEntryUncheckedUpdateManyWithoutSourceInput>;
};
export type ScreeningListEntryScalarWhereInput = {
    AND?: Prisma.ScreeningListEntryScalarWhereInput | Prisma.ScreeningListEntryScalarWhereInput[];
    OR?: Prisma.ScreeningListEntryScalarWhereInput[];
    NOT?: Prisma.ScreeningListEntryScalarWhereInput | Prisma.ScreeningListEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"ScreeningListEntry"> | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFilter<"ScreeningListEntry"> | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    primaryName?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    aliases?: Prisma.JsonFilter<"ScreeningListEntry">;
    dateOfBirth?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    nationality?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    entityType?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    programme?: Prisma.StringNullableFilter<"ScreeningListEntry"> | string | null;
    listVersion?: Prisma.StringFilter<"ScreeningListEntry"> | string;
    rawDetail?: Prisma.JsonFilter<"ScreeningListEntry">;
    createdAt?: Prisma.DateTimeFilter<"ScreeningListEntry"> | Date | string;
};
export type ScreeningListEntryCreateWithoutHitsInput = {
    id?: string;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
    source: Prisma.ScreeningListSourceCreateNestedOneWithoutEntriesInput;
};
export type ScreeningListEntryUncheckedCreateWithoutHitsInput = {
    id?: string;
    sourceCode: $Enums.ScreeningListSourceCode;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ScreeningListEntryCreateOrConnectWithoutHitsInput = {
    where: Prisma.ScreeningListEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedCreateWithoutHitsInput>;
};
export type ScreeningListEntryUpsertWithoutHitsInput = {
    update: Prisma.XOR<Prisma.ScreeningListEntryUpdateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedUpdateWithoutHitsInput>;
    create: Prisma.XOR<Prisma.ScreeningListEntryCreateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedCreateWithoutHitsInput>;
    where?: Prisma.ScreeningListEntryWhereInput;
};
export type ScreeningListEntryUpdateToOneWithWhereWithoutHitsInput = {
    where?: Prisma.ScreeningListEntryWhereInput;
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateWithoutHitsInput, Prisma.ScreeningListEntryUncheckedUpdateWithoutHitsInput>;
};
export type ScreeningListEntryUpdateWithoutHitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    source?: Prisma.ScreeningListSourceUpdateOneRequiredWithoutEntriesNestedInput;
};
export type ScreeningListEntryUncheckedUpdateWithoutHitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceCode?: Prisma.EnumScreeningListSourceCodeFieldUpdateOperationsInput | $Enums.ScreeningListSourceCode;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningListEntryCreateManySourceInput = {
    id?: string;
    sourceRecordId: string;
    primaryName: string;
    aliases: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: string | null;
    nationality?: string | null;
    entityType?: string | null;
    programme?: string | null;
    listVersion: string;
    rawDetail: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Date | string;
};
export type ScreeningListEntryUpdateWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hits?: Prisma.ScreeningHitUpdateManyWithoutListEntryNestedInput;
};
export type ScreeningListEntryUncheckedUpdateWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    hits?: Prisma.ScreeningHitUncheckedUpdateManyWithoutListEntryNestedInput;
};
export type ScreeningListEntryUncheckedUpdateManyWithoutSourceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceRecordId?: Prisma.StringFieldUpdateOperationsInput | string;
    primaryName?: Prisma.StringFieldUpdateOperationsInput | string;
    aliases?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    dateOfBirth?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    nationality?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    entityType?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    programme?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    listVersion?: Prisma.StringFieldUpdateOperationsInput | string;
    rawDetail?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ScreeningListEntryCountOutputType = {
    hits: number;
};
export type ScreeningListEntryCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    hits?: boolean | ScreeningListEntryCountOutputTypeCountHitsArgs;
};
export type ScreeningListEntryCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntryCountOutputTypeSelect<ExtArgs> | null;
};
export type ScreeningListEntryCountOutputTypeCountHitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningHitWhereInput;
};
export type ScreeningListEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    sourceRecordId?: boolean;
    primaryName?: boolean;
    aliases?: boolean;
    dateOfBirth?: boolean;
    nationality?: boolean;
    entityType?: boolean;
    programme?: boolean;
    listVersion?: boolean;
    rawDetail?: boolean;
    createdAt?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
    hits?: boolean | Prisma.ScreeningListEntry$hitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ScreeningListEntryCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListEntry"]>;
export type ScreeningListEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    sourceRecordId?: boolean;
    primaryName?: boolean;
    aliases?: boolean;
    dateOfBirth?: boolean;
    nationality?: boolean;
    entityType?: boolean;
    programme?: boolean;
    listVersion?: boolean;
    rawDetail?: boolean;
    createdAt?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListEntry"]>;
export type ScreeningListEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceCode?: boolean;
    sourceRecordId?: boolean;
    primaryName?: boolean;
    aliases?: boolean;
    dateOfBirth?: boolean;
    nationality?: boolean;
    entityType?: boolean;
    programme?: boolean;
    listVersion?: boolean;
    rawDetail?: boolean;
    createdAt?: boolean;
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["screeningListEntry"]>;
export type ScreeningListEntrySelectScalar = {
    id?: boolean;
    sourceCode?: boolean;
    sourceRecordId?: boolean;
    primaryName?: boolean;
    aliases?: boolean;
    dateOfBirth?: boolean;
    nationality?: boolean;
    entityType?: boolean;
    programme?: boolean;
    listVersion?: boolean;
    rawDetail?: boolean;
    createdAt?: boolean;
};
export type ScreeningListEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sourceCode" | "sourceRecordId" | "primaryName" | "aliases" | "dateOfBirth" | "nationality" | "entityType" | "programme" | "listVersion" | "rawDetail" | "createdAt", ExtArgs["result"]["screeningListEntry"]>;
export type ScreeningListEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
    hits?: boolean | Prisma.ScreeningListEntry$hitsArgs<ExtArgs>;
    _count?: boolean | Prisma.ScreeningListEntryCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ScreeningListEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
};
export type ScreeningListEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    source?: boolean | Prisma.ScreeningListSourceDefaultArgs<ExtArgs>;
};
export type $ScreeningListEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ScreeningListEntry";
    objects: {
        source: Prisma.$ScreeningListSourcePayload<ExtArgs>;
        hits: Prisma.$ScreeningHitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sourceCode: $Enums.ScreeningListSourceCode;
        sourceRecordId: string;
        primaryName: string;
        aliases: runtime.JsonValue;
        dateOfBirth: string | null;
        nationality: string | null;
        entityType: string | null;
        programme: string | null;
        listVersion: string;
        rawDetail: runtime.JsonValue;
        createdAt: Date;
    }, ExtArgs["result"]["screeningListEntry"]>;
    composites: {};
};
export type ScreeningListEntryGetPayload<S extends boolean | null | undefined | ScreeningListEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload, S>;
export type ScreeningListEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ScreeningListEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ScreeningListEntryCountAggregateInputType | true;
};
export interface ScreeningListEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ScreeningListEntry'];
        meta: {
            name: 'ScreeningListEntry';
        };
    };
    findUnique<T extends ScreeningListEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ScreeningListEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ScreeningListEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ScreeningListEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ScreeningListEntryFindManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ScreeningListEntryCreateArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryCreateArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ScreeningListEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ScreeningListEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ScreeningListEntryDeleteArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ScreeningListEntryUpdateArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ScreeningListEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, ScreeningListEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ScreeningListEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ScreeningListEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ScreeningListEntryUpsertArgs>(args: Prisma.SelectSubset<T, ScreeningListEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__ScreeningListEntryClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ScreeningListEntryCountArgs>(args?: Prisma.Subset<T, ScreeningListEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ScreeningListEntryCountAggregateOutputType> : number>;
    aggregate<T extends ScreeningListEntryAggregateArgs>(args: Prisma.Subset<T, ScreeningListEntryAggregateArgs>): Prisma.PrismaPromise<GetScreeningListEntryAggregateType<T>>;
    groupBy<T extends ScreeningListEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ScreeningListEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: ScreeningListEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ScreeningListEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScreeningListEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ScreeningListEntryFieldRefs;
}
export interface Prisma__ScreeningListEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    source<T extends Prisma.ScreeningListSourceDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningListSourceDefaultArgs<ExtArgs>>): Prisma.Prisma__ScreeningListSourceClient<runtime.Types.Result.GetResult<Prisma.$ScreeningListSourcePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    hits<T extends Prisma.ScreeningListEntry$hitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ScreeningListEntry$hitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ScreeningHitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ScreeningListEntryFieldRefs {
    readonly id: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly sourceCode: Prisma.FieldRef<"ScreeningListEntry", 'ScreeningListSourceCode'>;
    readonly sourceRecordId: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly primaryName: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly aliases: Prisma.FieldRef<"ScreeningListEntry", 'Json'>;
    readonly dateOfBirth: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly nationality: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly entityType: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly programme: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly listVersion: Prisma.FieldRef<"ScreeningListEntry", 'String'>;
    readonly rawDetail: Prisma.FieldRef<"ScreeningListEntry", 'Json'>;
    readonly createdAt: Prisma.FieldRef<"ScreeningListEntry", 'DateTime'>;
}
export type ScreeningListEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where: Prisma.ScreeningListEntryWhereUniqueInput;
};
export type ScreeningListEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where: Prisma.ScreeningListEntryWhereUniqueInput;
};
export type ScreeningListEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListEntryWhereInput;
    orderBy?: Prisma.ScreeningListEntryOrderByWithRelationInput | Prisma.ScreeningListEntryOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListEntryScalarFieldEnum | Prisma.ScreeningListEntryScalarFieldEnum[];
};
export type ScreeningListEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListEntryWhereInput;
    orderBy?: Prisma.ScreeningListEntryOrderByWithRelationInput | Prisma.ScreeningListEntryOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListEntryScalarFieldEnum | Prisma.ScreeningListEntryScalarFieldEnum[];
};
export type ScreeningListEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where?: Prisma.ScreeningListEntryWhereInput;
    orderBy?: Prisma.ScreeningListEntryOrderByWithRelationInput | Prisma.ScreeningListEntryOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningListEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningListEntryScalarFieldEnum | Prisma.ScreeningListEntryScalarFieldEnum[];
};
export type ScreeningListEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListEntryCreateInput, Prisma.ScreeningListEntryUncheckedCreateInput>;
};
export type ScreeningListEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ScreeningListEntryCreateManyInput | Prisma.ScreeningListEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ScreeningListEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    data: Prisma.ScreeningListEntryCreateManyInput | Prisma.ScreeningListEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ScreeningListEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ScreeningListEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateInput, Prisma.ScreeningListEntryUncheckedUpdateInput>;
    where: Prisma.ScreeningListEntryWhereUniqueInput;
};
export type ScreeningListEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateManyMutationInput, Prisma.ScreeningListEntryUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningListEntryWhereInput;
    limit?: number;
};
export type ScreeningListEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ScreeningListEntryUpdateManyMutationInput, Prisma.ScreeningListEntryUncheckedUpdateManyInput>;
    where?: Prisma.ScreeningListEntryWhereInput;
    limit?: number;
    include?: Prisma.ScreeningListEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ScreeningListEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where: Prisma.ScreeningListEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.ScreeningListEntryCreateInput, Prisma.ScreeningListEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ScreeningListEntryUpdateInput, Prisma.ScreeningListEntryUncheckedUpdateInput>;
};
export type ScreeningListEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
    where: Prisma.ScreeningListEntryWhereUniqueInput;
};
export type ScreeningListEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ScreeningListEntryWhereInput;
    limit?: number;
};
export type ScreeningListEntry$hitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningHitSelect<ExtArgs> | null;
    omit?: Prisma.ScreeningHitOmit<ExtArgs> | null;
    include?: Prisma.ScreeningHitInclude<ExtArgs> | null;
    where?: Prisma.ScreeningHitWhereInput;
    orderBy?: Prisma.ScreeningHitOrderByWithRelationInput | Prisma.ScreeningHitOrderByWithRelationInput[];
    cursor?: Prisma.ScreeningHitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ScreeningHitScalarFieldEnum | Prisma.ScreeningHitScalarFieldEnum[];
};
export type ScreeningListEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ScreeningListEntrySelect<ExtArgs> | null;
    omit?: Prisma.ScreeningListEntryOmit<ExtArgs> | null;
    include?: Prisma.ScreeningListEntryInclude<ExtArgs> | null;
};
