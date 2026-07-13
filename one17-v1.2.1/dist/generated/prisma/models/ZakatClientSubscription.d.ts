import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ZakatClientSubscriptionModel = runtime.Types.Result.DefaultSelection<Prisma.$ZakatClientSubscriptionPayload>;
export type AggregateZakatClientSubscription = {
    _count: ZakatClientSubscriptionCountAggregateOutputType | null;
    _min: ZakatClientSubscriptionMinAggregateOutputType | null;
    _max: ZakatClientSubscriptionMaxAggregateOutputType | null;
};
export type ZakatClientSubscriptionMinAggregateOutputType = {
    investorId: string | null;
    isActive: boolean | null;
    rateBasisElection: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian: Date | null;
    zakatAnniversaryHijri: string | null;
    activatedByUserId: string | null;
    activatedAt: Date | null;
    deactivatedByUserId: string | null;
    deactivatedAt: Date | null;
};
export type ZakatClientSubscriptionMaxAggregateOutputType = {
    investorId: string | null;
    isActive: boolean | null;
    rateBasisElection: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian: Date | null;
    zakatAnniversaryHijri: string | null;
    activatedByUserId: string | null;
    activatedAt: Date | null;
    deactivatedByUserId: string | null;
    deactivatedAt: Date | null;
};
export type ZakatClientSubscriptionCountAggregateOutputType = {
    investorId: number;
    isActive: number;
    rateBasisElection: number;
    zakatAnniversaryGregorian: number;
    zakatAnniversaryHijri: number;
    activatedByUserId: number;
    activatedAt: number;
    deactivatedByUserId: number;
    deactivatedAt: number;
    _all: number;
};
export type ZakatClientSubscriptionMinAggregateInputType = {
    investorId?: true;
    isActive?: true;
    rateBasisElection?: true;
    zakatAnniversaryGregorian?: true;
    zakatAnniversaryHijri?: true;
    activatedByUserId?: true;
    activatedAt?: true;
    deactivatedByUserId?: true;
    deactivatedAt?: true;
};
export type ZakatClientSubscriptionMaxAggregateInputType = {
    investorId?: true;
    isActive?: true;
    rateBasisElection?: true;
    zakatAnniversaryGregorian?: true;
    zakatAnniversaryHijri?: true;
    activatedByUserId?: true;
    activatedAt?: true;
    deactivatedByUserId?: true;
    deactivatedAt?: true;
};
export type ZakatClientSubscriptionCountAggregateInputType = {
    investorId?: true;
    isActive?: true;
    rateBasisElection?: true;
    zakatAnniversaryGregorian?: true;
    zakatAnniversaryHijri?: true;
    activatedByUserId?: true;
    activatedAt?: true;
    deactivatedByUserId?: true;
    deactivatedAt?: true;
    _all?: true;
};
export type ZakatClientSubscriptionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    orderBy?: Prisma.ZakatClientSubscriptionOrderByWithRelationInput | Prisma.ZakatClientSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ZakatClientSubscriptionCountAggregateInputType;
    _min?: ZakatClientSubscriptionMinAggregateInputType;
    _max?: ZakatClientSubscriptionMaxAggregateInputType;
};
export type GetZakatClientSubscriptionAggregateType<T extends ZakatClientSubscriptionAggregateArgs> = {
    [P in keyof T & keyof AggregateZakatClientSubscription]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateZakatClientSubscription[P]> : Prisma.GetScalarType<T[P], AggregateZakatClientSubscription[P]>;
};
export type ZakatClientSubscriptionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    orderBy?: Prisma.ZakatClientSubscriptionOrderByWithAggregationInput | Prisma.ZakatClientSubscriptionOrderByWithAggregationInput[];
    by: Prisma.ZakatClientSubscriptionScalarFieldEnum[] | Prisma.ZakatClientSubscriptionScalarFieldEnum;
    having?: Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ZakatClientSubscriptionCountAggregateInputType | true;
    _min?: ZakatClientSubscriptionMinAggregateInputType;
    _max?: ZakatClientSubscriptionMaxAggregateInputType;
};
export type ZakatClientSubscriptionGroupByOutputType = {
    investorId: string;
    isActive: boolean;
    rateBasisElection: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian: Date | null;
    zakatAnniversaryHijri: string | null;
    activatedByUserId: string;
    activatedAt: Date;
    deactivatedByUserId: string | null;
    deactivatedAt: Date | null;
    _count: ZakatClientSubscriptionCountAggregateOutputType | null;
    _min: ZakatClientSubscriptionMinAggregateOutputType | null;
    _max: ZakatClientSubscriptionMaxAggregateOutputType | null;
};
export type GetZakatClientSubscriptionGroupByPayload<T extends ZakatClientSubscriptionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ZakatClientSubscriptionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ZakatClientSubscriptionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ZakatClientSubscriptionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ZakatClientSubscriptionGroupByOutputType[P]>;
}>>;
export type ZakatClientSubscriptionWhereInput = {
    AND?: Prisma.ZakatClientSubscriptionWhereInput | Prisma.ZakatClientSubscriptionWhereInput[];
    OR?: Prisma.ZakatClientSubscriptionWhereInput[];
    NOT?: Prisma.ZakatClientSubscriptionWhereInput | Prisma.ZakatClientSubscriptionWhereInput[];
    investorId?: Prisma.StringFilter<"ZakatClientSubscription"> | string;
    isActive?: Prisma.BoolFilter<"ZakatClientSubscription"> | boolean;
    rateBasisElection?: Prisma.EnumZakatRateBasisNullableFilter<"ZakatClientSubscription"> | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.DateTimeNullableFilter<"ZakatClientSubscription"> | Date | string | null;
    zakatAnniversaryHijri?: Prisma.StringNullableFilter<"ZakatClientSubscription"> | string | null;
    activatedByUserId?: Prisma.UuidFilter<"ZakatClientSubscription"> | string;
    activatedAt?: Prisma.DateTimeFilter<"ZakatClientSubscription"> | Date | string;
    deactivatedByUserId?: Prisma.UuidNullableFilter<"ZakatClientSubscription"> | string | null;
    deactivatedAt?: Prisma.DateTimeNullableFilter<"ZakatClientSubscription"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    runs?: Prisma.ZakatAssessmentRunListRelationFilter;
};
export type ZakatClientSubscriptionOrderByWithRelationInput = {
    investorId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    rateBasisElection?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatAnniversaryGregorian?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatAnniversaryHijri?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    deactivatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    investor?: Prisma.InvestorOrderByWithRelationInput;
    runs?: Prisma.ZakatAssessmentRunOrderByRelationAggregateInput;
};
export type ZakatClientSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    investorId?: string;
    AND?: Prisma.ZakatClientSubscriptionWhereInput | Prisma.ZakatClientSubscriptionWhereInput[];
    OR?: Prisma.ZakatClientSubscriptionWhereInput[];
    NOT?: Prisma.ZakatClientSubscriptionWhereInput | Prisma.ZakatClientSubscriptionWhereInput[];
    isActive?: Prisma.BoolFilter<"ZakatClientSubscription"> | boolean;
    rateBasisElection?: Prisma.EnumZakatRateBasisNullableFilter<"ZakatClientSubscription"> | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.DateTimeNullableFilter<"ZakatClientSubscription"> | Date | string | null;
    zakatAnniversaryHijri?: Prisma.StringNullableFilter<"ZakatClientSubscription"> | string | null;
    activatedByUserId?: Prisma.UuidFilter<"ZakatClientSubscription"> | string;
    activatedAt?: Prisma.DateTimeFilter<"ZakatClientSubscription"> | Date | string;
    deactivatedByUserId?: Prisma.UuidNullableFilter<"ZakatClientSubscription"> | string | null;
    deactivatedAt?: Prisma.DateTimeNullableFilter<"ZakatClientSubscription"> | Date | string | null;
    investor?: Prisma.XOR<Prisma.InvestorScalarRelationFilter, Prisma.InvestorWhereInput>;
    runs?: Prisma.ZakatAssessmentRunListRelationFilter;
}, "investorId">;
export type ZakatClientSubscriptionOrderByWithAggregationInput = {
    investorId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    rateBasisElection?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatAnniversaryGregorian?: Prisma.SortOrderInput | Prisma.SortOrder;
    zakatAnniversaryHijri?: Prisma.SortOrderInput | Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    deactivatedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.ZakatClientSubscriptionCountOrderByAggregateInput;
    _max?: Prisma.ZakatClientSubscriptionMaxOrderByAggregateInput;
    _min?: Prisma.ZakatClientSubscriptionMinOrderByAggregateInput;
};
export type ZakatClientSubscriptionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput | Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput | Prisma.ZakatClientSubscriptionScalarWhereWithAggregatesInput[];
    investorId?: Prisma.StringWithAggregatesFilter<"ZakatClientSubscription"> | string;
    isActive?: Prisma.BoolWithAggregatesFilter<"ZakatClientSubscription"> | boolean;
    rateBasisElection?: Prisma.EnumZakatRateBasisNullableWithAggregatesFilter<"ZakatClientSubscription"> | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatClientSubscription"> | Date | string | null;
    zakatAnniversaryHijri?: Prisma.StringNullableWithAggregatesFilter<"ZakatClientSubscription"> | string | null;
    activatedByUserId?: Prisma.UuidWithAggregatesFilter<"ZakatClientSubscription"> | string;
    activatedAt?: Prisma.DateTimeWithAggregatesFilter<"ZakatClientSubscription"> | Date | string;
    deactivatedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"ZakatClientSubscription"> | string | null;
    deactivatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ZakatClientSubscription"> | Date | string | null;
};
export type ZakatClientSubscriptionCreateInput = {
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutZakatSubscriptionInput;
    runs?: Prisma.ZakatAssessmentRunCreateNestedManyWithoutSubscriptionInput;
};
export type ZakatClientSubscriptionUncheckedCreateInput = {
    investorId: string;
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
    runs?: Prisma.ZakatAssessmentRunUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type ZakatClientSubscriptionUpdateInput = {
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutZakatSubscriptionNestedInput;
    runs?: Prisma.ZakatAssessmentRunUpdateManyWithoutSubscriptionNestedInput;
};
export type ZakatClientSubscriptionUncheckedUpdateInput = {
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runs?: Prisma.ZakatAssessmentRunUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type ZakatClientSubscriptionCreateManyInput = {
    investorId: string;
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
};
export type ZakatClientSubscriptionUpdateManyMutationInput = {
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatClientSubscriptionUncheckedUpdateManyInput = {
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatClientSubscriptionNullableScalarRelationFilter = {
    is?: Prisma.ZakatClientSubscriptionWhereInput | null;
    isNot?: Prisma.ZakatClientSubscriptionWhereInput | null;
};
export type ZakatClientSubscriptionCountOrderByAggregateInput = {
    investorId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    rateBasisElection?: Prisma.SortOrder;
    zakatAnniversaryGregorian?: Prisma.SortOrder;
    zakatAnniversaryHijri?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    deactivatedByUserId?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
};
export type ZakatClientSubscriptionMaxOrderByAggregateInput = {
    investorId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    rateBasisElection?: Prisma.SortOrder;
    zakatAnniversaryGregorian?: Prisma.SortOrder;
    zakatAnniversaryHijri?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    deactivatedByUserId?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
};
export type ZakatClientSubscriptionMinOrderByAggregateInput = {
    investorId?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    rateBasisElection?: Prisma.SortOrder;
    zakatAnniversaryGregorian?: Prisma.SortOrder;
    zakatAnniversaryHijri?: Prisma.SortOrder;
    activatedByUserId?: Prisma.SortOrder;
    activatedAt?: Prisma.SortOrder;
    deactivatedByUserId?: Prisma.SortOrder;
    deactivatedAt?: Prisma.SortOrder;
};
export type ZakatClientSubscriptionScalarRelationFilter = {
    is?: Prisma.ZakatClientSubscriptionWhereInput;
    isNot?: Prisma.ZakatClientSubscriptionWhereInput;
};
export type ZakatClientSubscriptionCreateNestedOneWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutInvestorInput;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionUncheckedCreateNestedOneWithoutInvestorInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutInvestorInput;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionUpdateOneWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutInvestorInput;
    upsert?: Prisma.ZakatClientSubscriptionUpsertWithoutInvestorInput;
    disconnect?: Prisma.ZakatClientSubscriptionWhereInput | boolean;
    delete?: Prisma.ZakatClientSubscriptionWhereInput | boolean;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateToOneWithWhereWithoutInvestorInput, Prisma.ZakatClientSubscriptionUpdateWithoutInvestorInput>, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutInvestorInput>;
};
export type ZakatClientSubscriptionUncheckedUpdateOneWithoutInvestorNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutInvestorInput;
    upsert?: Prisma.ZakatClientSubscriptionUpsertWithoutInvestorInput;
    disconnect?: Prisma.ZakatClientSubscriptionWhereInput | boolean;
    delete?: Prisma.ZakatClientSubscriptionWhereInput | boolean;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateToOneWithWhereWithoutInvestorInput, Prisma.ZakatClientSubscriptionUpdateWithoutInvestorInput>, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutInvestorInput>;
};
export type NullableEnumZakatRateBasisFieldUpdateOperationsInput = {
    set?: $Enums.ZakatRateBasis | null;
};
export type ZakatClientSubscriptionCreateNestedOneWithoutRunsInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutRunsInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutRunsInput;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionUpdateOneRequiredWithoutRunsNestedInput = {
    create?: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutRunsInput>;
    connectOrCreate?: Prisma.ZakatClientSubscriptionCreateOrConnectWithoutRunsInput;
    upsert?: Prisma.ZakatClientSubscriptionUpsertWithoutRunsInput;
    connect?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateToOneWithWhereWithoutRunsInput, Prisma.ZakatClientSubscriptionUpdateWithoutRunsInput>, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutRunsInput>;
};
export type ZakatClientSubscriptionCreateWithoutInvestorInput = {
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
    runs?: Prisma.ZakatAssessmentRunCreateNestedManyWithoutSubscriptionInput;
};
export type ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput = {
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
    runs?: Prisma.ZakatAssessmentRunUncheckedCreateNestedManyWithoutSubscriptionInput;
};
export type ZakatClientSubscriptionCreateOrConnectWithoutInvestorInput = {
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
};
export type ZakatClientSubscriptionUpsertWithoutInvestorInput = {
    update: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutInvestorInput>;
    create: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutInvestorInput>;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
};
export type ZakatClientSubscriptionUpdateToOneWithWhereWithoutInvestorInput = {
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateWithoutInvestorInput, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutInvestorInput>;
};
export type ZakatClientSubscriptionUpdateWithoutInvestorInput = {
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runs?: Prisma.ZakatAssessmentRunUpdateManyWithoutSubscriptionNestedInput;
};
export type ZakatClientSubscriptionUncheckedUpdateWithoutInvestorInput = {
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    runs?: Prisma.ZakatAssessmentRunUncheckedUpdateManyWithoutSubscriptionNestedInput;
};
export type ZakatClientSubscriptionCreateWithoutRunsInput = {
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
    investor: Prisma.InvestorCreateNestedOneWithoutZakatSubscriptionInput;
};
export type ZakatClientSubscriptionUncheckedCreateWithoutRunsInput = {
    investorId: string;
    isActive?: boolean;
    rateBasisElection?: $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Date | string | null;
    zakatAnniversaryHijri?: string | null;
    activatedByUserId: string;
    activatedAt?: Date | string;
    deactivatedByUserId?: string | null;
    deactivatedAt?: Date | string | null;
};
export type ZakatClientSubscriptionCreateOrConnectWithoutRunsInput = {
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutRunsInput>;
};
export type ZakatClientSubscriptionUpsertWithoutRunsInput = {
    update: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutRunsInput>;
    create: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedCreateWithoutRunsInput>;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
};
export type ZakatClientSubscriptionUpdateToOneWithWhereWithoutRunsInput = {
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateWithoutRunsInput, Prisma.ZakatClientSubscriptionUncheckedUpdateWithoutRunsInput>;
};
export type ZakatClientSubscriptionUpdateWithoutRunsInput = {
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    investor?: Prisma.InvestorUpdateOneRequiredWithoutZakatSubscriptionNestedInput;
};
export type ZakatClientSubscriptionUncheckedUpdateWithoutRunsInput = {
    investorId?: Prisma.StringFieldUpdateOperationsInput | string;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    rateBasisElection?: Prisma.NullableEnumZakatRateBasisFieldUpdateOperationsInput | $Enums.ZakatRateBasis | null;
    zakatAnniversaryGregorian?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    zakatAnniversaryHijri?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    activatedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    activatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    deactivatedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    deactivatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type ZakatClientSubscriptionCountOutputType = {
    runs: number;
};
export type ZakatClientSubscriptionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    runs?: boolean | ZakatClientSubscriptionCountOutputTypeCountRunsArgs;
};
export type ZakatClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionCountOutputTypeSelect<ExtArgs> | null;
};
export type ZakatClientSubscriptionCountOutputTypeCountRunsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatAssessmentRunWhereInput;
};
export type ZakatClientSubscriptionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    investorId?: boolean;
    isActive?: boolean;
    rateBasisElection?: boolean;
    zakatAnniversaryGregorian?: boolean;
    zakatAnniversaryHijri?: boolean;
    activatedByUserId?: boolean;
    activatedAt?: boolean;
    deactivatedByUserId?: boolean;
    deactivatedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    runs?: boolean | Prisma.ZakatClientSubscription$runsArgs<ExtArgs>;
    _count?: boolean | Prisma.ZakatClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatClientSubscription"]>;
