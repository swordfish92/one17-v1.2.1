import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RetentionScheduleEntryModel = runtime.Types.Result.DefaultSelection<Prisma.$RetentionScheduleEntryPayload>;
export type AggregateRetentionScheduleEntry = {
    _count: RetentionScheduleEntryCountAggregateOutputType | null;
    _avg: RetentionScheduleEntryAvgAggregateOutputType | null;
    _sum: RetentionScheduleEntrySumAggregateOutputType | null;
    _min: RetentionScheduleEntryMinAggregateOutputType | null;
    _max: RetentionScheduleEntryMaxAggregateOutputType | null;
};
export type RetentionScheduleEntryAvgAggregateOutputType = {
    retentionPeriodMonths: number | null;
};
export type RetentionScheduleEntrySumAggregateOutputType = {
    retentionPeriodMonths: number | null;
};
export type RetentionScheduleEntryMinAggregateOutputType = {
    id: string | null;
    dataClass: string | null;
    description: string | null;
    retentionPeriodMonths: number | null;
    statutoryBasis: string | null;
    disposalTreatment: string | null;
    status: $Enums.GovernedItemStatus | null;
    confirmedByUserId: string | null;
    confirmedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RetentionScheduleEntryMaxAggregateOutputType = {
    id: string | null;
    dataClass: string | null;
    description: string | null;
    retentionPeriodMonths: number | null;
    statutoryBasis: string | null;
    disposalTreatment: string | null;
    status: $Enums.GovernedItemStatus | null;
    confirmedByUserId: string | null;
    confirmedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RetentionScheduleEntryCountAggregateOutputType = {
    id: number;
    dataClass: number;
    description: number;
    retentionPeriodMonths: number;
    statutoryBasis: number;
    disposalTreatment: number;
    status: number;
    confirmedByUserId: number;
    confirmedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RetentionScheduleEntryAvgAggregateInputType = {
    retentionPeriodMonths?: true;
};
export type RetentionScheduleEntrySumAggregateInputType = {
    retentionPeriodMonths?: true;
};
export type RetentionScheduleEntryMinAggregateInputType = {
    id?: true;
    dataClass?: true;
    description?: true;
    retentionPeriodMonths?: true;
    statutoryBasis?: true;
    disposalTreatment?: true;
    status?: true;
    confirmedByUserId?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RetentionScheduleEntryMaxAggregateInputType = {
    id?: true;
    dataClass?: true;
    description?: true;
    retentionPeriodMonths?: true;
    statutoryBasis?: true;
    disposalTreatment?: true;
    status?: true;
    confirmedByUserId?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RetentionScheduleEntryCountAggregateInputType = {
    id?: true;
    dataClass?: true;
    description?: true;
    retentionPeriodMonths?: true;
    statutoryBasis?: true;
    disposalTreatment?: true;
    status?: true;
    confirmedByUserId?: true;
    confirmedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RetentionScheduleEntryAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RetentionScheduleEntryWhereInput;
    orderBy?: Prisma.RetentionScheduleEntryOrderByWithRelationInput | Prisma.RetentionScheduleEntryOrderByWithRelationInput[];
    cursor?: Prisma.RetentionScheduleEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RetentionScheduleEntryCountAggregateInputType;
    _avg?: RetentionScheduleEntryAvgAggregateInputType;
    _sum?: RetentionScheduleEntrySumAggregateInputType;
    _min?: RetentionScheduleEntryMinAggregateInputType;
    _max?: RetentionScheduleEntryMaxAggregateInputType;
};
export type GetRetentionScheduleEntryAggregateType<T extends RetentionScheduleEntryAggregateArgs> = {
    [P in keyof T & keyof AggregateRetentionScheduleEntry]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRetentionScheduleEntry[P]> : Prisma.GetScalarType<T[P], AggregateRetentionScheduleEntry[P]>;
};
export type RetentionScheduleEntryGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RetentionScheduleEntryWhereInput;
    orderBy?: Prisma.RetentionScheduleEntryOrderByWithAggregationInput | Prisma.RetentionScheduleEntryOrderByWithAggregationInput[];
    by: Prisma.RetentionScheduleEntryScalarFieldEnum[] | Prisma.RetentionScheduleEntryScalarFieldEnum;
    having?: Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RetentionScheduleEntryCountAggregateInputType | true;
    _avg?: RetentionScheduleEntryAvgAggregateInputType;
    _sum?: RetentionScheduleEntrySumAggregateInputType;
    _min?: RetentionScheduleEntryMinAggregateInputType;
    _max?: RetentionScheduleEntryMaxAggregateInputType;
};
export type RetentionScheduleEntryGroupByOutputType = {
    id: string;
    dataClass: string;
    description: string | null;
    retentionPeriodMonths: number | null;
    statutoryBasis: string | null;
    disposalTreatment: string | null;
    status: $Enums.GovernedItemStatus;
    confirmedByUserId: string | null;
    confirmedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RetentionScheduleEntryCountAggregateOutputType | null;
    _avg: RetentionScheduleEntryAvgAggregateOutputType | null;
    _sum: RetentionScheduleEntrySumAggregateOutputType | null;
    _min: RetentionScheduleEntryMinAggregateOutputType | null;
    _max: RetentionScheduleEntryMaxAggregateOutputType | null;
};
export type GetRetentionScheduleEntryGroupByPayload<T extends RetentionScheduleEntryGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RetentionScheduleEntryGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RetentionScheduleEntryGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RetentionScheduleEntryGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RetentionScheduleEntryGroupByOutputType[P]>;
}>>;
export type RetentionScheduleEntryWhereInput = {
    AND?: Prisma.RetentionScheduleEntryWhereInput | Prisma.RetentionScheduleEntryWhereInput[];
    OR?: Prisma.RetentionScheduleEntryWhereInput[];
    NOT?: Prisma.RetentionScheduleEntryWhereInput | Prisma.RetentionScheduleEntryWhereInput[];
    id?: Prisma.UuidFilter<"RetentionScheduleEntry"> | string;
    dataClass?: Prisma.StringFilter<"RetentionScheduleEntry"> | string;
    description?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    retentionPeriodMonths?: Prisma.IntNullableFilter<"RetentionScheduleEntry"> | number | null;
    statutoryBasis?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    disposalTreatment?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"RetentionScheduleEntry"> | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.UuidNullableFilter<"RetentionScheduleEntry"> | string | null;
    confirmedAt?: Prisma.DateTimeNullableFilter<"RetentionScheduleEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
    confirmedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
};
export type RetentionScheduleEntryOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    dataClass?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    retentionPeriodMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutoryBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    disposalTreatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    confirmedBy?: Prisma.AppUserOrderByWithRelationInput;
};
export type RetentionScheduleEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RetentionScheduleEntryWhereInput | Prisma.RetentionScheduleEntryWhereInput[];
    OR?: Prisma.RetentionScheduleEntryWhereInput[];
    NOT?: Prisma.RetentionScheduleEntryWhereInput | Prisma.RetentionScheduleEntryWhereInput[];
    dataClass?: Prisma.StringFilter<"RetentionScheduleEntry"> | string;
    description?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    retentionPeriodMonths?: Prisma.IntNullableFilter<"RetentionScheduleEntry"> | number | null;
    statutoryBasis?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    disposalTreatment?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"RetentionScheduleEntry"> | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.UuidNullableFilter<"RetentionScheduleEntry"> | string | null;
    confirmedAt?: Prisma.DateTimeNullableFilter<"RetentionScheduleEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
    confirmedBy?: Prisma.XOR<Prisma.AppUserNullableScalarRelationFilter, Prisma.AppUserWhereInput> | null;
}, "id">;
export type RetentionScheduleEntryOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    dataClass?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    retentionPeriodMonths?: Prisma.SortOrderInput | Prisma.SortOrder;
    statutoryBasis?: Prisma.SortOrderInput | Prisma.SortOrder;
    disposalTreatment?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrderInput | Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RetentionScheduleEntryCountOrderByAggregateInput;
    _avg?: Prisma.RetentionScheduleEntryAvgOrderByAggregateInput;
    _max?: Prisma.RetentionScheduleEntryMaxOrderByAggregateInput;
    _min?: Prisma.RetentionScheduleEntryMinOrderByAggregateInput;
    _sum?: Prisma.RetentionScheduleEntrySumOrderByAggregateInput;
};
export type RetentionScheduleEntryScalarWhereWithAggregatesInput = {
    AND?: Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput | Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput[];
    OR?: Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput | Prisma.RetentionScheduleEntryScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"RetentionScheduleEntry"> | string;
    dataClass?: Prisma.StringWithAggregatesFilter<"RetentionScheduleEntry"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"RetentionScheduleEntry"> | string | null;
    retentionPeriodMonths?: Prisma.IntNullableWithAggregatesFilter<"RetentionScheduleEntry"> | number | null;
    statutoryBasis?: Prisma.StringNullableWithAggregatesFilter<"RetentionScheduleEntry"> | string | null;
    disposalTreatment?: Prisma.StringNullableWithAggregatesFilter<"RetentionScheduleEntry"> | string | null;
    status?: Prisma.EnumGovernedItemStatusWithAggregatesFilter<"RetentionScheduleEntry"> | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.UuidNullableWithAggregatesFilter<"RetentionScheduleEntry"> | string | null;
    confirmedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RetentionScheduleEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RetentionScheduleEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RetentionScheduleEntry"> | Date | string;
};
export type RetentionScheduleEntryCreateInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    confirmedBy?: Prisma.AppUserCreateNestedOneWithoutRetentionScheduleConfirmedInput;
};
export type RetentionScheduleEntryUncheckedCreateInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedByUserId?: string | null;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RetentionScheduleEntryUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    confirmedBy?: Prisma.AppUserUpdateOneWithoutRetentionScheduleConfirmedNestedInput;
};
export type RetentionScheduleEntryUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntryCreateManyInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedByUserId?: string | null;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RetentionScheduleEntryUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntryUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntryListRelationFilter = {
    every?: Prisma.RetentionScheduleEntryWhereInput;
    some?: Prisma.RetentionScheduleEntryWhereInput;
    none?: Prisma.RetentionScheduleEntryWhereInput;
};
export type RetentionScheduleEntryOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RetentionScheduleEntryCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dataClass?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    retentionPeriodMonths?: Prisma.SortOrder;
    statutoryBasis?: Prisma.SortOrder;
    disposalTreatment?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RetentionScheduleEntryAvgOrderByAggregateInput = {
    retentionPeriodMonths?: Prisma.SortOrder;
};
export type RetentionScheduleEntryMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dataClass?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    retentionPeriodMonths?: Prisma.SortOrder;
    statutoryBasis?: Prisma.SortOrder;
    disposalTreatment?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RetentionScheduleEntryMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    dataClass?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    retentionPeriodMonths?: Prisma.SortOrder;
    statutoryBasis?: Prisma.SortOrder;
    disposalTreatment?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    confirmedByUserId?: Prisma.SortOrder;
    confirmedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RetentionScheduleEntrySumOrderByAggregateInput = {
    retentionPeriodMonths?: Prisma.SortOrder;
};
export type RetentionScheduleEntryCreateNestedManyWithoutConfirmedByInput = {
    create?: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput> | Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput[] | Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput | Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput[];
    createMany?: Prisma.RetentionScheduleEntryCreateManyConfirmedByInputEnvelope;
    connect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
};
export type RetentionScheduleEntryUncheckedCreateNestedManyWithoutConfirmedByInput = {
    create?: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput> | Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput[] | Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput | Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput[];
    createMany?: Prisma.RetentionScheduleEntryCreateManyConfirmedByInputEnvelope;
    connect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
};
export type RetentionScheduleEntryUpdateManyWithoutConfirmedByNestedInput = {
    create?: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput> | Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput[] | Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput | Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput[];
    upsert?: Prisma.RetentionScheduleEntryUpsertWithWhereUniqueWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpsertWithWhereUniqueWithoutConfirmedByInput[];
    createMany?: Prisma.RetentionScheduleEntryCreateManyConfirmedByInputEnvelope;
    set?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    disconnect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    delete?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    connect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    update?: Prisma.RetentionScheduleEntryUpdateWithWhereUniqueWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpdateWithWhereUniqueWithoutConfirmedByInput[];
    updateMany?: Prisma.RetentionScheduleEntryUpdateManyWithWhereWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpdateManyWithWhereWithoutConfirmedByInput[];
    deleteMany?: Prisma.RetentionScheduleEntryScalarWhereInput | Prisma.RetentionScheduleEntryScalarWhereInput[];
};
export type RetentionScheduleEntryUncheckedUpdateManyWithoutConfirmedByNestedInput = {
    create?: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput> | Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput[] | Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput[];
    connectOrCreate?: Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput | Prisma.RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput[];
    upsert?: Prisma.RetentionScheduleEntryUpsertWithWhereUniqueWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpsertWithWhereUniqueWithoutConfirmedByInput[];
    createMany?: Prisma.RetentionScheduleEntryCreateManyConfirmedByInputEnvelope;
    set?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    disconnect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    delete?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    connect?: Prisma.RetentionScheduleEntryWhereUniqueInput | Prisma.RetentionScheduleEntryWhereUniqueInput[];
    update?: Prisma.RetentionScheduleEntryUpdateWithWhereUniqueWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpdateWithWhereUniqueWithoutConfirmedByInput[];
    updateMany?: Prisma.RetentionScheduleEntryUpdateManyWithWhereWithoutConfirmedByInput | Prisma.RetentionScheduleEntryUpdateManyWithWhereWithoutConfirmedByInput[];
    deleteMany?: Prisma.RetentionScheduleEntryScalarWhereInput | Prisma.RetentionScheduleEntryScalarWhereInput[];
};
export type RetentionScheduleEntryCreateWithoutConfirmedByInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RetentionScheduleEntryCreateOrConnectWithoutConfirmedByInput = {
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput>;
};
export type RetentionScheduleEntryCreateManyConfirmedByInputEnvelope = {
    data: Prisma.RetentionScheduleEntryCreateManyConfirmedByInput | Prisma.RetentionScheduleEntryCreateManyConfirmedByInput[];
    skipDuplicates?: boolean;
};
export type RetentionScheduleEntryUpsertWithWhereUniqueWithoutConfirmedByInput = {
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
    update: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedUpdateWithoutConfirmedByInput>;
    create: Prisma.XOR<Prisma.RetentionScheduleEntryCreateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedCreateWithoutConfirmedByInput>;
};
export type RetentionScheduleEntryUpdateWithWhereUniqueWithoutConfirmedByInput = {
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
    data: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateWithoutConfirmedByInput, Prisma.RetentionScheduleEntryUncheckedUpdateWithoutConfirmedByInput>;
};
export type RetentionScheduleEntryUpdateManyWithWhereWithoutConfirmedByInput = {
    where: Prisma.RetentionScheduleEntryScalarWhereInput;
    data: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateManyMutationInput, Prisma.RetentionScheduleEntryUncheckedUpdateManyWithoutConfirmedByInput>;
};
export type RetentionScheduleEntryScalarWhereInput = {
    AND?: Prisma.RetentionScheduleEntryScalarWhereInput | Prisma.RetentionScheduleEntryScalarWhereInput[];
    OR?: Prisma.RetentionScheduleEntryScalarWhereInput[];
    NOT?: Prisma.RetentionScheduleEntryScalarWhereInput | Prisma.RetentionScheduleEntryScalarWhereInput[];
    id?: Prisma.UuidFilter<"RetentionScheduleEntry"> | string;
    dataClass?: Prisma.StringFilter<"RetentionScheduleEntry"> | string;
    description?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    retentionPeriodMonths?: Prisma.IntNullableFilter<"RetentionScheduleEntry"> | number | null;
    statutoryBasis?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    disposalTreatment?: Prisma.StringNullableFilter<"RetentionScheduleEntry"> | string | null;
    status?: Prisma.EnumGovernedItemStatusFilter<"RetentionScheduleEntry"> | $Enums.GovernedItemStatus;
    confirmedByUserId?: Prisma.UuidNullableFilter<"RetentionScheduleEntry"> | string | null;
    confirmedAt?: Prisma.DateTimeNullableFilter<"RetentionScheduleEntry"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RetentionScheduleEntry"> | Date | string;
};
export type RetentionScheduleEntryCreateManyConfirmedByInput = {
    id?: string;
    dataClass: string;
    description?: string | null;
    retentionPeriodMonths?: number | null;
    statutoryBasis?: string | null;
    disposalTreatment?: string | null;
    status?: $Enums.GovernedItemStatus;
    confirmedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RetentionScheduleEntryUpdateWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntryUncheckedUpdateWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntryUncheckedUpdateManyWithoutConfirmedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dataClass?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    retentionPeriodMonths?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    statutoryBasis?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disposalTreatment?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumGovernedItemStatusFieldUpdateOperationsInput | $Enums.GovernedItemStatus;
    confirmedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RetentionScheduleEntrySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dataClass?: boolean;
    description?: boolean;
    retentionPeriodMonths?: boolean;
    statutoryBasis?: boolean;
    disposalTreatment?: boolean;
    status?: boolean;
    confirmedByUserId?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
}, ExtArgs["result"]["retentionScheduleEntry"]>;
export type RetentionScheduleEntrySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dataClass?: boolean;
    description?: boolean;
    retentionPeriodMonths?: boolean;
    statutoryBasis?: boolean;
    disposalTreatment?: boolean;
    status?: boolean;
    confirmedByUserId?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
}, ExtArgs["result"]["retentionScheduleEntry"]>;
export type RetentionScheduleEntrySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    dataClass?: boolean;
    description?: boolean;
    retentionPeriodMonths?: boolean;
    statutoryBasis?: boolean;
    disposalTreatment?: boolean;
    status?: boolean;
    confirmedByUserId?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
}, ExtArgs["result"]["retentionScheduleEntry"]>;
export type RetentionScheduleEntrySelectScalar = {
    id?: boolean;
    dataClass?: boolean;
    description?: boolean;
    retentionPeriodMonths?: boolean;
    statutoryBasis?: boolean;
    disposalTreatment?: boolean;
    status?: boolean;
    confirmedByUserId?: boolean;
    confirmedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RetentionScheduleEntryOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "dataClass" | "description" | "retentionPeriodMonths" | "statutoryBasis" | "disposalTreatment" | "status" | "confirmedByUserId" | "confirmedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["retentionScheduleEntry"]>;
export type RetentionScheduleEntryInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
};
export type RetentionScheduleEntryIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
};
export type RetentionScheduleEntryIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    confirmedBy?: boolean | Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>;
};
export type $RetentionScheduleEntryPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RetentionScheduleEntry";
    objects: {
        confirmedBy: Prisma.$AppUserPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        dataClass: string;
        description: string | null;
        retentionPeriodMonths: number | null;
        statutoryBasis: string | null;
        disposalTreatment: string | null;
        status: $Enums.GovernedItemStatus;
        confirmedByUserId: string | null;
        confirmedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["retentionScheduleEntry"]>;
    composites: {};
};
export type RetentionScheduleEntryGetPayload<S extends boolean | null | undefined | RetentionScheduleEntryDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload, S>;
export type RetentionScheduleEntryCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RetentionScheduleEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RetentionScheduleEntryCountAggregateInputType | true;
};
export interface RetentionScheduleEntryDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RetentionScheduleEntry'];
        meta: {
            name: 'RetentionScheduleEntry';
        };
    };
    findUnique<T extends RetentionScheduleEntryFindUniqueArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RetentionScheduleEntryFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RetentionScheduleEntryFindFirstArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryFindFirstArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RetentionScheduleEntryFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RetentionScheduleEntryFindManyArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RetentionScheduleEntryCreateArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryCreateArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RetentionScheduleEntryCreateManyArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RetentionScheduleEntryCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RetentionScheduleEntryDeleteArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryDeleteArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RetentionScheduleEntryUpdateArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryUpdateArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RetentionScheduleEntryDeleteManyArgs>(args?: Prisma.SelectSubset<T, RetentionScheduleEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RetentionScheduleEntryUpdateManyArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RetentionScheduleEntryUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RetentionScheduleEntryUpsertArgs>(args: Prisma.SelectSubset<T, RetentionScheduleEntryUpsertArgs<ExtArgs>>): Prisma.Prisma__RetentionScheduleEntryClient<runtime.Types.Result.GetResult<Prisma.$RetentionScheduleEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RetentionScheduleEntryCountArgs>(args?: Prisma.Subset<T, RetentionScheduleEntryCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RetentionScheduleEntryCountAggregateOutputType> : number>;
    aggregate<T extends RetentionScheduleEntryAggregateArgs>(args: Prisma.Subset<T, RetentionScheduleEntryAggregateArgs>): Prisma.PrismaPromise<GetRetentionScheduleEntryAggregateType<T>>;
    groupBy<T extends RetentionScheduleEntryGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RetentionScheduleEntryGroupByArgs['orderBy'];
    } : {
        orderBy?: RetentionScheduleEntryGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RetentionScheduleEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetentionScheduleEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RetentionScheduleEntryFieldRefs;
}
export interface Prisma__RetentionScheduleEntryClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    confirmedBy<T extends Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RetentionScheduleEntry$confirmedByArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RetentionScheduleEntryFieldRefs {
    readonly id: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly dataClass: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly description: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly retentionPeriodMonths: Prisma.FieldRef<"RetentionScheduleEntry", 'Int'>;
    readonly statutoryBasis: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly disposalTreatment: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly status: Prisma.FieldRef<"RetentionScheduleEntry", 'GovernedItemStatus'>;
    readonly confirmedByUserId: Prisma.FieldRef<"RetentionScheduleEntry", 'String'>;
    readonly confirmedAt: Prisma.FieldRef<"RetentionScheduleEntry", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"RetentionScheduleEntry", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RetentionScheduleEntry", 'DateTime'>;
}
export type RetentionScheduleEntryFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
};
export type RetentionScheduleEntryFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
};
export type RetentionScheduleEntryFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where?: Prisma.RetentionScheduleEntryWhereInput;
    orderBy?: Prisma.RetentionScheduleEntryOrderByWithRelationInput | Prisma.RetentionScheduleEntryOrderByWithRelationInput[];
    cursor?: Prisma.RetentionScheduleEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RetentionScheduleEntryScalarFieldEnum | Prisma.RetentionScheduleEntryScalarFieldEnum[];
};
export type RetentionScheduleEntryFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where?: Prisma.RetentionScheduleEntryWhereInput;
    orderBy?: Prisma.RetentionScheduleEntryOrderByWithRelationInput | Prisma.RetentionScheduleEntryOrderByWithRelationInput[];
    cursor?: Prisma.RetentionScheduleEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RetentionScheduleEntryScalarFieldEnum | Prisma.RetentionScheduleEntryScalarFieldEnum[];
};
export type RetentionScheduleEntryFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where?: Prisma.RetentionScheduleEntryWhereInput;
    orderBy?: Prisma.RetentionScheduleEntryOrderByWithRelationInput | Prisma.RetentionScheduleEntryOrderByWithRelationInput[];
    cursor?: Prisma.RetentionScheduleEntryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RetentionScheduleEntryScalarFieldEnum | Prisma.RetentionScheduleEntryScalarFieldEnum[];
};
export type RetentionScheduleEntryCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RetentionScheduleEntryCreateInput, Prisma.RetentionScheduleEntryUncheckedCreateInput>;
};
export type RetentionScheduleEntryCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RetentionScheduleEntryCreateManyInput | Prisma.RetentionScheduleEntryCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RetentionScheduleEntryCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    data: Prisma.RetentionScheduleEntryCreateManyInput | Prisma.RetentionScheduleEntryCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RetentionScheduleEntryIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RetentionScheduleEntryUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateInput, Prisma.RetentionScheduleEntryUncheckedUpdateInput>;
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
};
export type RetentionScheduleEntryUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateManyMutationInput, Prisma.RetentionScheduleEntryUncheckedUpdateManyInput>;
    where?: Prisma.RetentionScheduleEntryWhereInput;
    limit?: number;
};
export type RetentionScheduleEntryUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateManyMutationInput, Prisma.RetentionScheduleEntryUncheckedUpdateManyInput>;
    where?: Prisma.RetentionScheduleEntryWhereInput;
    limit?: number;
    include?: Prisma.RetentionScheduleEntryIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RetentionScheduleEntryUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
    create: Prisma.XOR<Prisma.RetentionScheduleEntryCreateInput, Prisma.RetentionScheduleEntryUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RetentionScheduleEntryUpdateInput, Prisma.RetentionScheduleEntryUncheckedUpdateInput>;
};
export type RetentionScheduleEntryDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
    where: Prisma.RetentionScheduleEntryWhereUniqueInput;
};
export type RetentionScheduleEntryDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RetentionScheduleEntryWhereInput;
    limit?: number;
};
export type RetentionScheduleEntry$confirmedByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AppUserSelect<ExtArgs> | null;
    omit?: Prisma.AppUserOmit<ExtArgs> | null;
    include?: Prisma.AppUserInclude<ExtArgs> | null;
    where?: Prisma.AppUserWhereInput;
};
export type RetentionScheduleEntryDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RetentionScheduleEntrySelect<ExtArgs> | null;
    omit?: Prisma.RetentionScheduleEntryOmit<ExtArgs> | null;
    include?: Prisma.RetentionScheduleEntryInclude<ExtArgs> | null;
};
