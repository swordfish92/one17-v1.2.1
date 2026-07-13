import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RiskRegisterEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$RiskRegisterEntryPayload>;
export type AggregateRiskRegisterEntry = {
    _count: RiskRegisterEntryCountAggregateOutputType | null;
    _avg: RiskRegisterEntryAvgAggregateOutputType | null;
    _sum: RiskRegisterEntrySumAggregateOutputType | null;
    _min: RiskRegisterEntryMinAggregateOutputType | null;
    _max: RiskRegisterEntryMaxAggregateOutputType | null;
};
export type RiskRegisterEntryAvgAggregateOutputType = {
    sortOrder: number | null;
};
export type RiskRegisterEntrySumAggregateOutputType = {
    sortOrder: number | null;
};
export type RiskRegisterEntryMinAggregateOutputType = {
    id: string | null;
    sortOrder: number | null;
    riskCategory: string | null;
    subCategory: string | null;
    description: string | null;
    inherentRiskRating: string | null;
    residualRiskRating: string | null;
    riskAppetiteStatement: string | null;
    status: $Enums.RiskRegisterStatus | null;
    approvedByUserId: string | null;
    boardResolutionRef: string | null;
    createdAt: Date | null;
};
export type RiskRegisterEntryMaxAggregateOutputType = {
    id: string | null;
    sortOrder: number | null;
    riskCategory: string | null;
    subCategory: string | null;
    description: string | null;
    inherentRiskRating: string | null;
    residualRiskRating: string | null;
    riskAppetiteStatement: string | null;
    status: $Enums.RiskRegisterStatus | null;
    approvedByUserId: string | null;
    boardResolutionRef: string | null;
    createdAt: Date | null;
};
export type RiskRegisterEntryCountAggregateOutputType = {
    id: number;
    sortOrder: number;
    riskCategory: number;
    subCategory: number;
    description: number;
    inherentRiskRating: number;
    residualRiskRating: number;
    riskAppetiteStatement: number;
    status: number;
    approvedByUserId: number;
    boardResolutionRef: number;
    createdAt: number;
    _all: number;
};
export type RiskRegisterEntryAvgAggregateInputType = {
    sortOrder?: true;
};
export type RiskRegisterEntrySumAggregateInputType = {
    sortOrder?: true;
};
export type RiskRegisterEntryMinAggregateInputType = {
    id?: true;
    sortOrder?: true;
    riskCategory?: true;
    subCategory?: true;
    description?: true;
    inherentRiskRating?: true;
    residualRiskRating?: true;
    riskAppetiteStatement?: true;
    status?: true;
    approvedByUserId?: true;
    boardResolutionRef?: true;
    createdAt?: true;
};
export type RiskRegisterEntryMaxAggregateInputType = {
    id?: true;
    sortOrder?: true;
    riskCategory?: true;
    subCategory?: true;
    description?: true;
    inherentRiskRating?: true;
    residualRiskRating?: true;
    riskAppetiteStatement?: true;
    status?: true;
    approvedByUserId?: true;
    boardResolutionRef?: true;
    createdAt?: true;
};
export type RiskRegisterEntryCountAggregateInputType = {
    id?: true;
    sortOrder?: true;
    riskCategory?: true;
    subCategory?: true;
    description?: true;
    inherentRiskRating?: true;
    residualRiskRating?: true;
    riskAppetiteStatement?: true;
    status?: true;
    approvedByUserId?: true;
    boardResolutionRef?: true;
    createdAt?: true;
    _all?: true;
};
export type RiskRegisterEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskRegisterEntryWhereInput;
    orderBy?: Prisma.RiskRegisterEntryOrderByWithRelationInput | Prisma.RiskRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.RiskRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RiskRegisterEntryCountAggregateInputType;
    _avg?: RiskRegisterEntryAvgAggregateInputType;
    _sum?: RiskRegisterEntrySumAggregateInputType;
    _min?: RiskRegisterEntryMinAggregateInputType;
    _max?: RiskRegisterEntryMaxAggregateInputType;
};
export type GetRiskRegisterEntryAggregateType<T extends RiskRegisterEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateRiskRegisterEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRiskRegisterEntry[P]> : Prisma.GetScalarType<T[P], AggregateRiskRegisterEntry[P]>;
};
export type RiskRegisterEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskRegisterEntryWhereInput;
    orderBy?: Prisma.RiskRegisterEntryOrderByWithAggregationInput | Prisma.RiskRegisterEntryOrderByWithAggregationInput[];
    by: Prisma.RiskRegisterEntryScalarFieldEnum[] | Prisma.RiskRegisterEntryScalarFieldEnum;
    having?: Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RiskRegisterEntryCountAggregateInputType | true;
    _avg?: RiskRegisterEntryAvgAggregateInputType;
    _sum?: RiskRegisterEntrySumAggregateInputType;
    _min?: RiskRegisterEntryMinAggregateInputType;
    _max?: RiskRegisterEntryMaxAggregateInputType;
};
export type RiskRegisterEntryGroupByOutputType = {
    id: string;
    sortOrder: number;
    riskCategory: string;
    subCategory: string | null;
    description: string | null;
    inherentRiskRating: string | null;
    residualRiskRating: string | null;
    riskAppetiteStatement: string | null;
    status: $Enums.RiskRegisterStatus;
    approvedByUserId: string | null;
    boardResolutionRef: string | null;
    createdAt: Date;
    _count: RiskRegisterEntryCountAggregateOutputType | null;
    _avg: RiskRegisterEntryAvgAggregateOutputType | null;
    _sum: RiskRegisterEntrySumAggregateOutputType | null;
    _min: RiskRegisterEntryMinAggregateOutputType | null;
    _max: RiskRegisterEntryMaxAggregateOutputType | null;
};
export type GetRiskRegisterEntryGroupByPayload<T extends RiskRegisterEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RiskRegisterEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RiskRegisterEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RiskRegisterEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RiskRegisterEntryGroupByOutputType[P]>;
}>>;
export type RiskRegisterEntryWhereInput = {
    AND?: Prisma.RiskRegisterEntryWhereInput | Prisma.RiskRegisterEntryWhereInput[];
    OR?: Prisma.RiskRegisterEntryWhereInput[];
    NOT?: Prisma.RiskRegisterEntryWhereInput | Prisma.RiskRegisterEntryWhereInput[];
    id?: Prisma.UuidFilter<"RiskRegisterEntry"> | string;
    sortOrder?: Prisma.IntFilter<"RiskRegisterEntry"> | number;
    riskCategory?: Prisma.StringFilter<"RiskRegisterEntry"> | string;
    subCategory?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    description?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    inherentRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    residualRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    riskAppetiteStatement?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    status?: Prisma.EnumRiskRegisterStatusFilter<"RiskRegisterEntry"> | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskRegisterEntry"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskRegisterEntry"> | Date | string;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type RiskRegisterEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    subCategory?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    inherentRiskRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    residualRiskRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    riskAppetiteStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    approvedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type RiskRegisterEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RiskRegisterEntryWhereInput | Prisma.RiskRegisterEntryWhereInput[];
    OR?: Prisma.RiskRegisterEntryWhereInput[];
    NOT?: Prisma.RiskRegisterEntryWhereInput | Prisma.RiskRegisterEntryWhereInput[];
    sortOrder?: Prisma.IntFilter<"RiskRegisterEntry"> | number;
    riskCategory?: Prisma.StringFilter<"RiskRegisterEntry"> | string;
    subCategory?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    description?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    inherentRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    residualRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    riskAppetiteStatement?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    status?: Prisma.EnumRiskRegisterStatusFilter<"RiskRegisterEntry"> | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskRegisterEntry"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskRegisterEntry"> | Date | string;
    approvedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type RiskRegisterEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    subCategory?: Prisma.SortOrderInput | Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    inherentRiskRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    residualRiskRating?: Prisma.SortOrderInput | Prisma.SortOrder;
    riskAppetiteStatement?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.RiskRegisterEntryCountOrderByAggregateInput;
    _avg?: Prisma.RiskRegisterEntryAvgOrderByAggregateInput;
    _max?: Prisma.RiskRegisterEntryMaxOrderByAggregateInput;
    _min?: Prisma.RiskRegisterEntryMinOrderByAggregateInput;
    _sum?: Prisma.RiskRegisterEntrySumOrderByAggregateInput;
};
export type RiskRegisterEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput | Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput | Prisma.RiskRegisterEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RiskRegisterEntry"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"RiskRegisterEntry"> | number;
    riskCategory?: Prisma.StringWithAggregatesFilter<"RiskRegisterEntry"> | string;
    subCategory?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    description?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    inherentRiskRating?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    residualRiskRating?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    riskAppetiteStatement?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    status?: Prisma.EnumRiskRegisterStatusWithAggregatesFilter<"RiskRegisterEntry"> | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    boardResolutionRef?: Prisma.StringNullableWithAggregatesFilter<"RiskRegisterEntry"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RiskRegisterEntry"> | Date | string;
};
export type RiskRegisterEntryCreateInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
    approvedBy?: Prisma.AppUserCreateNestedOneWithoutRiskRegisterEntriesApprovedInput;
};
export type RiskRegisterEntryUncheckedCreateInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    approvedByUserId?: string | null;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
};
export type RiskRegisterEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedBy?: Prisma.AppUserUpdateOneWithoutRiskRegisterEntriesApprovedNestedInput;
};
export type RiskRegisterEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntryCreateManyInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    approvedByUserId?: string | null;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
};
export type RiskRegisterEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntryListRelationFilter = {
    every?: Prisma.RiskRegisterEntryWhereInput;
    some?: Prisma.RiskRegisterEntryWhereInput;
    none?: Prisma.RiskRegisterEntryWhereInput;
};
export type RiskRegisterEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RiskRegisterEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    subCategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    inherentRiskRating?: Prisma.SortOrder;
    residualRiskRating?: Prisma.SortOrder;
    riskAppetiteStatement?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskRegisterEntryAvgOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type RiskRegisterEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    subCategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    inherentRiskRating?: Prisma.SortOrder;
    residualRiskRating?: Prisma.SortOrder;
    riskAppetiteStatement?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskRegisterEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    riskCategory?: Prisma.SortOrder;
    subCategory?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    inherentRiskRating?: Prisma.SortOrder;
    residualRiskRating?: Prisma.SortOrder;
    riskAppetiteStatement?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    approvedByUserId?: Prisma.SortOrder;
    boardResolutionRef?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type RiskRegisterEntrySumOrderByAggregateInput = {
    sortOrder?: Prisma.SortOrder;
};
export type RiskRegisterEntryCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput> | Prisma.RiskRegisterEntryCreateWithoutApprovedByInput[] | Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput | Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.RiskRegisterEntryCreateManyApprovedByInputEnvelope;
    connect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
};
export type RiskRegisterEntryUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput> | Prisma.RiskRegisterEntryCreateWithoutApprovedByInput[] | Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput | Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput[];
    createMany?: Prisma.RiskRegisterEntryCreateManyApprovedByInputEnvelope;
    connect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
};
export type RiskRegisterEntryUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput> | Prisma.RiskRegisterEntryCreateWithoutApprovedByInput[] | Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput | Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.RiskRegisterEntryUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.RiskRegisterEntryUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.RiskRegisterEntryCreateManyApprovedByInputEnvelope;
    set?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    delete?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    connect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    update?: Prisma.RiskRegisterEntryUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.RiskRegisterEntryUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.RiskRegisterEntryUpdateManyWithWhereWithoutApprovedByInput | Prisma.RiskRegisterEntryUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.RiskRegisterEntryScalarWhereInput | Prisma.RiskRegisterEntryScalarWhereInput[];
};
export type RiskRegisterEntryUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput> | Prisma.RiskRegisterEntryCreateWithoutApprovedByInput[] | Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput[];
    connectOrCreate?: Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput | Prisma.RiskRegisterEntryCreateOrConnectWithoutApprovedByInput[];
    upsert?: Prisma.RiskRegisterEntryUpsertWithWhereUniqueWithoutApprovedByInput | Prisma.RiskRegisterEntryUpsertWithWhereUniqueWithoutApprovedByInput[];
    createMany?: Prisma.RiskRegisterEntryCreateManyApprovedByInputEnvelope;
    set?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    disconnect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    delete?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    connect?: Prisma.RiskRegisterEntryWhereUniqueInput | Prisma.RiskRegisterEntryWhereUniqueInput[];
    update?: Prisma.RiskRegisterEntryUpdateWithWhereUniqueWithoutApprovedByInput | Prisma.RiskRegisterEntryUpdateWithWhereUniqueWithoutApprovedByInput[];
    updateMany?: Prisma.RiskRegisterEntryUpdateManyWithWhereWithoutApprovedByInput | Prisma.RiskRegisterEntryUpdateManyWithWhereWithoutApprovedByInput[];
    deleteMany?: Prisma.RiskRegisterEntryScalarWhereInput | Prisma.RiskRegisterEntryScalarWhereInput[];
};
export type EnumRiskRegisterStatusFieldUpdateOperationsInput = {
    set?: $Enums.RiskRegisterStatus;
};
export type RiskRegisterEntryCreateWithoutApprovedByInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
};
export type RiskRegisterEntryUncheckedCreateWithoutApprovedByInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
};
export type RiskRegisterEntryCreateOrConnectWithoutApprovedByInput = {
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput>;
};
export type RiskRegisterEntryCreateManyApprovedByInputEnvelope = {
    data: Prisma.RiskRegisterEntryCreateManyApprovedByInput | Prisma.RiskRegisterEntryCreateManyApprovedByInput[];
    skipDuplicates?: boolean;
};
export type RiskRegisterEntryUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.RiskRegisterEntryUpdateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedUpdateWithoutApprovedByInput>;
    create: Prisma.XOR<Prisma.RiskRegisterEntryCreateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedCreateWithoutApprovedByInput>;
};
export type RiskRegisterEntryUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.RiskRegisterEntryUpdateWithoutApprovedByInput, Prisma.RiskRegisterEntryUncheckedUpdateWithoutApprovedByInput>;
};
export type RiskRegisterEntryUpdateManyWithWhereWithoutApprovedByInput = {
    where: Prisma.RiskRegisterEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.RiskRegisterEntryUpdateManyMutationInput, Prisma.RiskRegisterEntryUncheckedUpdateManyWithoutApprovedByInput>;
};
export type RiskRegisterEntryScalarWhereInput = {
    AND?: Prisma.RiskRegisterEntryScalarWhereInput | Prisma.RiskRegisterEntryScalarWhereInput[];
    OR?: Prisma.RiskRegisterEntryScalarWhereInput[];
    NOT?: Prisma.RiskRegisterEntryScalarWhereInput | Prisma.RiskRegisterEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"RiskRegisterEntry"> | string;
    sortOrder?: Prisma.IntFilter<"RiskRegisterEntry"> | number;
    riskCategory?: Prisma.StringFilter<"RiskRegisterEntry"> | string;
    subCategory?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    description?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    inherentRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    residualRiskRating?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    riskAppetiteStatement?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    status?: Prisma.EnumRiskRegisterStatusFilter<"RiskRegisterEntry"> | $Enums.RiskRegisterStatus;
    approvedByUserId?: Prisma.UuidNullableFilter<"RiskRegisterEntry"> | string | null;
    boardResolutionRef?: Prisma.StringNullableFilter<"RiskRegisterEntry"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"RiskRegisterEntry"> | Date | string;
};
export type RiskRegisterEntryCreateManyApprovedByInput = {
    id?: string;
    sortOrder: number;
    riskCategory: string;
    subCategory?: string | null;
    description?: string | null;
    inherentRiskRating?: string | null;
    residualRiskRating?: string | null;
    riskAppetiteStatement?: string | null;
    status?: $Enums.RiskRegisterStatus;
    boardResolutionRef?: string | null;
    createdAt?: Date | string;
};
export type RiskRegisterEntryUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntryUncheckedUpdateWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntryUncheckedUpdateManyWithoutApprovedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    riskCategory?: Prisma.StringFieldUpdateOperationsInput | string;
    subCategory?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    inherentRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    residualRiskRating?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    riskAppetiteStatement?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumRiskRegisterStatusFieldUpdateOperationsInput | $Enums.RiskRegisterStatus;
    boardResolutionRef?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RiskRegisterEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    subCategory?: boolean;
    description?: boolean;
    inherentRiskRating?: boolean;
    residualRiskRating?: boolean;
    riskAppetiteStatement?: boolean;
    status?: boolean;
    approvedByUserId?: boolean;
    boardResolutionRef?: boolean;
    createdAt?: boolean;
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["riskRegisterEntry"]>;
export type RiskRegisterEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    subCategory?: boolean;
    description?: boolean;
    inherentRiskRating?: boolean;
    residualRiskRating?: boolean;
    riskAppetiteStatement?: boolean;
    status?: boolean;
    approvedByUserId?: boolean;
    boardResolutionRef?: boolean;
    createdAt?: boolean;
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["riskRegisterEntry"]>;
export type RiskRegisterEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    subCategory?: boolean;
    description?: boolean;
    inherentRiskRating?: boolean;
    residualRiskRating?: boolean;
    riskAppetiteStatement?: boolean;
    status?: boolean;
    approvedByUserId?: boolean;
    boardResolutionRef?: boolean;
    createdAt?: boolean;
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
}, ExtArgs["result"]["riskRegisterEntry"]>;
export type RiskRegisterEntrySelectScalar = {
    id?: boolean;
    sortOrder?: boolean;
    riskCategory?: boolean;
    subCategory?: boolean;
    description?: boolean;
    inherentRiskRating?: boolean;
    residualRiskRating?: boolean;
    riskAppetiteStatement?: boolean;
    status?: boolean;
    approvedByUserId?: boolean;
    boardResolutionRef?: boolean;
    createdAt?: boolean;
};
export type RiskRegisterEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sortOrder" | "riskCategory" | "subCategory" | "description" | "inherentRiskRating" | "residualRiskRating" | "riskAppetiteStatement" | "status" | "approvedByUserId" | "boardResolutionRef" | "createdAt", ExtArgs["result"]["riskRegisterEntry"]>;
export type RiskRegisterEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
};
export type RiskRegisterEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
};
export type RiskRegisterEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    approvedBy?: boolean | Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>;
};
export type $RiskRegisterEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RiskRegisterEntry";
    objects: {
        approvedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sortOrder: number;
        riskCategory: string;
        subCategory: string | null;
        description: string | null;
        inherentRiskRating: string | null;
        residualRiskRating: string | null;
        riskAppetiteStatement: string | null;
        status: $Enums.RiskRegisterStatus;
        approvedByUserId: string | null;
        boardResolutionRef: string | null;
        createdAt: Date;
    }, ExtArgs["result"]["riskRegisterEntry"]>;
    composites: {};
};
export type RiskRegisterEntryGetPayload<S extends boolean | null | undefined | RiskRegisterEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload, S>;
export type RiskRegisterEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RiskRegisterEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RiskRegisterEntryCountAggregateInputType | true;
};
export interface RiskRegisterEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RiskRegisterEntry'];
        meta: {
            name: 'RiskRegisterEntry';
        };
    };
    findUnique<T extends RiskRegisterEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RiskRegisterEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RiskRegisterEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RiskRegisterEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RiskRegisterEntryFindManyArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RiskRegisterEntryCreateArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryCreateArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RiskRegisterEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RiskRegisterEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RiskRegisterEntryDeleteArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RiskRegisterEntryUpdateArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RiskRegisterEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RiskRegisterEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RiskRegisterEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RiskRegisterEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RiskRegisterEntryUpsertArgs>(args: Prisma.SelectSubset<T, RiskRegisterEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__RiskRegisterEntryClient<runtime.Types.Result.GetResult<Prisma.$RiskRegisterEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RiskRegisterEntryCountArgs>(args?: Prisma.Subset<T, RiskRegisterEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RiskRegisterEntryCountAggregateOutputType> : number>;
    aggregate<T extends RiskRegisterEntryAggregateArgs>(args: Prisma.Subset<T, RiskRegisterEntryAggregateArgs>): Prisma.PrismaPromise<GetRiskRegisterEntryAggregateType<T>>;
    groupBy<T extends RiskRegisterEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RiskRegisterEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: RiskRegisterEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RiskRegisterEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiskRegisterEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RiskRegisterEntryFieldRefs;
}
export interface Prisma__RiskRegisterEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    approvedBy<T extends Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RiskRegisterEntry$approvedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RiskRegisterEntryFieldRefs {
    readonly id: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"RiskRegisterEntry", 'Int'>;
    readonly riskCategory: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly subCategory: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly description: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly inherentRiskRating: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly residualRiskRating: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly riskAppetiteStatement: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly status: Prisma.FieldRef<"RiskRegisterEntry", 'RiskRegisterStatus'>;
    readonly approvedByUserId: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly boardResolutionRef: Prisma.FieldRef<"RiskRegisterEntry", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RiskRegisterEntry", 'DateTime'>;
}
export type RiskRegisterEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
};
export type RiskRegisterEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
};
export type RiskRegisterEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.RiskRegisterEntryWhereInput;
    orderBy?: Prisma.RiskRegisterEntryOrderByWithRelationInput | Prisma.RiskRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.RiskRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskRegisterEntryScalarFieldEnum | Prisma.RiskRegisterEntryScalarFieldEnum[];
};
export type RiskRegisterEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.RiskRegisterEntryWhereInput;
    orderBy?: Prisma.RiskRegisterEntryOrderByWithRelationInput | Prisma.RiskRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.RiskRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskRegisterEntryScalarFieldEnum | Prisma.RiskRegisterEntryScalarFieldEnum[];
};
export type RiskRegisterEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where?: Prisma.RiskRegisterEntryWhereInput;
    orderBy?: Prisma.RiskRegisterEntryOrderByWithRelationInput | Prisma.RiskRegisterEntryOrderByWithRelationInput[];
    cursor?: Prisma.RiskRegisterEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RiskRegisterEntryScalarFieldEnum | Prisma.RiskRegisterEntryScalarFieldEnum[];
};
export type RiskRegisterEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskRegisterEntryCreateInput, Prisma.RiskRegisterEntryUncheckedCreateInput>;
};
export type RiskRegisterEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RiskRegisterEntryCreateManyInput | Prisma.RiskRegisterEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RiskRegisterEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    data: Prisma.RiskRegisterEntryCreateManyInput | Prisma.RiskRegisterEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RiskRegisterEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RiskRegisterEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskRegisterEntryUpdateInput, Prisma.RiskRegisterEntryUncheckedUpdateInput>;
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
};
export type RiskRegisterEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RiskRegisterEntryUpdateManyMutationInput, Prisma.RiskRegisterEntryUncheckedUpdateManyInput>;
    where?: Prisma.RiskRegisterEntryWhereInput;
    limit?: number;
};
export type RiskRegisterEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RiskRegisterEntryUpdateManyMutationInput, Prisma.RiskRegisterEntryUncheckedUpdateManyInput>;
    where?: Prisma.RiskRegisterEntryWhereInput;
    limit?: number;
    include?: Prisma.RiskRegisterEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RiskRegisterEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RiskRegisterEntryCreateInput, Prisma.RiskRegisterEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RiskRegisterEntryUpdateInput, Prisma.RiskRegisterEntryUncheckedUpdateInput>;
};
export type RiskRegisterEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
    where: Prisma.RiskRegisterEntryWhereUniqueInput;
};
export type RiskRegisterEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RiskRegisterEntryWhereInput;
    limit?: number;
};
export type RiskRegisterEntry$approvedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type RiskRegisterEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RiskRegisterEntrySelect<ExtArgs> | null;
    omit?: Prisma.RiskRegisterEntryOmit<ExtArgs> | null;
    include?: Prisma.RiskRegisterEntryInclude<ExtArgs> | null;
};
