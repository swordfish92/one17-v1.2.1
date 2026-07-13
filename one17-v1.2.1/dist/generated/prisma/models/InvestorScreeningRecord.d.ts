import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type InvestorScreeningRecordModel = runtime.Types.Result.DefaultSelection<Prisma.$InvestorScreeningRecordPayload>;
export type AggregateInvestorScreeningRecord = {
    _count: InvestorScreeningRecordCountAggregateOutputType | null;
    _min: InvestorScreeningRecordMinAggregateOutputType | null;
    _max: InvestorScreeningRecordMaxAggregateOutputType | null;
};
export type InvestorScreeningRecordMinAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    screenedAt: Date | null;
    searchTermsUsed: string | null;
    result: $Enums.ScreeningResult | null;
    screenerUserId: string | null;
    countersignerUserId: string | null;
    notes: string | null;
};
export type InvestorScreeningRecordMaxAggregateOutputType = {
    id: string | null;
    investorId: string | null;
    screenedAt: Date | null;
    searchTermsUsed: string | null;
    result: $Enums.ScreeningResult | null;
    screenerUserId: string | null;
    countersignerUserId: string | null;
    notes: string | null;
};
export type InvestorScreeningRecordCountAggregateOutputType = {
    id: number;
    investorId: number;
    screenedAt: number;
    listsChecked: number;
    searchTermsUsed: number;
    result: number;
    screenerUserId: number;
    countersignerUserId: number;
    notes: number;
    _all: number;
};
export type InvestorScreeningRecordMinAggregateInputType = {
    id?: true;
    investorId?: true;
    screenedAt?: true;
    searchTermsUsed?: true;
    result?: true;
    screenerUserId?: true;
    countersignerUserId?: true;
    notes?: true;
};
export type InvestorScreeningRecordMaxAggregateInputType = {
    id?: true;
    investorId?: true;
    screenedAt?: true;
    searchTermsUsed?: true;
    result?: true;
    screenerUserId?: true;
    countersignerUserId?: true;
    notes?: true;
};
export type InvestorScreeningRecordCountAggregateInputType = {
    id?: true;
    investorId?: true;
    screenedAt?: true;
    listsChecked?: true;
    searchTermsUsed?: true;
    result?: true;
    screenerUserId?: true;
    countersignerUserId?: true;
    notes?: true;
    _all?: true;
};
export type InvestorScreeningRecordAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorScreeningRecordWhereInput;
    orderBy?: Prisma.InvestorScreeningRecordOrderByWithRelationInput | Prisma.InvestorScreeningRecordOrderByWithRelationInput[];
    cursor?: Prisma.InvestorScreeningRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | InvestorScreeningRecordCountAggregateInputType;
    _min?: InvestorScreeningRecordMinAggregateInputType;
    _max?: InvestorScreeningRecordMaxAggregateInputType;
};
export type GetInvestorScreeningRecordAggregateType<T extends InvestorScreeningRecordAggregateArgs> = {
    [P in keyof T & keyof AggregateInvestorScreeningRecord]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateInvestorScreeningRecord[P]> : Prisma.GetScalarType<T[P], AggregateInvestorScreeningRecord[P]>;
};
export type InvestorScreeningRecordGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorScreeningRecordWhereInput;
    orderBy?: Prisma.InvestorScreeningRecordOrderByWithAggregationInput | Prisma.InvestorScreeningRecordOrderByWithAggregationInput[];
    by: Prisma.InvestorScreeningRecordScalarFieldEnum[] | Prisma.InvestorScreeningRecordScalarFieldEnum;
    having?: Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvestorScreeningRecordCountAggregateInputType | true;
    _min?: InvestorScreeningRecordMinAggregateInputType;
    _max?: InvestorScreeningRecordMaxAggregateInputType;
};
export type InvestorScreeningRecordGroupByOutputType = {
    id: string;
    investorId: string;
    screenedAt: Date;
    listsChecked: runtime.JsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    countersignerUserId: string | null;
    notes: string | null;
    _count: InvestorScreeningRecordCountAggregateOutputType | null;
    _min: InvestorScreeningRecordMinAggregateOutputType | null;
    _max: InvestorScreeningRecordMaxAggregateOutputType | null;
};
export type GetInvestorScreeningRecordGroupByPayload<T extends InvestorScreeningRecordGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<InvestorScreeningRecordGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof InvestorScreeningRecordGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], InvestorScreeningRecordGroupByOutputType[P]> : Prisma.GetScalarType<T[P], InvestorScreeningRecordGroupByOutputType[P]>;
}>>;
export type InvestorScreeningRecordWhereInput = {
    AND?: Prisma.InvestorScreeningRecordWhereInput | Prisma.InvestorScreeningRecordWhereInput[];
    OR?: Prisma.InvestorScreeningRecordWhereInput[];
    NOT?: Prisma.InvestorScreeningRecordWhereInput | Prisma.InvestorScreeningRecordWhereInput[];
    id?: Prisma.UuidFilter<"InvestorScreeningRecord"> | string;
    investorId?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    screenedAt?: Prisma.DateTimeFilter<"InvestorScreeningRecord"> | Date | string;
    listsChecked?: Prisma.JsonFilter<"InvestorScreeningRecord">;
    searchTermsUsed?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    result?: Prisma.EnumScreeningResultFilter<"InvestorScreeningRecord"> | $Enums.ScreeningResult;
    screenerUserId?: Prisma.UuidFilter<"InvestorScreeningRecord"> | string;
    countersignerUserId?: Prisma.UuidNullableFilter<"InvestorScreeningRecord"> | string | null;
    notes?: Prisma.StringNullableFilter<"InvestorScreeningRecord"> | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    screener?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    countersigner?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type InvestorScreeningRecordOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    listsChecked?: Prisma.SortOrder;
    searchTermsUsed?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    screenerUserId?: Prisma.SortOrder;
    countersignerUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    screener?: Prisma.AppUserOrderByWithRelationInput;
    countersigner?: Prisma.AppUserOrderByWithRelationInput;
};
export type InvestorScreeningRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.InvestorScreeningRecordWhereInput | Prisma.InvestorScreeningRecordWhereInput[];
    OR?: Prisma.InvestorScreeningRecordWhereInput[];
    NOT?: Prisma.InvestorScreeningRecordWhereInput | Prisma.InvestorScreeningRecordWhereInput[];
    investorId?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    screenedAt?: Prisma.DateTimeFilter<"InvestorScreeningRecord"> | Date | string;
    listsChecked?: Prisma.JsonFilter<"InvestorScreeningRecord">;
    searchTermsUsed?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    result?: Prisma.EnumScreeningResultFilter<"InvestorScreeningRecord"> | $Enums.ScreeningResult;
    screenerUserId?: Prisma.UuidFilter<"InvestorScreeningRecord"> | string;
    countersignerUserId?: Prisma.UuidNullableFilter<"InvestorScreeningRecord"> | string | null;
    notes?: Prisma.StringNullableFilter<"InvestorScreeningRecord"> | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    screener?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    countersigner?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type InvestorScreeningRecordOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    listsChecked?: Prisma.SortOrder;
    searchTermsUsed?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    screenerUserId?: Prisma.SortOrder;
    countersignerUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.InvestorScreeningRecordCountOrderByAggregateInput;
    _max?: Prisma.InvestorScreeningRecordMaxOrderByAggregateInput;
    _min?: Prisma.InvestorScreeningRecordMinOrderByAggregateInput;
};
export type InvestorScreeningRecordScalarWhereWithAggregatesInput = {
    AND?: Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput | Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput[];
    OR?: Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput[];
    NOT?: Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput | Prisma.InvestorScreeningRecordScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"InvestorScreeningRecord"> | string;
    investorId?: Prisma.StringWithAggregatesFilter<"InvestorScreeningRecord"> | string;
    screenedAt?: Prisma.DateTimeWithAggregatesFilter<"InvestorScreeningRecord"> | Date | string;
    listsChecked?: Prisma.JsonWithAggregatesFilter<"InvestorScreeningRecord">;
    searchTermsUsed?: Prisma.StringWithAggregatesFilter<"InvestorScreeningRecord"> | string;
    result?: Prisma.EnumScreeningResultWithAggregatesFilter<"InvestorScreeningRecord"> | $Enums.ScreeningResult;
    screenerUserId?: Prisma.UuidWithAggregatesFilter<"InvestorScreeningRecord"> | string;
    countersignerUserId?: Prisma.UuidNullableWithAggregatesFilter<"InvestorScreeningRecord"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"InvestorScreeningRecord"> | string | null;
};
export type InvestorScreeningRecordCreateInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    notes?: string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutScreeningRecordsInput;
    screener: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsScreenedInput;
    countersigner?: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsCountersignedInput;
};
export type InvestorScreeningRecordUncheckedCreateInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutScreeningRecordsNestedInput;
    screener?: Prisma.AppUserUpdateOneRequiredWithoutScreeningRecordsScreenedNestedInput;
    countersigner?: Prisma.AppUserUpdateOneWithoutScreeningRecordsCountersignedNestedInput;
};
export type InvestorScreeningRecordUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordCreateManyInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordListRelationFilter = {
    every?: Prisma.InvestorScreeningRecordWhereInput;
    some?: Prisma.InvestorScreeningRecordWhereInput;
    none?: Prisma.InvestorScreeningRecordWhereInput;
};
export type InvestorScreeningRecordOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type InvestorScreeningRecordCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    listsChecked?: Prisma.SortOrder;
    searchTermsUsed?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    screenerUserId?: Prisma.SortOrder;
    countersignerUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InvestorScreeningRecordMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    searchTermsUsed?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    screenerUserId?: Prisma.SortOrder;
    countersignerUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InvestorScreeningRecordMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    investorId?: Prisma.SortOrder;
    screenedAt?: Prisma.SortOrder;
    searchTermsUsed?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    screenerUserId?: Prisma.SortOrder;
    countersignerUserId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type InvestorScreeningRecordCreateNestedManyWithoutScreenerInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput> | Prisma.InvestorScreeningRecordCreateWithoutScreenerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyScreenerInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordCreateNestedManyWithoutCountersignerInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput> | Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyCountersignerInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordUncheckedCreateNestedManyWithoutScreenerInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput> | Prisma.InvestorScreeningRecordCreateWithoutScreenerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyScreenerInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordUncheckedCreateNestedManyWithoutCountersignerInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput> | Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyCountersignerInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordUpdateManyWithoutScreenerNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput> | Prisma.InvestorScreeningRecordCreateWithoutScreenerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutScreenerInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutScreenerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyScreenerInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutScreenerInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutScreenerInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutScreenerInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutScreenerInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type InvestorScreeningRecordUpdateManyWithoutCountersignerNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput> | Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutCountersignerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyCountersignerInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutCountersignerInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutCountersignerInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutScreenerNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput> | Prisma.InvestorScreeningRecordCreateWithoutScreenerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutScreenerInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutScreenerInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutScreenerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyScreenerInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutScreenerInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutScreenerInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutScreenerInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutScreenerInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutCountersignerNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput> | Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutCountersignerInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyCountersignerInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutCountersignerInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutCountersignerInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutCountersignerInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type InvestorScreeningRecordCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput> | Prisma.InvestorScreeningRecordCreateWithoutInvestorInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordUncheckedCreateNestedManyWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput> | Prisma.InvestorScreeningRecordCreateWithoutInvestorInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyInvestorInputEnvelope;
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
};
export type InvestorScreeningRecordUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput> | Prisma.InvestorScreeningRecordCreateWithoutInvestorInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput> | Prisma.InvestorScreeningRecordCreateWithoutInvestorInput[] | Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput[];
    connectOrCreate?: Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput | Prisma.InvestorScreeningRecordCreateOrConnectWithoutInvestorInput[];
    upsert?: Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutInvestorInput | Prisma.InvestorScreeningRecordUpsertWithWhereUniqueWithoutInvestorInput[];
    createMany?: Prisma.InvestorScreeningRecordCreateManyInvestorInputEnvelope;
    set?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    disconnect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    delete?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    connect?: Prisma.InvestorScreeningRecordWhereUniqueInput | Prisma.InvestorScreeningRecordWhereUniqueInput[];
    update?: Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutInvestorInput | Prisma.InvestorScreeningRecordUpdateWithWhereUniqueWithoutInvestorInput[];
    updateMany?: Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutInvestorInput | Prisma.InvestorScreeningRecordUpdateManyWithWhereWithoutInvestorInput[];
    deleteMany?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
};
export type EnumScreeningResultFieldUpdateOperationsInput = {
    set?: $Enums.ScreeningResult;
};
export type InvestorScreeningRecordCreateWithoutScreenerInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    notes?: string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutScreeningRecordsInput;
    countersigner?: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsCountersignedInput;
};
export type InvestorScreeningRecordUncheckedCreateWithoutScreenerInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordCreateOrConnectWithoutScreenerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput>;
};
export type InvestorScreeningRecordCreateManyScreenerInputEnvelope = {
    data: Prisma.InvestorScreeningRecordCreateManyScreenerInput | Prisma.InvestorScreeningRecordCreateManyScreenerInput[];
    skipDuplicates?: boolean;
};
export type InvestorScreeningRecordCreateWithoutCountersignerInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    notes?: string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutScreeningRecordsInput;
    screener: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsScreenedInput;
};
export type InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    notes?: string | null;
};
export type InvestorScreeningRecordCreateOrConnectWithoutCountersignerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput>;
};
export type InvestorScreeningRecordCreateManyCountersignerInputEnvelope = {
    data: Prisma.InvestorScreeningRecordCreateManyCountersignerInput | Prisma.InvestorScreeningRecordCreateManyCountersignerInput[];
    skipDuplicates?: boolean;
};
export type InvestorScreeningRecordUpsertWithWhereUniqueWithoutScreenerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutScreenerInput>;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutScreenerInput>;
};
export type InvestorScreeningRecordUpdateWithWhereUniqueWithoutScreenerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutScreenerInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutScreenerInput>;
};
export type InvestorScreeningRecordUpdateManyWithWhereWithoutScreenerInput = {
    where: Prisma.InvestorScreeningRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateManyMutationInput, Prisma.InvestorScreeningRecordUncheckedUpdateManyWithoutScreenerInput>;
};
export type InvestorScreeningRecordScalarWhereInput = {
    AND?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
    OR?: Prisma.InvestorScreeningRecordScalarWhereInput[];
    NOT?: Prisma.InvestorScreeningRecordScalarWhereInput | Prisma.InvestorScreeningRecordScalarWhereInput[];
    id?: Prisma.UuidFilter<"InvestorScreeningRecord"> | string;
    investorId?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    screenedAt?: Prisma.DateTimeFilter<"InvestorScreeningRecord"> | Date | string;
    listsChecked?: Prisma.JsonFilter<"InvestorScreeningRecord">;
    searchTermsUsed?: Prisma.StringFilter<"InvestorScreeningRecord"> | string;
    result?: Prisma.EnumScreeningResultFilter<"InvestorScreeningRecord"> | $Enums.ScreeningResult;
    screenerUserId?: Prisma.UuidFilter<"InvestorScreeningRecord"> | string;
    countersignerUserId?: Prisma.UuidNullableFilter<"InvestorScreeningRecord"> | string | null;
    notes?: Prisma.StringNullableFilter<"InvestorScreeningRecord"> | string | null;
};
export type InvestorScreeningRecordUpsertWithWhereUniqueWithoutCountersignerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutCountersignerInput>;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutCountersignerInput>;
};
export type InvestorScreeningRecordUpdateWithWhereUniqueWithoutCountersignerInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutCountersignerInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutCountersignerInput>;
};
export type InvestorScreeningRecordUpdateManyWithWhereWithoutCountersignerInput = {
    where: Prisma.InvestorScreeningRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateManyMutationInput, Prisma.InvestorScreeningRecordUncheckedUpdateManyWithoutCountersignerInput>;
};
export type InvestorScreeningRecordCreateWithoutInvestorInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    notes?: string | null;
    screener: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsScreenedInput;
    countersigner?: Prisma.AppUserCreateNestedOneWithoutScreeningRecordsCountersignedInput;
};
export type InvestorScreeningRecordUncheckedCreateWithoutInvestorInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordCreateOrConnectWithoutInvestorInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput>;
};
export type InvestorScreeningRecordCreateManyInvestorInputEnvelope = {
    data: Prisma.InvestorScreeningRecordCreateManyInvestorInput | Prisma.InvestorScreeningRecordCreateManyInvestorInput[];
    skipDuplicates?: boolean;
};
export type InvestorScreeningRecordUpsertWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    update: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedCreateWithoutInvestorInput>;
};
export type InvestorScreeningRecordUpdateWithWhereUniqueWithoutInvestorInput = {
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateWithoutInvestorInput, Prisma.InvestorScreeningRecordUncheckedUpdateWithoutInvestorInput>;
};
export type InvestorScreeningRecordUpdateManyWithWhereWithoutInvestorInput = {
    where: Prisma.InvestorScreeningRecordScalarWhereInput;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateManyMutationInput, Prisma.InvestorScreeningRecordUncheckedUpdateManyWithoutInvestorInput>;
};
export type InvestorScreeningRecordCreateManyScreenerInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordCreateManyCountersignerInput = {
    id?: string;
    investorId: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    notes?: string | null;
};
export type InvestorScreeningRecordUpdateWithoutScreenerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutScreeningRecordsNestedInput;
    countersigner?: Prisma.AppUserUpdateOneWithoutScreeningRecordsCountersignedNestedInput;
};
export type InvestorScreeningRecordUncheckedUpdateWithoutScreenerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutScreenerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordUpdateWithoutCountersignerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutScreeningRecordsNestedInput;
    screener?: Prisma.AppUserUpdateOneRequiredWithoutScreeningRecordsScreenedNestedInput;
};
export type InvestorScreeningRecordUncheckedUpdateWithoutCountersignerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutCountersignerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordCreateManyInvestorInput = {
    id?: string;
    screenedAt?: Date | string;
    listsChecked: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed: string;
    result: $Enums.ScreeningResult;
    screenerUserId: string;
    countersignerUserId?: string | null;
    notes?: string | null;
};
export type InvestorScreeningRecordUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    screener?: Prisma.AppUserUpdateOneRequiredWithoutScreeningRecordsScreenedNestedInput;
    countersigner?: Prisma.AppUserUpdateOneWithoutScreeningRecordsCountersignedNestedInput;
};
export type InvestorScreeningRecordUncheckedUpdateWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordUncheckedUpdateManyWithoutInvestorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    screenedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    listsChecked?: Prisma.JsonNullValueInput | runtime.InputJsonValue;
    searchTermsUsed?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumScreeningResultFieldUpdateOperationsInput | $Enums.ScreeningResult;
    screenerUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    countersignerUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type InvestorScreeningRecordSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    screenedAt?: boolean;
    listsChecked?: boolean;
    searchTermsUsed?: boolean;
    result?: boolean;
    screenerUserId?: boolean;
    countersignerUserId?: boolean;
    notes?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
}, ExtArgs["result"]["investorScreeningRecord"]>;
export type InvestorScreeningRecordSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    screenedAt?: boolean;
    listsChecked?: boolean;
    searchTermsUsed?: boolean;
    result?: boolean;
    screenerUserId?: boolean;
    countersignerUserId?: boolean;
    notes?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
}, ExtArgs["result"]["investorScreeningRecord"]>;
export type InvestorScreeningRecordSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    investorId?: boolean;
    screenedAt?: boolean;
    listsChecked?: boolean;
    searchTermsUsed?: boolean;
    result?: boolean;
    screenerUserId?: boolean;
    countersignerUserId?: boolean;
    notes?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
}, ExtArgs["result"]["investorScreeningRecord"]>;
export type InvestorScreeningRecordSelectScalar = {
    id?: boolean;
    investorId?: boolean;
    screenedAt?: boolean;
    listsChecked?: boolean;
    searchTermsUsed?: boolean;
    result?: boolean;
    screenerUserId?: boolean;
    countersignerUserId?: boolean;
    notes?: boolean;
};
export type InvestorScreeningRecordOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "investorId" | "screenedAt" | "listsChecked" | "searchTermsUsed" | "result" | "screenerUserId" | "countersignerUserId" | "notes", ExtArgs["result"]["investorScreeningRecord"]>;
export type InvestorScreeningRecordInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
};
export type InvestorScreeningRecordIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
};
export type InvestorScreeningRecordIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    screener?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    countersigner?: boolean | Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>;
};
export type $InvestorScreeningRecordPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "InvestorScreeningRecord";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        screener: Prisma.$AppUserPayload<ExtArgs>;
        countersigner: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        investorId: string;
        screenedAt: Date;
        listsChecked: runtime.JsonValue;
        searchTermsUsed: string;
        result: $Enums.ScreeningResult;
        screenerUserId: string;
        countersignerUserId: string | null;
        notes: string | null;
    }, ExtArgs["result"]["investorScreeningRecord"]>;
    composites: {};
};
export type InvestorScreeningRecordGetPayload<S extends boolean | null | undefined | InvestorScreeningRecordDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload, S>;
export type InvestorScreeningRecordCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<InvestorScreeningRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: InvestorScreeningRecordCountAggregateInputType | true;
};
export interface InvestorScreeningRecordDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['InvestorScreeningRecord'];
        meta: {
            name: 'InvestorScreeningRecord';
        };
    };
    findUnique<T extends InvestorScreeningRecordFindUniqueArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordFindUniqueArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends InvestorScreeningRecordFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends InvestorScreeningRecordFindFirstArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordFindFirstArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends InvestorScreeningRecordFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends InvestorScreeningRecordFindManyArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends InvestorScreeningRecordCreateArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordCreateArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends InvestorScreeningRecordCreateManyArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends InvestorScreeningRecordCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends InvestorScreeningRecordDeleteArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordDeleteArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends InvestorScreeningRecordUpdateArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordUpdateArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends InvestorScreeningRecordDeleteManyArgs>(args?: Prisma.SelectSubset<T, InvestorScreeningRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends InvestorScreeningRecordUpdateManyArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends InvestorScreeningRecordUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends InvestorScreeningRecordUpsertArgs>(args: Prisma.SelectSubset<T, InvestorScreeningRecordUpsertArgs<ExtArgs>>): Prisma.Prisma__InvestorScreeningRecordClient<runtime.Types.Result.GetResult<Prisma.$InvestorScreeningRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends InvestorScreeningRecordCountArgs>(args?: Prisma.Subset<T, InvestorScreeningRecordCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], InvestorScreeningRecordCountAggregateOutputType> : number>;
    aggregate<T extends InvestorScreeningRecordAggregateArgs>(args: Prisma.Subset<T, InvestorScreeningRecordAggregateArgs>): Prisma.PrismaPromise<GetInvestorScreeningRecordAggregateType<T>>;
    groupBy<T extends InvestorScreeningRecordGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: InvestorScreeningRecordGroupByArgs['orderBy'];
    } : {
        orderBy?: InvestorScreeningRecordGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, InvestorScreeningRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInvestorScreeningRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: InvestorScreeningRecordFieldRefs;
}
export interface Prisma__InvestorScreeningRecordClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    screener<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    countersigner<T extends Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorScreeningRecord$countersignerArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface InvestorScreeningRecordFieldRefs {
    readonly id: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
    readonly investorId: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
    readonly screenedAt: Prisma.FieldRef<"InvestorScreeningRecord", 'DateTime'>;
    readonly listsChecked: Prisma.FieldRef<"InvestorScreeningRecord", 'Json'>;
    readonly searchTermsUsed: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
    readonly result: Prisma.FieldRef<"InvestorScreeningRecord", 'ScreeningResult'>;
    readonly screenerUserId: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
    readonly countersignerUserId: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
    readonly notes: Prisma.FieldRef<"InvestorScreeningRecord", 'String'>;
}
export type InvestorScreeningRecordFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
};
export type InvestorScreeningRecordFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
};
export type InvestorScreeningRecordFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where?: Prisma.InvestorScreeningRecordWhereInput;
    orderBy?: Prisma.InvestorScreeningRecordOrderByWithRelationInput | Prisma.InvestorScreeningRecordOrderByWithRelationInput[];
    cursor?: Prisma.InvestorScreeningRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorScreeningRecordScalarFieldEnum | Prisma.InvestorScreeningRecordScalarFieldEnum[];
};
export type InvestorScreeningRecordFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where?: Prisma.InvestorScreeningRecordWhereInput;
    orderBy?: Prisma.InvestorScreeningRecordOrderByWithRelationInput | Prisma.InvestorScreeningRecordOrderByWithRelationInput[];
    cursor?: Prisma.InvestorScreeningRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorScreeningRecordScalarFieldEnum | Prisma.InvestorScreeningRecordScalarFieldEnum[];
};
export type InvestorScreeningRecordFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where?: Prisma.InvestorScreeningRecordWhereInput;
    orderBy?: Prisma.InvestorScreeningRecordOrderByWithRelationInput | Prisma.InvestorScreeningRecordOrderByWithRelationInput[];
    cursor?: Prisma.InvestorScreeningRecordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.InvestorScreeningRecordScalarFieldEnum | Prisma.InvestorScreeningRecordScalarFieldEnum[];
};
export type InvestorScreeningRecordCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordCreateInput, Prisma.InvestorScreeningRecordUncheckedCreateInput>;
};
export type InvestorScreeningRecordCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.InvestorScreeningRecordCreateManyInput | Prisma.InvestorScreeningRecordCreateManyInput[];
    skipDuplicates?: boolean;
};
export type InvestorScreeningRecordCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    data: Prisma.InvestorScreeningRecordCreateManyInput | Prisma.InvestorScreeningRecordCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.InvestorScreeningRecordIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type InvestorScreeningRecordUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateInput, Prisma.InvestorScreeningRecordUncheckedUpdateInput>;
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
};
export type InvestorScreeningRecordUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateManyMutationInput, Prisma.InvestorScreeningRecordUncheckedUpdateManyInput>;
    where?: Prisma.InvestorScreeningRecordWhereInput;
    limit?: number;
};
export type InvestorScreeningRecordUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateManyMutationInput, Prisma.InvestorScreeningRecordUncheckedUpdateManyInput>;
    where?: Prisma.InvestorScreeningRecordWhereInput;
    limit?: number;
    include?: Prisma.InvestorScreeningRecordIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type InvestorScreeningRecordUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
    create: Prisma.XOR<Prisma.InvestorScreeningRecordCreateInput, Prisma.InvestorScreeningRecordUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.InvestorScreeningRecordUpdateInput, Prisma.InvestorScreeningRecordUncheckedUpdateInput>;
};
export type InvestorScreeningRecordDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
    where: Prisma.InvestorScreeningRecordWhereUniqueInput;
};
export type InvestorScreeningRecordDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.InvestorScreeningRecordWhereInput;
    limit?: number;
};
export type InvestorScreeningRecord$countersignerArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type InvestorScreeningRecordDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.InvestorScreeningRecordSelect<ExtArgs> | null;
    omit?: Prisma.InvestorScreeningRecordOmit<ExtArgs> | null;
    include?: Prisma.InvestorScreeningRecordInclude<ExtArgs> | null;
};
