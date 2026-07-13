import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type PrivacyNoticeConfigModel = runtime.Types.Result.DefaultSelection<Prisma.$PrivacyNoticeConfigPayload>;
export type AggregatePrivacyNoticeConfig = {
    _count: PrivacyNoticeConfigCountAggregateOutputType | null;
    _avg: PrivacyNoticeConfigAvgAggregateOutputType | null;
    _sum: PrivacyNoticeConfigSumAggregateOutputType | null;
    _min: PrivacyNoticeConfigMinAggregateOutputType | null;
    _max: PrivacyNoticeConfigMaxAggregateOutputType | null;
};
export type PrivacyNoticeConfigAvgAggregateOutputType = {
    version: number | null;
};
export type PrivacyNoticeConfigSumAggregateOutputType = {
    version: number | null;
};
export type PrivacyNoticeConfigMinAggregateOutputType = {
    id: string | null;
    version: number | null;
    noticeText: string | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type PrivacyNoticeConfigMaxAggregateOutputType = {
    id: string | null;
    version: number | null;
    noticeText: string | null;
    status: $Enums.GovernedItemStatus | null;
    effectiveFrom: Date | null;
    createdByUserId: string | null;
    createdAt: Date | null;
};
export type PrivacyNoticeConfigCountAggregateOutputType = {
    id: number;
    version: number;
    noticeText: number;
    status: number;
    effectiveFrom: number;
    createdByUserId: number;
    createdAt: number;
    _all: number;
};
export type PrivacyNoticeConfigAvgAggregateInputType = {
    version?: true;
};
export type PrivacyNoticeConfigSumAggregateInputType = {
    version?: true;
};
export type PrivacyNoticeConfigMinAggregateInputType = {
    id?: true;
    version?: true;
    noticeText?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type PrivacyNoticeConfigMaxAggregateInputType = {
    id?: true;
    version?: true;
    noticeText?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
};
export type PrivacyNoticeConfigCountAggregateInputType = {
    id?: true;
    version?: true;
    noticeText?: true;
    status?: true;
    effectiveFrom?: true;
    createdByUserId?: true;
    createdAt?: true;
    _all?: true;
};
export type PrivacyNoticeConfigAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    orderBy?: Prisma.PrivacyNoticeConfigOrderByWithRelationInput | Prisma.PrivacyNoticeConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PrivacyNoticeConfigCountAggregateInputType;
    _avg?: PrivacyNoticeConfigAvgAggregateInputType;
    _sum?: PrivacyNoticeConfigSumAggregateInputType;
    _min?: PrivacyNoticeConfigMinAggregateInputType;
    _max?: PrivacyNoticeConfigMaxAggregateInputType;
};
export type GetPrivacyNoticeConfigAggregateType<T extends PrivacyNoticeConfigAggregateArgs> = {
    [P in keyof T & keyof AggregatePrivacyNoticeConfig]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePrivacyNoticeConfig[P]> : Prisma.GetScalarType<T[P], AggregatePrivacyNoticeConfig[P]>;
};
export type PrivacyNoticeConfigGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    orderBy?: Prisma.PrivacyNoticeConfigOrderByWithAggregationInput | Prisma.PrivacyNoticeConfigOrderByWithAggregationInput[];
    by: Prisma.PrivacyNoticeConfigScalarFieldEnum[] | Prisma.PrivacyNoticeConfigScalarFieldEnum;
    having?: Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PrivacyNoticeConfigCountAggregateInputType | true;
    _avg?: PrivacyNoticeConfigAvgAggregateInputType;
    _sum?: PrivacyNoticeConfigSumAggregateInputType;
    _min?: PrivacyNoticeConfigMinAggregateInputType;
    _max?: PrivacyNoticeConfigMaxAggregateInputType;
};
export type PrivacyNoticeConfigGroupByOutputType = {
    id: string;
    version: number;
    noticeText: string;
    status: $Enums.GovernedItemStatus;
    effectiveFrom: Date | null;
    createdByUserId: string;
    createdAt: Date;
    _count: PrivacyNoticeConfigCountAggregateOutputType | null;
    _avg: PrivacyNoticeConfigAvgAggregateOutputType | null;
    _sum: PrivacyNoticeConfigSumAggregateOutputType | null;
    _min: PrivacyNoticeConfigMinAggregateOutputType | null;
    _max: PrivacyNoticeConfigMaxAggregateOutputType | null;
};
export type GetPrivacyNoticeConfigGroupByPayload<T extends PrivacyNoticeConfigGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PrivacyNoticeConfigGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PrivacyNoticeConfigGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PrivacyNoticeConfigGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PrivacyNoticeConfigGroupByOutputType[P]>;
}>>;
export type PrivacyNoticeConfigWhereInput = {
    AND?: Prisma.PrivacyNoticeConfigWhereInput | Prisma.PrivacyNoticeConfigWhereInput[];
    OR?: Prisma.PrivacyNoticeConfigWhereInput[];
    NOT?: Prisma.PrivacyNoticeConfigWhereInput | Prisma.PrivacyNoticeConfigWhereInput[];
    id?: Prisma.UuidFilter<"PrivacyNoticeConfig"> | string;
    version?: Prisma.IntFilter<"PrivacyNoticeConfig"> | number;
    noticeText?: Prisma.StringFilter<"PrivacyNoticeConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"PrivacyNoticeConfig"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"PrivacyNoticeConfig"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"PrivacyNoticeConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"PrivacyNoticeConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentListRelationFilter;
};
export type PrivacyNoticeConfigOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    noticeText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    createdBy?: Prisma.AppUserOrderByWithRelationInput;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentOrderByRelationAggregateInput;
};
export type PrivacyNoticeConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    version?: number;
    AND?: Prisma.PrivacyNoticeConfigWhereInput | Prisma.PrivacyNoticeConfigWhereInput[];
    OR?: Prisma.PrivacyNoticeConfigWhereInput[];
    NOT?: Prisma.PrivacyNoticeConfigWhereInput | Prisma.PrivacyNoticeConfigWhereInput[];
    noticeText?: Prisma.StringFilter<"PrivacyNoticeConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"PrivacyNoticeConfig"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"PrivacyNoticeConfig"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"PrivacyNoticeConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"PrivacyNoticeConfig"> | Date | string;
    createdBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentListRelationFilter;
}, "id" | "version">;
export type PrivacyNoticeConfigOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    noticeText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.PrivacyNoticeConfigCountOrderByAggregateInput;
    _avg?: Prisma.PrivacyNoticeConfigAvgOrderByAggregateInput;
    _max?: Prisma.PrivacyNoticeConfigMaxOrderByAggregateInput;
    _min?: Prisma.PrivacyNoticeConfigMinOrderByAggregateInput;
    _sum?: Prisma.PrivacyNoticeConfigSumOrderByAggregateInput;
};
export type PrivacyNoticeConfigScalarWhereWithAggregatesInput = {
    AND?: Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput | Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput[];
    OR?: Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput[];
    NOT?: Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput | Prisma.PrivacyNoticeConfigScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"PrivacyNoticeConfig"> | string;
    version?: Prisma.IntWithAggregatesFilter<"PrivacyNoticeConfig"> | number;
    noticeText?: Prisma.StringWithAggregatesFilter<"PrivacyNoticeConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"PrivacyNoticeConfig"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeNullableWithAggregatesFilter<"PrivacyNoticeConfig"> | Date | string | null;
    createdByUserId?: Prisma.UuidWithAggregatesFilter<"PrivacyNoticeConfig"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"PrivacyNoticeConfig"> | Date | string;
};
export type PrivacyNoticeConfigCreateInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPrivacyNoticeConfigsCreatedInput;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentCreateNestedManyWithoutNoticeConfigInput;
};
export type PrivacyNoticeConfigUncheckedCreateInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutNoticeConfigInput;
};
export type PrivacyNoticeConfigUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPrivacyNoticeConfigsCreatedNestedInput;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithoutNoticeConfigNestedInput;
};
export type PrivacyNoticeConfigUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutNoticeConfigNestedInput;
};
export type PrivacyNoticeConfigCreateManyInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PrivacyNoticeConfigUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrivacyNoticeConfigUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrivacyNoticeConfigListRelationFilter = {
    every?: Prisma.PrivacyNoticeConfigWhereInput;
    some?: Prisma.PrivacyNoticeConfigWhereInput;
    none?: Prisma.PrivacyNoticeConfigWhereInput;
};
export type PrivacyNoticeConfigOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    noticeText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigAvgOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    noticeText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    version?: Prisma.SortOrder;
    noticeText?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    effectiveFrom?: Prisma.SortOrder;
    createdByUserId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigSumOrderByAggregateInput = {
    version?: Prisma.SortOrder;
};
export type PrivacyNoticeConfigScalarRelationFilter = {
    is?: Prisma.PrivacyNoticeConfigWhereInput;
    isNot?: Prisma.PrivacyNoticeConfigWhereInput;
};
export type PrivacyNoticeConfigCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput> | Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput[] | Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput | Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PrivacyNoticeConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
};
export type PrivacyNoticeConfigUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput> | Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput[] | Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput | Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput[];
    createMany?: Prisma.PrivacyNoticeConfigCreateManyCreatedByInputEnvelope;
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
};
export type PrivacyNoticeConfigUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput> | Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput[] | Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput | Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PrivacyNoticeConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PrivacyNoticeConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PrivacyNoticeConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PrivacyNoticeConfigScalarWhereInput | Prisma.PrivacyNoticeConfigScalarWhereInput[];
};
export type PrivacyNoticeConfigUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput> | Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput[] | Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput[];
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput | Prisma.PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput[];
    upsert?: Prisma.PrivacyNoticeConfigUpsertWithWhereUniqueWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpsertWithWhereUniqueWithoutCreatedByInput[];
    createMany?: Prisma.PrivacyNoticeConfigCreateManyCreatedByInputEnvelope;
    set?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    disconnect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    delete?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput | Prisma.PrivacyNoticeConfigWhereUniqueInput[];
    update?: Prisma.PrivacyNoticeConfigUpdateWithWhereUniqueWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpdateWithWhereUniqueWithoutCreatedByInput[];
    updateMany?: Prisma.PrivacyNoticeConfigUpdateManyWithWhereWithoutCreatedByInput | Prisma.PrivacyNoticeConfigUpdateManyWithWhereWithoutCreatedByInput[];
    deleteMany?: Prisma.PrivacyNoticeConfigScalarWhereInput | Prisma.PrivacyNoticeConfigScalarWhereInput[];
};
export type PrivacyNoticeConfigCreateNestedOneWithoutAcknowledgmentsInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutAcknowledgmentsInput>;
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutAcknowledgmentsInput;
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
};
export type PrivacyNoticeConfigUpdateOneRequiredWithoutAcknowledgmentsNestedInput = {
    create?: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutAcknowledgmentsInput>;
    connectOrCreate?: Prisma.PrivacyNoticeConfigCreateOrConnectWithoutAcknowledgmentsInput;
    upsert?: Prisma.PrivacyNoticeConfigUpsertWithoutAcknowledgmentsInput;
    connect?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateToOneWithWhereWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUpdateWithoutAcknowledgmentsInput>, Prisma.PrivacyNoticeConfigUncheckedUpdateWithoutAcknowledgmentsInput>;
};
export type PrivacyNoticeConfigCreateWithoutCreatedByInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentCreateNestedManyWithoutNoticeConfigInput;
};
export type PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedCreateNestedManyWithoutNoticeConfigInput;
};
export type PrivacyNoticeConfigCreateOrConnectWithoutCreatedByInput = {
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput>;
};
export type PrivacyNoticeConfigCreateManyCreatedByInputEnvelope = {
    data: Prisma.PrivacyNoticeConfigCreateManyCreatedByInput | Prisma.PrivacyNoticeConfigCreateManyCreatedByInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeConfigUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    update: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedUpdateWithoutCreatedByInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutCreatedByInput>;
};
export type PrivacyNoticeConfigUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateWithoutCreatedByInput, Prisma.PrivacyNoticeConfigUncheckedUpdateWithoutCreatedByInput>;
};
export type PrivacyNoticeConfigUpdateManyWithWhereWithoutCreatedByInput = {
    where: Prisma.PrivacyNoticeConfigScalarWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateManyMutationInput, Prisma.PrivacyNoticeConfigUncheckedUpdateManyWithoutCreatedByInput>;
};
export type PrivacyNoticeConfigScalarWhereInput = {
    AND?: Prisma.PrivacyNoticeConfigScalarWhereInput | Prisma.PrivacyNoticeConfigScalarWhereInput[];
    OR?: Prisma.PrivacyNoticeConfigScalarWhereInput[];
    NOT?: Prisma.PrivacyNoticeConfigScalarWhereInput | Prisma.PrivacyNoticeConfigScalarWhereInput[];
    id?: Prisma.UuidFilter<"PrivacyNoticeConfig"> | string;
    version?: Prisma.IntFilter<"PrivacyNoticeConfig"> | number;
    noticeText?: Prisma.StringFilter<"PrivacyNoticeConfig"> | string;
    status?: Prisma.EnumGovernedItemStatusFilter<"PrivacyNoticeConfig"> | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.DateTimeNullableFilter<"PrivacyNoticeConfig"> | Date | string | null;
    createdByUserId?: Prisma.UuidFilter<"PrivacyNoticeConfig"> | string;
    createdAt?: Prisma.DateTimeFilter<"PrivacyNoticeConfig"> | Date | string;
};
export type PrivacyNoticeConfigCreateWithoutAcknowledgmentsInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
    createdBy: Prisma.AppUserCreateNestedOneWithoutPrivacyNoticeConfigsCreatedInput;
};
export type PrivacyNoticeConfigUncheckedCreateWithoutAcknowledgmentsInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdByUserId: string;
    createdAt?: Date | string;
};
export type PrivacyNoticeConfigCreateOrConnectWithoutAcknowledgmentsInput = {
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutAcknowledgmentsInput>;
};
export type PrivacyNoticeConfigUpsertWithoutAcknowledgmentsInput = {
    update: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedUpdateWithoutAcknowledgmentsInput>;
    create: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedCreateWithoutAcknowledgmentsInput>;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
};
export type PrivacyNoticeConfigUpdateToOneWithWhereWithoutAcknowledgmentsInput = {
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateWithoutAcknowledgmentsInput, Prisma.PrivacyNoticeConfigUncheckedUpdateWithoutAcknowledgmentsInput>;
};
export type PrivacyNoticeConfigUpdateWithoutAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    createdBy?: Prisma.AppUserUpdateOneRequiredWithoutPrivacyNoticeConfigsCreatedNestedInput;
};
export type PrivacyNoticeConfigUncheckedUpdateWithoutAcknowledgmentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrivacyNoticeConfigCreateManyCreatedByInput = {
    id?: string;
    version: number;
    noticeText: string;
    status?: $Enums.GovernedItemStatus;
    effectiveFrom?: Date | string | null;
    createdAt?: Date | string;
};
export type PrivacyNoticeConfigUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUpdateManyWithoutNoticeConfigNestedInput;
};
export type PrivacyNoticeConfigUncheckedUpdateWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    acknowledgments?: Prisma.PrivacyNoticeAcknowledgmentUncheckedUpdateManyWithoutNoticeConfigNestedInput;
};
export type PrivacyNoticeConfigUncheckedUpdateManyWithoutCreatedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    version?: Prisma.IntFieldUpdateOperationsInput | number;
    noticeText?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    effectiveFrom?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PrivacyNoticeConfigCountOutputType = {
    acknowledgments: number;
};
export type PrivacyNoticeConfigCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    acknowledgments?: boolean | PrivacyNoticeConfigCountOutputTypeCountAcknowledgmentsArgs;
};
export type PrivacyNoticeConfigCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigCountOutputTypeSelect<ExtArgs> | null;
};
export type PrivacyNoticeConfigCountOutputTypeCountAcknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
};
export type PrivacyNoticeConfigSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    noticeText?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgments?: boolean | Prisma.PrivacyNoticeConfig$acknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PrivacyNoticeConfigCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeConfig"]>;
export type PrivacyNoticeConfigSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    noticeText?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeConfig"]>;
export type PrivacyNoticeConfigSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    version?: boolean;
    noticeText?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["privacyNoticeConfig"]>;
