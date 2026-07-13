import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type WmAdvisoryRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$WmAdvisoryRecordPayload>;
export type AggregateWmAdvisoryRecord = {
    _count: WmAdvisoryRecordCountAggregateOutputType | null;
    _min: WmAdvisoryRecordMinAggregateOutputType | null;
    _max: WmAdvisoryRecordMaxAggregateOutputType | null;
};
export type WmAdvisoryRecordMinAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    recommendation: string | null;
    rationale: string | null;
    riskNotes: string | null;
    shariahNote: string | null;
    advisorUserId: string | null;
    clientResponse: $Enums.WmAdvisoryResponse | null;
    respondedAt: Date | null;
    createdAt: Date | null;
};
export type WmAdvisoryRecordMaxAggregateOutputType = {
    id: string | null;
    wmClientProfileId: string | null;
    recommendation: string | null;
    rationale: string | null;
    riskNotes: string | null;
    shariahNote: string | null;
    advisorUserId: string | null;
    clientResponse: $Enums.WmAdvisoryResponse | null;
    respondedAt: Date | null;
    createdAt: Date | null;
};
export type WmAdvisoryRecordCountAggregateOutputType = {
    id: number;
    wmClientProfileId: number;
    recommendation: number;
    rationale: number;
    riskNotes: number;
    shariahNote: number;
    advisorUserId: number;
    clientResponse: number;
    respondedAt: number;
    createdAt: number;
    _all: number;
};
export type WmAdvisoryRecordMinAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    recommendation?: true;
    rationale?: true;
    riskNotes?: true;
    shariahNote?: true;
    advisorUserId?: true;
    clientResponse?: true;
    respondedAt?: true;
    createdAt?: true;
};
export type WmAdvisoryRecordMaxAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    recommendation?: true;
    rationale?: true;
    riskNotes?: true;
    shariahNote?: true;
    advisorUserId?: true;
    clientResponse?: true;
    respondedAt?: true;
    createdAt?: true;
};
export type WmAdvisoryRecordCountAggregateInputType = {
    id?: true;
    wmClientProfileId?: true;
    recommendation?: true;
    rationale?: true;
    riskNotes?: true;
    shariahNote?: true;
    advisorUserId?: true;
    clientResponse?: true;
    respondedAt?: true;
    createdAt?: true;
    _all?: true;
};
export type WmAdvisoryRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAdvisoryRecordWhereInput;
    orderBy?: Prisma.WmAdvisoryRecordOrderByWithRelationInput | Prisma.WmAdvisoryRecordOrderByWithRelationInput[];
    cursor?: Prisma.WmAdvisoryRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WmAdvisoryRecordCountAggregateInputType;
    _min?: WmAdvisoryRecordMinAggregateInputType;
    _max?: WmAdvisoryRecordMaxAggregateInputType;
};
export type GetWmAdvisoryRecordAggregateType<T extends WmAdvisoryRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateWmAdvisoryRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWmAdvisoryRecord[P]> : Prisma.GetScalarType<T[P], AggregateWmAdvisoryRecord[P]>;
};
export type WmAdvisoryRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAdvisoryRecordWhereInput;
    orderBy?: Prisma.WmAdvisoryRecordOrderByWithAggregationInput | Prisma.WmAdvisoryRecordOrderByWithAggregationInput[];
    by: Prisma.WmAdvisoryRecordScalarFieldEnum[] | Prisma.WmAdvisoryRecordScalarFieldEnum;
    having?: Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WmAdvisoryRecordCountAggregateInputType | true;
    _min?: WmAdvisoryRecordMinAggregateInputType;
    _max?: WmAdvisoryRecordMaxAggregateInputType;
};
export type WmAdvisoryRecordGroupByOutputType = {
    id: string;
    wmClientProfileId: string;
    recommendation: string;
    rationale: string;
    riskNotes: string | null;
    shariahNote: string | null;
    advisorUserId: string;
    clientResponse: $Enums.WmAdvisoryResponse;
    respondedAt: Date | null;
    createdAt: Date;
    _count: WmAdvisoryRecordCountAggregateOutputType | null;
    _min: WmAdvisoryRecordMinAggregateOutputType | null;
    _max: WmAdvisoryRecordMaxAggregateOutputType | null;
};
export type GetWmAdvisoryRecordGroupByPayload<T extends WmAdvisoryRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WmAdvisoryRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WmAdvisoryRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WmAdvisoryRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WmAdvisoryRecordGroupByOutputType[P]>;
}>>;
export type WmAdvisoryRecordWhereInput = {
    AND?: Prisma.WmAdvisoryRecordWhereInput | Prisma.WmAdvisoryRecordWhereInput[];
    OR?: Prisma.WmAdvisoryRecordWhereInput[];
    NOT?: Prisma.WmAdvisoryRecordWhereInput | Prisma.WmAdvisoryRecordWhereInput[];
    id?: Prisma.UuidFilter<"WmAdvisoryRecord"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    recommendation?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    rationale?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    riskNotes?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    shariahNote?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    advisorUserId?: Prisma.UuidFilter<"WmAdvisoryRecord"> | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFilter<"WmAdvisoryRecord"> | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.DateTimeNullableFilter<"WmAdvisoryRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmAdvisoryRecord"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
};
export type WmAdvisoryRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    riskNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    shariahNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    advisorUserId?: Prisma.SortOrder;
    clientResponse?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    wmClientProfile?: Prisma.WmClientProfileOrderByWithRelationInput;
};
export type WmAdvisoryRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.WmAdvisoryRecordWhereInput | Prisma.WmAdvisoryRecordWhereInput[];
    OR?: Prisma.WmAdvisoryRecordWhereInput[];
    NOT?: Prisma.WmAdvisoryRecordWhereInput | Prisma.WmAdvisoryRecordWhereInput[];
    wmClientProfileId?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    recommendation?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    rationale?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    riskNotes?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    shariahNote?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    advisorUserId?: Prisma.UuidFilter<"WmAdvisoryRecord"> | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFilter<"WmAdvisoryRecord"> | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.DateTimeNullableFilter<"WmAdvisoryRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmAdvisoryRecord"> | Date | string;
    wmClientProfile?: Prisma.XOR<Prisma.WmClientProfileScalarRelationFilter, Prisma.WmClientProfileWhereInput>;
}, "id">;
export type WmAdvisoryRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    riskNotes?: Prisma.SortOrderInput | Prisma.SortOrder;
    shariahNote?: Prisma.SortOrderInput | Prisma.SortOrder;
    advisorUserId?: Prisma.SortOrder;
    clientResponse?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.WmAdvisoryRecordCountOrderByAggregateInput;
    _max?: Prisma.WmAdvisoryRecordMaxOrderByAggregateInput;
    _min?: Prisma.WmAdvisoryRecordMinOrderByAggregateInput;
};
export type WmAdvisoryRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput | Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput | Prisma.WmAdvisoryRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"WmAdvisoryRecord"> | string;
    wmClientProfileId?: Prisma.StringWithAggregatesFilter<"WmAdvisoryRecord"> | string;
    recommendation?: Prisma.StringWithAggregatesFilter<"WmAdvisoryRecord"> | string;
    rationale?: Prisma.StringWithAggregatesFilter<"WmAdvisoryRecord"> | string;
    riskNotes?: Prisma.StringNullableWithAggregatesFilter<"WmAdvisoryRecord"> | string | null;
    shariahNote?: Prisma.StringNullableWithAggregatesFilter<"WmAdvisoryRecord"> | string | null;
    advisorUserId?: Prisma.UuidWithAggregatesFilter<"WmAdvisoryRecord"> | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseWithAggregatesFilter<"WmAdvisoryRecord"> | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"WmAdvisoryRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"WmAdvisoryRecord"> | Date | string;
};
export type WmAdvisoryRecordCreateInput = {
    id?: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
    wmClientProfile: Prisma.WmClientProfileCreateNestedOneWithoutAdvisoryRecordsInput;
};
export type WmAdvisoryRecordUncheckedCreateInput = {
    id?: string;
    wmClientProfileId: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmAdvisoryRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    wmClientProfile?: Prisma.WmClientProfileUpdateOneRequiredWithoutAdvisoryRecordsNestedInput;
};
export type WmAdvisoryRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordCreateManyInput = {
    id?: string;
    wmClientProfileId: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmAdvisoryRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    wmClientProfileId?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordListRelationFilter = {
    every?: Prisma.WmAdvisoryRecordWhereInput;
    some?: Prisma.WmAdvisoryRecordWhereInput;
    none?: Prisma.WmAdvisoryRecordWhereInput;
};
export type WmAdvisoryRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WmAdvisoryRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    riskNotes?: Prisma.SortOrder;
    shariahNote?: Prisma.SortOrder;
    advisorUserId?: Prisma.SortOrder;
    clientResponse?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAdvisoryRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    riskNotes?: Prisma.SortOrder;
    shariahNote?: Prisma.SortOrder;
    advisorUserId?: Prisma.SortOrder;
    clientResponse?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAdvisoryRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    wmClientProfileId?: Prisma.SortOrder;
    recommendation?: Prisma.SortOrder;
    rationale?: Prisma.SortOrder;
    riskNotes?: Prisma.SortOrder;
    shariahNote?: Prisma.SortOrder;
    advisorUserId?: Prisma.SortOrder;
    clientResponse?: Prisma.SortOrder;
    respondedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type WmAdvisoryRecordCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput[] | Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAdvisoryRecordCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
};
export type WmAdvisoryRecordUncheckedCreateNestedManyWithoutWmClientProfileInput = {
    create?: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput[] | Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAdvisoryRecordCreateManyWmClientProfileInputEnvelope;
    connect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
};
export type WmAdvisoryRecordUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput[] | Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmAdvisoryRecordUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAdvisoryRecordCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    disconnect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    delete?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    connect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    update?: Prisma.WmAdvisoryRecordUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmAdvisoryRecordUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmAdvisoryRecordScalarWhereInput | Prisma.WmAdvisoryRecordScalarWhereInput[];
};
export type WmAdvisoryRecordUncheckedUpdateManyWithoutWmClientProfileNestedInput = {
    create?: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput> | Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput[] | Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput[];
    connectOrCreate?: Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput[];
    upsert?: Prisma.WmAdvisoryRecordUpsertWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpsertWithWhereUniqueWithoutWmClientProfileInput[];
    createMany?: Prisma.WmAdvisoryRecordCreateManyWmClientProfileInputEnvelope;
    set?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    disconnect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    delete?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    connect?: Prisma.WmAdvisoryRecordWhereUniqueInput | Prisma.WmAdvisoryRecordWhereUniqueInput[];
    update?: Prisma.WmAdvisoryRecordUpdateWithWhereUniqueWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpdateWithWhereUniqueWithoutWmClientProfileInput[];
    updateMany?: Prisma.WmAdvisoryRecordUpdateManyWithWhereWithoutWmClientProfileInput | Prisma.WmAdvisoryRecordUpdateManyWithWhereWithoutWmClientProfileInput[];
    deleteMany?: Prisma.WmAdvisoryRecordScalarWhereInput | Prisma.WmAdvisoryRecordScalarWhereInput[];
};
export type EnumWmAdvisoryResponseFieldUpdateOperationsInput = {
    set?: $Enums.WmAdvisoryResponse;
};
export type WmAdvisoryRecordCreateWithoutWmClientProfileInput = {
    id?: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput = {
    id?: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmAdvisoryRecordCreateOrConnectWithoutWmClientProfileInput = {
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmAdvisoryRecordCreateManyWmClientProfileInputEnvelope = {
    data: Prisma.WmAdvisoryRecordCreateManyWmClientProfileInput | Prisma.WmAdvisoryRecordCreateManyWmClientProfileInput[];
    skipDuplicates?: boolean;
};
export type WmAdvisoryRecordUpsertWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedUpdateWithoutWmClientProfileInput>;
    create: Prisma.XOR<Prisma.WmAdvisoryRecordCreateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedCreateWithoutWmClientProfileInput>;
};
export type WmAdvisoryRecordUpdateWithWhereUniqueWithoutWmClientProfileInput = {
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateWithoutWmClientProfileInput, Prisma.WmAdvisoryRecordUncheckedUpdateWithoutWmClientProfileInput>;
};
export type WmAdvisoryRecordUpdateManyWithWhereWithoutWmClientProfileInput = {
    where: Prisma.WmAdvisoryRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateManyMutationInput, Prisma.WmAdvisoryRecordUncheckedUpdateManyWithoutWmClientProfileInput>;
};
export type WmAdvisoryRecordScalarWhereInput = {
    AND?: Prisma.WmAdvisoryRecordScalarWhereInput | Prisma.WmAdvisoryRecordScalarWhereInput[];
    OR?: Prisma.WmAdvisoryRecordScalarWhereInput[];
    NOT?: Prisma.WmAdvisoryRecordScalarWhereInput | Prisma.WmAdvisoryRecordScalarWhereInput[];
    id?: Prisma.UuidFilter<"WmAdvisoryRecord"> | string;
    wmClientProfileId?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    recommendation?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    rationale?: Prisma.StringFilter<"WmAdvisoryRecord"> | string;
    riskNotes?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    shariahNote?: Prisma.StringNullableFilter<"WmAdvisoryRecord"> | string | null;
    advisorUserId?: Prisma.UuidFilter<"WmAdvisoryRecord"> | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFilter<"WmAdvisoryRecord"> | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.DateTimeNullableFilter<"WmAdvisoryRecord"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"WmAdvisoryRecord"> | Date | string;
};
export type WmAdvisoryRecordCreateManyWmClientProfileInput = {
    id?: string;
    recommendation: string;
    rationale: string;
    riskNotes?: string | null;
    shariahNote?: string | null;
    advisorUserId: string;
    clientResponse?: $Enums.WmAdvisoryResponse;
    respondedAt?: Date | string | null;
    createdAt?: Date | string;
};
export type WmAdvisoryRecordUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordUncheckedUpdateWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordUncheckedUpdateManyWithoutWmClientProfileInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    recommendation?: Prisma.StringFieldUpdateOperationsInput | string;
    rationale?: Prisma.StringFieldUpdateOperationsInput | string;
    riskNotes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    shariahNote?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    advisorUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    clientResponse?: Prisma.EnumWmAdvisoryResponseFieldUpdateOperationsInput | $Enums.WmAdvisoryResponse;
    respondedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WmAdvisoryRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    recommendation?: boolean;
    rationale?: boolean;
    riskNotes?: boolean;
    shariahNote?: boolean;
    advisorUserId?: boolean;
    clientResponse?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAdvisoryRecord"]>;
export type WmAdvisoryRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    recommendation?: boolean;
    rationale?: boolean;
    riskNotes?: boolean;
    shariahNote?: boolean;
    advisorUserId?: boolean;
    clientResponse?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAdvisoryRecord"]>;
export type WmAdvisoryRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    wmClientProfileId?: boolean;
    recommendation?: boolean;
    rationale?: boolean;
    riskNotes?: boolean;
    shariahNote?: boolean;
    advisorUserId?: boolean;
    clientResponse?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wmAdvisoryRecord"]>;
export type WmAdvisoryRecordSelectScalar = {
    id?: boolean;
    wmClientProfileId?: boolean;
    recommendation?: boolean;
    rationale?: boolean;
    riskNotes?: boolean;
    shariahNote?: boolean;
    advisorUserId?: boolean;
    clientResponse?: boolean;
    respondedAt?: boolean;
    createdAt?: boolean;
};
export type WmAdvisoryRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "wmClientProfileId" | "recommendation" | "rationale" | "riskNotes" | "shariahNote" | "advisorUserId" | "clientResponse" | "respondedAt" | "createdAt", ExtArgs["result"]["wmAdvisoryRecord"]>;
export type WmAdvisoryRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmAdvisoryRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type WmAdvisoryRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    wmClientProfile?: boolean | Prisma.WmClientProfileDefaultArgs<ExtArgs>;
};
export type $WmAdvisoryRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "WmAdvisoryRecord";
    objects: {
        wmClientProfile: Prisma.$WmClientProfilePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        wmClientProfileId: string;
        recommendation: string;
        rationale: string;
        riskNotes: string | null;
        shariahNote: string | null;
        advisorUserId: string;
        clientResponse: $Enums.WmAdvisoryResponse;
        respondedAt: Date | null;
        createdAt: Date;
    }, ExtArgs["result"]["wmAdvisoryRecord"]>;
    composites: {};
};
export type WmAdvisoryRecordGetPayload<S extends boolean | null | undefined | WmAdvisoryRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload, S>;
export type WmAdvisoryRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WmAdvisoryRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WmAdvisoryRecordCountAggregateInputType | true;
};
export interface WmAdvisoryRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['WmAdvisoryRecord'];
        meta: {
            name: 'WmAdvisoryRecord';
        };
    };
    findUnique<T extends WmAdvisoryRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WmAdvisoryRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WmAdvisoryRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WmAdvisoryRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WmAdvisoryRecordFindManyArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WmAdvisoryRecordCreateArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordCreateArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WmAdvisoryRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WmAdvisoryRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WmAdvisoryRecordDeleteArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WmAdvisoryRecordUpdateArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WmAdvisoryRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, WmAdvisoryRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WmAdvisoryRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WmAdvisoryRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WmAdvisoryRecordUpsertArgs>(args: Prisma.SelectSubset<T, WmAdvisoryRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__WmAdvisoryRecordClient<runtime.Types.Result.GetResult<Prisma.$WmAdvisoryRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WmAdvisoryRecordCountArgs>(args?: Prisma.Subset<T, WmAdvisoryRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WmAdvisoryRecordCountAggregateOutputType> : number>;
    aggregate<T extends WmAdvisoryRecordAggregateArgs>(args: Prisma.Subset<T, WmAdvisoryRecordAggregateArgs>): Prisma.PrismaPromise<GetWmAdvisoryRecordAggregateType<T>>;
    groupBy<T extends WmAdvisoryRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WmAdvisoryRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: WmAdvisoryRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WmAdvisoryRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWmAdvisoryRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WmAdvisoryRecordFieldRefs;
}
export interface Prisma__WmAdvisoryRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    wmClientProfile<T extends Prisma.WmClientProfileDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.WmClientProfileDefaultArgs<ExtArgs>>): Prisma.Prisma__WmClientProfileClient<runtime.Types.Result.GetResult<Prisma.$WmClientProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WmAdvisoryRecordFieldRefs {
    readonly id: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly wmClientProfileId: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly recommendation: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly rationale: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly riskNotes: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly shariahNote: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly advisorUserId: Prisma.FieldRef<"WmAdvisoryRecord", 'String'>;
    readonly clientResponse: Prisma.FieldRef<"WmAdvisoryRecord", 'WmAdvisoryResponse'>;
    readonly respondedAt: Prisma.FieldRef<"WmAdvisoryRecord", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"WmAdvisoryRecord", 'DateTime'>;
}
export type WmAdvisoryRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
};
export type WmAdvisoryRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
};
export type WmAdvisoryRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where?: Prisma.WmAdvisoryRecordWhereInput;
    orderBy?: Prisma.WmAdvisoryRecordOrderByWithRelationInput | Prisma.WmAdvisoryRecordOrderByWithRelationInput[];
    cursor?: Prisma.WmAdvisoryRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAdvisoryRecordScalarFieldEnum | Prisma.WmAdvisoryRecordScalarFieldEnum[];
};
export type WmAdvisoryRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where?: Prisma.WmAdvisoryRecordWhereInput;
    orderBy?: Prisma.WmAdvisoryRecordOrderByWithRelationInput | Prisma.WmAdvisoryRecordOrderByWithRelationInput[];
    cursor?: Prisma.WmAdvisoryRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAdvisoryRecordScalarFieldEnum | Prisma.WmAdvisoryRecordScalarFieldEnum[];
};
export type WmAdvisoryRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where?: Prisma.WmAdvisoryRecordWhereInput;
    orderBy?: Prisma.WmAdvisoryRecordOrderByWithRelationInput | Prisma.WmAdvisoryRecordOrderByWithRelationInput[];
    cursor?: Prisma.WmAdvisoryRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WmAdvisoryRecordScalarFieldEnum | Prisma.WmAdvisoryRecordScalarFieldEnum[];
};
export type WmAdvisoryRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAdvisoryRecordCreateInput, Prisma.WmAdvisoryRecordUncheckedCreateInput>;
};
export type WmAdvisoryRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WmAdvisoryRecordCreateManyInput | Prisma.WmAdvisoryRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WmAdvisoryRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    data: Prisma.WmAdvisoryRecordCreateManyInput | Prisma.WmAdvisoryRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WmAdvisoryRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WmAdvisoryRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateInput, Prisma.WmAdvisoryRecordUncheckedUpdateInput>;
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
};
export type WmAdvisoryRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateManyMutationInput, Prisma.WmAdvisoryRecordUncheckedUpdateManyInput>;
    where?: Prisma.WmAdvisoryRecordWhereInput;
    limit?: number;
};
export type WmAdvisoryRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateManyMutationInput, Prisma.WmAdvisoryRecordUncheckedUpdateManyInput>;
    where?: Prisma.WmAdvisoryRecordWhereInput;
    limit?: number;
    include?: Prisma.WmAdvisoryRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WmAdvisoryRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.WmAdvisoryRecordCreateInput, Prisma.WmAdvisoryRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WmAdvisoryRecordUpdateInput, Prisma.WmAdvisoryRecordUncheckedUpdateInput>;
};
export type WmAdvisoryRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
    where: Prisma.WmAdvisoryRecordWhereUniqueInput;
};
export type WmAdvisoryRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WmAdvisoryRecordWhereInput;
    limit?: number;
};
export type WmAdvisoryRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WmAdvisoryRecordSelect<ExtArgs> | null;
    omit?: Prisma.WmAdvisoryRecordOmit<ExtArgs> | null;
    include?: Prisma.WmAdvisoryRecordInclude<ExtArgs> | null;
};