export type ZakatClientSubscriptionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    investorId?: boolean;
    isActive?: boolean;
    rateBasisElection?: boolean;
    zakatAnniversaryGregorian?: boolean;
    zakatAnniversaryHijri?: boolean;
    activatedByUserId?: boolean;
    activatedAt?: boolean;
    deactivatedByUserId?: boolean;
    deactivatedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatClientSubscription"]>;
export type ZakatClientSubscriptionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    investorId?: boolean;
    isActive?: boolean;
    rateBasisElection?: boolean;
    zakatAnniversaryGregorian?: boolean;
    zakatAnniversaryHijri?: boolean;
    activatedByUserId?: boolean;
    activatedAt?: boolean;
    deactivatedByUserId?: boolean;
    deactivatedAt?: boolean;
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["zakatClientSubscription"]>;
export type ZakatClientSubscriptionSelectScalar = {
    investorId?: boolean;
    isActive?: boolean;
    rateBasisElection?: boolean;
    zakatAnniversaryGregorian?: boolean;
    zakatAnniversaryHijri?: boolean;
    activatedByUserId?: boolean;
    activatedAt?: boolean;
    deactivatedByUserId?: boolean;
    deactivatedAt?: boolean;
};
export type ZakatClientSubscriptionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"investorId" | "isActive" | "rateBasisElection" | "zakatAnniversaryGregorian" | "zakatAnniversaryHijri" | "activatedByUserId" | "activatedAt" | "deactivatedByUserId" | "deactivatedAt", ExtArgs["result"]["zakatClientSubscription"]>;
export type ZakatClientSubscriptionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
    runs?: boolean | Prisma.ZakatClientSubscription$runsArgs<ExtArgs>;
    _count?: boolean | Prisma.ZakatClientSubscriptionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ZakatClientSubscriptionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type ZakatClientSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    investor?: boolean | Prisma.InvestorDefaultArgs<ExtArgs>;
};
export type $ZakatClientSubscriptionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ZakatClientSubscription";
    objects: {
        investor: Prisma.$InvestorPayload<ExtArgs>;
        runs: Prisma.$ZakatAssessmentRunPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        investorId: string;
        isActive: boolean;
        rateBasisElection: $Enums.ZakatRateBasis | null;
        zakatAnniversaryGregorian: Date | null;
        zakatAnniversaryHijri: string | null;
        activatedByUserId: string;
        activatedAt: Date;
        deactivatedByUserId: string | null;
        deactivatedAt: Date | null;
    }, ExtArgs["result"]["zakatClientSubscription"]>;
    composites: {};
};
export type ZakatClientSubscriptionGetPayload<S extends boolean | null | undefined | ZakatClientSubscriptionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload, S>;
export type ZakatClientSubscriptionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ZakatClientSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ZakatClientSubscriptionCountAggregateInputType | true;
};
export interface ZakatClientSubscriptionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ZakatClientSubscription'];
        meta: {
            name: 'ZakatClientSubscription';
        };
    };
    findUnique<T extends ZakatClientSubscriptionFindUniqueArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ZakatClientSubscriptionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ZakatClientSubscriptionFindFirstArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ZakatClientSubscriptionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ZakatClientSubscriptionFindManyArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ZakatClientSubscriptionCreateArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionCreateArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ZakatClientSubscriptionCreateManyArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ZakatClientSubscriptionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ZakatClientSubscriptionDeleteArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionDeleteArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ZakatClientSubscriptionUpdateArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionUpdateArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ZakatClientSubscriptionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ZakatClientSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ZakatClientSubscriptionUpdateManyArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ZakatClientSubscriptionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ZakatClientSubscriptionUpsertArgs>(args: Prisma.SelectSubset<T, ZakatClientSubscriptionUpsertArgs<ExtArgs>>): Prisma.Prisma__ZakatClientSubscriptionClient<runtime.Types.Result.GetResult<Prisma.$ZakatClientSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ZakatClientSubscriptionCountArgs>(args?: Prisma.Subset<T, ZakatClientSubscriptionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ZakatClientSubscriptionCountAggregateOutputType> : number>;
    aggregate<T extends ZakatClientSubscriptionAggregateArgs>(args: Prisma.Subset<T, ZakatClientSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetZakatClientSubscriptionAggregateType<T>>;
    groupBy<T extends ZakatClientSubscriptionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ZakatClientSubscriptionGroupByArgs['orderBy'];
    } : {
        orderBy?: ZakatClientSubscriptionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ZakatClientSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetZakatClientSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ZakatClientSubscriptionFieldRefs;
}
export interface Prisma__ZakatClientSubscriptionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    investor<T extends Prisma.InvestorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.InvestorDefaultArgs<ExtArgs>>): Prisma.Prisma__InvestorClient<runtime.Types.Result.GetResult<Prisma.$InvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    runs<T extends Prisma.ZakatClientSubscription$runsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ZakatClientSubscription$runsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ZakatAssessmentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ZakatClientSubscriptionFieldRefs {
    readonly investorId: Prisma.FieldRef<"ZakatClientSubscription", 'String'>;
    readonly isActive: Prisma.FieldRef<"ZakatClientSubscription", 'Boolean'>;
    readonly rateBasisElection: Prisma.FieldRef<"ZakatClientSubscription", 'ZakatRateBasis'>;
    readonly zakatAnniversaryGregorian: Prisma.FieldRef<"ZakatClientSubscription", 'DateTime'>;
    readonly zakatAnniversaryHijri: Prisma.FieldRef<"ZakatClientSubscription", 'String'>;
    readonly activatedByUserId: Prisma.FieldRef<"ZakatClientSubscription", 'String'>;
    readonly activatedAt: Prisma.FieldRef<"ZakatClientSubscription", 'DateTime'>;
    readonly deactivatedByUserId: Prisma.FieldRef<"ZakatClientSubscription", 'String'>;
    readonly deactivatedAt: Prisma.FieldRef<"ZakatClientSubscription", 'DateTime'>;
}
export type ZakatClientSubscriptionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    orderBy?: Prisma.ZakatClientSubscriptionOrderByWithRelationInput | Prisma.ZakatClientSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatClientSubscriptionScalarFieldEnum | Prisma.ZakatClientSubscriptionScalarFieldEnum[];
};
export type ZakatClientSubscriptionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    orderBy?: Prisma.ZakatClientSubscriptionOrderByWithRelationInput | Prisma.ZakatClientSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatClientSubscriptionScalarFieldEnum | Prisma.ZakatClientSubscriptionScalarFieldEnum[];
};
export type ZakatClientSubscriptionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    orderBy?: Prisma.ZakatClientSubscriptionOrderByWithRelationInput | Prisma.ZakatClientSubscriptionOrderByWithRelationInput[];
    cursor?: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatClientSubscriptionScalarFieldEnum | Prisma.ZakatClientSubscriptionScalarFieldEnum[];
};
export type ZakatClientSubscriptionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateInput, Prisma.ZakatClientSubscriptionUncheckedCreateInput>;
};
export type ZakatClientSubscriptionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ZakatClientSubscriptionCreateManyInput | Prisma.ZakatClientSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ZakatClientSubscriptionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    data: Prisma.ZakatClientSubscriptionCreateManyInput | Prisma.ZakatClientSubscriptionCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ZakatClientSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ZakatClientSubscriptionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateInput, Prisma.ZakatClientSubscriptionUncheckedUpdateInput>;
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateManyMutationInput, Prisma.ZakatClientSubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    limit?: number;
};
export type ZakatClientSubscriptionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateManyMutationInput, Prisma.ZakatClientSubscriptionUncheckedUpdateManyInput>;
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    limit?: number;
    include?: Prisma.ZakatClientSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ZakatClientSubscriptionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ZakatClientSubscriptionCreateInput, Prisma.ZakatClientSubscriptionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ZakatClientSubscriptionUpdateInput, Prisma.ZakatClientSubscriptionUncheckedUpdateInput>;
};
export type ZakatClientSubscriptionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
    where: Prisma.ZakatClientSubscriptionWhereUniqueInput;
};
export type ZakatClientSubscriptionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ZakatClientSubscriptionWhereInput;
    limit?: number;
};
export type ZakatClientSubscription$runsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatAssessmentRunSelect<ExtArgs> | null;
    omit?: Prisma.ZakatAssessmentRunOmit<ExtArgs> | null;
    include?: Prisma.ZakatAssessmentRunInclude<ExtArgs> | null;
    where?: Prisma.ZakatAssessmentRunWhereInput;
    orderBy?: Prisma.ZakatAssessmentRunOrderByWithRelationInput | Prisma.ZakatAssessmentRunOrderByWithRelationInput[];
    cursor?: Prisma.ZakatAssessmentRunWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ZakatAssessmentRunScalarFieldEnum | Prisma.ZakatAssessmentRunScalarFieldEnum[];
};
export type ZakatClientSubscriptionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ZakatClientSubscriptionSelect<ExtArgs> | null;
    omit?: Prisma.ZakatClientSubscriptionOmit<ExtArgs> | null;
    include?: Prisma.ZakatClientSubscriptionInclude<ExtArgs> | null;
};