export type PrivacyNoticeConfigSelectScalar = {
    id?: boolean;
    version?: boolean;
    noticeText?: boolean;
    status?: boolean;
    effectiveFrom?: boolean;
    createdByUserId?: boolean;
    createdAt?: boolean;
};
export type PrivacyNoticeConfigOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "version" | "noticeText" | "status" | "effectiveFrom" | "createdByUserId" | "createdAt", ExtArgs["result"]["privacyNoticeConfig"]>;
export type PrivacyNoticeConfigInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    acknowledgments?: boolean | Prisma.PrivacyNoticeConfig$acknowledgmentsArgs<ExtArgs>;
    _count?: boolean | Prisma.PrivacyNoticeConfigCountOutputTypeDefaultArgs<ExtArgs>;
};
export type PrivacyNoticeConfigIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type PrivacyNoticeConfigIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    createdBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $PrivacyNoticeConfigPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "PrivacyNoticeConfig";
    objects: {
        createdBy: Prisma.$AppUserPayload<ExtArgs>;
        acknowledgments: Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        version: number;
        noticeText: string;
        status: $Enums.GovernedItemStatus;
        effectiveFrom: Date | null;
        createdByUserId: string;
        createdAt: Date;
    }, ExtArgs["result"]["privacyNoticeConfig"]>;
    composites: {};
};
export type PrivacyNoticeConfigGetPayload<S extends boolean | null | undefined | PrivacyNoticeConfigDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload, S>;
export type PrivacyNoticeConfigCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<PrivacyNoticeConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PrivacyNoticeConfigCountAggregateInputType | true;
};
export interface PrivacyNoticeConfigDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['PrivacyNoticeConfig'];
        meta: {
            name: 'PrivacyNoticeConfig';
        };
    };
    findUnique<T extends PrivacyNoticeConfigFindUniqueArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigFindUniqueArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends PrivacyNoticeConfigFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends PrivacyNoticeConfigFindFirstArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigFindFirstArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends PrivacyNoticeConfigFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends PrivacyNoticeConfigFindManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends PrivacyNoticeConfigCreateArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigCreateArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends PrivacyNoticeConfigCreateManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends PrivacyNoticeConfigCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends PrivacyNoticeConfigDeleteArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigDeleteArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends PrivacyNoticeConfigUpdateArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigUpdateArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends PrivacyNoticeConfigDeleteManyArgs>(args?: Prisma.SelectSubset<T, PrivacyNoticeConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends PrivacyNoticeConfigUpdateManyArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends PrivacyNoticeConfigUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends PrivacyNoticeConfigUpsertArgs>(args: Prisma.SelectSubset<T, PrivacyNoticeConfigUpsertArgs<ExtArgs>>): Prisma.Prisma__PrivacyNoticeConfigClient<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends PrivacyNoticeConfigCountArgs>(args?: Prisma.Subset<T, PrivacyNoticeConfigCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PrivacyNoticeConfigCountAggregateOutputType> : number>;
    aggregate<T extends PrivacyNoticeConfigAggregateArgs>(args: Prisma.Subset<T, PrivacyNoticeConfigAggregateArgs>): Prisma.PrismaPromise<GetPrivacyNoticeConfigAggregateType<T>>;
    groupBy<T extends PrivacyNoticeConfigGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: PrivacyNoticeConfigGroupByArgs['orderBy'];
    } : {
        orderBy?: PrivacyNoticeConfigGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, PrivacyNoticeConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrivacyNoticeConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: PrivacyNoticeConfigFieldRefs;
}
export interface Prisma__PrivacyNoticeConfigClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    createdBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    acknowledgments<T extends Prisma.PrivacyNoticeConfig$acknowledgmentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.PrivacyNoticeConfig$acknowledgmentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PrivacyNoticeAcknowledgmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface PrivacyNoticeConfigFieldRefs {
    readonly id: Prisma.FieldRef<"PrivacyNoticeConfig", 'String'>;
    readonly version: Prisma.FieldRef<"PrivacyNoticeConfig", 'Int'>;
    readonly noticeText: Prisma.FieldRef<"PrivacyNoticeConfig", 'String'>;
    readonly status: Prisma.FieldRef<"PrivacyNoticeConfig", 'GovernedItemStatus'>;
    readonly effectiveFrom: Prisma.FieldRef<"PrivacyNoticeConfig", 'DateTime'>;
    readonly createdByUserId: Prisma.FieldRef<"PrivacyNoticeConfig", 'String'>;
    readonly createdAt: Prisma.FieldRef<"PrivacyNoticeConfig", 'DateTime'>;
}
export type PrivacyNoticeConfigFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
};
export type PrivacyNoticeConfigFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
};
export type PrivacyNoticeConfigFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    orderBy?: Prisma.PrivacyNoticeConfigOrderByWithRelationInput | Prisma.PrivacyNoticeConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeConfigScalarFieldEnum | Prisma.PrivacyNoticeConfigScalarFieldEnum[];
};
export type PrivacyNoticeConfigFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    orderBy?: Prisma.PrivacyNoticeConfigOrderByWithRelationInput | Prisma.PrivacyNoticeConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeConfigScalarFieldEnum | Prisma.PrivacyNoticeConfigScalarFieldEnum[];
};
export type PrivacyNoticeConfigFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    orderBy?: Prisma.PrivacyNoticeConfigOrderByWithRelationInput | Prisma.PrivacyNoticeConfigOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeConfigScalarFieldEnum | Prisma.PrivacyNoticeConfigScalarFieldEnum[];
};
export type PrivacyNoticeConfigCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateInput, Prisma.PrivacyNoticeConfigUncheckedCreateInput>;
};
export type PrivacyNoticeConfigCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.PrivacyNoticeConfigCreateManyInput | Prisma.PrivacyNoticeConfigCreateManyInput[];
    skipDuplicates?: boolean;
};
export type PrivacyNoticeConfigCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    data: Prisma.PrivacyNoticeConfigCreateManyInput | Prisma.PrivacyNoticeConfigCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.PrivacyNoticeConfigIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type PrivacyNoticeConfigUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateInput, Prisma.PrivacyNoticeConfigUncheckedUpdateInput>;
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
};
export type PrivacyNoticeConfigUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateManyMutationInput, Prisma.PrivacyNoticeConfigUncheckedUpdateManyInput>;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    limit?: number;
};
export type PrivacyNoticeConfigUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateManyMutationInput, Prisma.PrivacyNoticeConfigUncheckedUpdateManyInput>;
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    limit?: number;
    include?: Prisma.PrivacyNoticeConfigIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type PrivacyNoticeConfigUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
    create: Prisma.XOR<Prisma.PrivacyNoticeConfigCreateInput, Prisma.PrivacyNoticeConfigUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.PrivacyNoticeConfigUpdateInput, Prisma.PrivacyNoticeConfigUncheckedUpdateInput>;
};
export type PrivacyNoticeConfigDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
    where: Prisma.PrivacyNoticeConfigWhereUniqueInput;
};
export type PrivacyNoticeConfigDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PrivacyNoticeConfigWhereInput;
    limit?: number;
};
export type PrivacyNoticeConfig$acknowledgmentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeAcknowledgmentSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeAcknowledgmentOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeAcknowledgmentInclude<ExtArgs> | null;
    where?: Prisma.PrivacyNoticeAcknowledgmentWhereInput;
    orderBy?: Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput | Prisma.PrivacyNoticeAcknowledgmentOrderByWithRelationInput[];
    cursor?: Prisma.PrivacyNoticeAcknowledgmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum | Prisma.PrivacyNoticeAcknowledgmentScalarFieldEnum[];
};
export type PrivacyNoticeConfigDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.PrivacyNoticeConfigSelect<ExtArgs> | null;
    omit?: Prisma.PrivacyNoticeConfigOmit<ExtArgs> | null;
    include?: Prisma.PrivacyNoticeConfigInclude<ExtArgs> | null;
};
