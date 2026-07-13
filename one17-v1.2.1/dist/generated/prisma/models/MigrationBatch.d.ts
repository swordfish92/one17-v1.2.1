import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MigrationBatchModel = runtime.Types.Result.DefaultSelection<Prisma.$MigrationBatchPayload>;
export type AggregateMigrationBatch = {
    _count: MigrationBatchCountAggregateOutputType | null;
    _avg: MigrationBatchAvgAggregateOutputType | null;
    _sum: MigrationBatchSumAggregateOutputType | null;
    _min: MigrationBatchMinAggregateOutputType | null;
    _max: MigrationBatchMaxAggregateOutputType | null;
};
export type MigrationBatchAvgAggregateOutputType = {
    totalRows: number | null;
    validRows: number | null;
    rejectedRows: number | null;
    promotedRows: number | null;
};
export type MigrationBatchSumAggregateOutputType = {
    totalRows: number | null;
    validRows: number | null;
    rejectedRows: number | null;
    promotedRows: number | null;
};
export type MigrationBatchMinAggregateOutputType = {
    id: string | null;
    tplCode: string | null;
    fileName: string | null;
    uploadedByUserId: string | null;
    status: $Enums.MigrationBatchStatus | null;
    totalRows: number | null;
    validRows: number | null;
    rejectedRows: number | null;
    promotedRows: number | null;
    createdAt: Date | null;
    validatedAt: Date | null;
    promotedAt: Date | null;
};
export type MigrationBatchMaxAggregateOutputType = {
    id: string | null;
    tplCode: string | null;
    fileName: string | null;
    uploadedByUserId: string | null;
    status: $Enums.MigrationBatchStatus | null;
    totalRows: number | null;
    validRows: number | null;
    rejectedRows: number | null;
    promotedRows: number | null;
    createdAt: Date | null;
    validatedAt: Date | null;
    promotedAt: Date | null;
};
export type MigrationBatchCountAggregateOutputType = {
    id: number;
    tplCode: number;
    fileName: number;
    uploadedByUserId: number;
    status: number;
    totalRows: number;
    validRows: number;
    rejectedRows: number;
    promotedRows: number;
    createdAt: number;
    validatedAt: number;
    promotedAt: number;
    _all: number;
};
export type MigrationBatchAvgAggregateInputType = {
    totalRows?: true;
    validRows?: true;
    rejectedRows?: true;
    promotedRows?: true;
};
export type MigrationBatchSumAggregateInputType = {
    totalRows?: true;
    validRows?: true;
    rejectedRows?: true;
    promotedRows?: true;
};
export type MigrationBatchMinAggregateInputType = {
    id?: true;
    tplCode?: true;
    fileName?: true;
    uploadedByUserId?: true;
    status?: true;
    totalRows?: true;
    validRows?: true;
    rejectedRows?: true;
    promotedRows?: true;
    createdAt?: true;
    validatedAt?: true;
    promotedAt?: true;
};
export type MigrationBatchMaxAggregateInputType = {
    id?: true;
    tplCode?: true;
    fileName?: true;
    uploadedByUserId?: true;
    status?: true;
    totalRows?: true;
    validRows?: true;
    rejectedRows?: true;
    promotedRows?: true;
    createdAt?: true;
    validatedAt?: true;
    promotedAt?: true;
};
export type MigrationBatchCountAggregateInputType = {
    id?: true;
    tplCode?: true;
    fileName?: true;
    uploadedByUserId?: true;
    status?: true;
    totalRows?: true;
    validRows?: true;
    rejectedRows?: true;
    promotedRows?: true;
    createdAt?: true;
    validatedAt?: true;
    promotedAt?: true;
    _all?: true;
};
export type MigrationBatchAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationBatchWhereInput;
    orderBy?: Prisma.MigrationBatchOrderByWithRelationInput | Prisma.MigrationBatchOrderByWithRelationInput[];
    cursor?: Prisma.MigrationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MigrationBatchCountAggregateInputType;
    _avg?: MigrationBatchAvgAggregateInputType;
    _sum?: MigrationBatchSumAggregateInputType;
    _min?: MigrationBatchMinAggregateInputType;
    _max?: MigrationBatchMaxAggregateInputType;
};
export type GetMigrationBatchAggregateType<T extends MigrationBatchAggregateArgs> = {
    [P in keyof T & keyof AggregateMigrationBatch]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMigrationBatch[P]> : Prisma.GetScalarType<T[P], AggregateMigrationBatch[P]>;
};
export type MigrationBatchGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationBatchWhereInput;
    orderBy?: Prisma.MigrationBatchOrderByWithAggregationInput | Prisma.MigrationBatchOrderByWithAggregationInput[];
    by: Prisma.MigrationBatchScalarFieldEnum[] | Prisma.MigrationBatchScalarFieldEnum;
    having?: Prisma.MigrationBatchScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MigrationBatchCountAggregateInputType | true;
    _avg?: MigrationBatchAvgAggregateInputType;
    _sum?: MigrationBatchSumAggregateInputType;
    _min?: MigrationBatchMinAggregateInputType;
    _max?: MigrationBatchMaxAggregateInputType;
};
export type MigrationBatchGroupByOutputType = {
    id: string;
    tplCode: string;
    fileName: string;
    uploadedByUserId: string;
    status: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows: number | null;
    rejectedRows: number | null;
    promotedRows: number | null;
    createdAt: Date;
    validatedAt: Date | null;
    promotedAt: Date | null;
    _count: MigrationBatchCountAggregateOutputType | null;
    _avg: MigrationBatchAvgAggregateOutputType | null;
    _sum: MigrationBatchSumAggregateOutputType | null;
    _min: MigrationBatchMinAggregateOutputType | null;
    _max: MigrationBatchMaxAggregateOutputType | null;
};
export type GetMigrationBatchGroupByPayload<T extends MigrationBatchGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MigrationBatchGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MigrationBatchGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MigrationBatchGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MigrationBatchGroupByOutputType[P]>;
}>>;
export type MigrationBatchWhereInput = {
    AND?: Prisma.MigrationBatchWhereInput | Prisma.MigrationBatchWhereInput[];
    OR?: Prisma.MigrationBatchWhereInput[];
    NOT?: Prisma.MigrationBatchWhereInput | Prisma.MigrationBatchWhereInput[];
    id?: Prisma.UuidFilter<"MigrationBatch"> | string;
    tplCode?: Prisma.StringFilter<"MigrationBatch"> | string;
    fileName?: Prisma.StringFilter<"MigrationBatch"> | string;
    uploadedByUserId?: Prisma.UuidFilter<"MigrationBatch"> | string;
    status?: Prisma.EnumMigrationBatchStatusFilter<"MigrationBatch"> | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFilter<"MigrationBatch"> | number;
    validRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    rejectedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    promotedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationBatch"> | Date | string;
    validatedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    rows?: Prisma.MigrationStagingRowListRelationFilter;
};
export type MigrationBatchOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    tplCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    validatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    uploadedBy?: Prisma.AppUserOrderByWithRelationInput;
    rows?: Prisma.MigrationStagingRowOrderByRelationAggregateInput;
};
export type MigrationBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.MigrationBatchWhereInput | Prisma.MigrationBatchWhereInput[];
    OR?: Prisma.MigrationBatchWhereInput[];
    NOT?: Prisma.MigrationBatchWhereInput | Prisma.MigrationBatchWhereInput[];
    tplCode?: Prisma.StringFilter<"MigrationBatch"> | string;
    fileName?: Prisma.StringFilter<"MigrationBatch"> | string;
    uploadedByUserId?: Prisma.UuidFilter<"MigrationBatch"> | string;
    status?: Prisma.EnumMigrationBatchStatusFilter<"MigrationBatch"> | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFilter<"MigrationBatch"> | number;
    validRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    rejectedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    promotedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationBatch"> | Date | string;
    validatedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
    uploadedBy?: Prisma.XOR<Prisma.AppUserScalarRelationFilter, Prisma.AppUserWhereInput>;
    rows?: Prisma.MigrationStagingRowListRelationFilter;
}, "id">;
export type MigrationBatchOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    tplCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedRows?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    validatedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    promotedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MigrationBatchCountOrderByAggregateInput;
    _avg?: Prisma.MigrationBatchAvgOrderByAggregateInput;
    _max?: Prisma.MigrationBatchMaxOrderByAggregateInput;
    _min?: Prisma.MigrationBatchMinOrderByAggregateInput;
    _sum?: Prisma.MigrationBatchSumOrderByAggregateInput;
};
export type MigrationBatchScalarWhereWithAggregatesInput = {
    AND?: Prisma.MigrationBatchScalarWhereWithAggregatesInput | Prisma.MigrationBatchScalarWhereWithAggregatesInput[];
    OR?: Prisma.MigrationBatchScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MigrationBatchScalarWhereWithAggregatesInput | Prisma.MigrationBatchScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"MigrationBatch"> | string;
    tplCode?: Prisma.StringWithAggregatesFilter<"MigrationBatch"> | string;
    fileName?: Prisma.StringWithAggregatesFilter<"MigrationBatch"> | string;
    uploadedByUserId?: Prisma.UuidWithAggregatesFilter<"MigrationBatch"> | string;
    status?: Prisma.EnumMigrationBatchStatusWithAggregatesFilter<"MigrationBatch"> | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntWithAggregatesFilter<"MigrationBatch"> | number;
    validRows?: Prisma.IntNullableWithAggregatesFilter<"MigrationBatch"> | number | null;
    rejectedRows?: Prisma.IntNullableWithAggregatesFilter<"MigrationBatch"> | number | null;
    promotedRows?: Prisma.IntNullableWithAggregatesFilter<"MigrationBatch"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"MigrationBatch"> | Date | string;
    validatedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MigrationBatch"> | Date | string | null;
    promotedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"MigrationBatch"> | Date | string | null;
};
export type MigrationBatchCreateInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutMigrationBatchesUploadedInput;
    rows?: Prisma.MigrationStagingRowCreateNestedManyWithoutBatchInput;
};
export type MigrationBatchUncheckedCreateInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    uploadedByUserId: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
    rows?: Prisma.MigrationStagingRowUncheckedCreateNestedManyWithoutBatchInput;
};
export type MigrationBatchUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutMigrationBatchesUploadedNestedInput;
    rows?: Prisma.MigrationStagingRowUpdateManyWithoutBatchNestedInput;
};
export type MigrationBatchUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rows?: Prisma.MigrationStagingRowUncheckedUpdateManyWithoutBatchNestedInput;
};
export type MigrationBatchCreateManyInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    uploadedByUserId: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
};
export type MigrationBatchUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MigrationBatchUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MigrationBatchListRelationFilter = {
    every?: Prisma.MigrationBatchWhereInput;
    some?: Prisma.MigrationBatchWhereInput;
    none?: Prisma.MigrationBatchWhereInput;
};
export type MigrationBatchOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MigrationBatchCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tplCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrder;
    promotedRows?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    validatedAt?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
};
export type MigrationBatchAvgOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrder;
    promotedRows?: Prisma.SortOrder;
};
export type MigrationBatchMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tplCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrder;
    promotedRows?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    validatedAt?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
};
export type MigrationBatchMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    tplCode?: Prisma.SortOrder;
    fileName?: Prisma.SortOrder;
    uploadedByUserId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrder;
    promotedRows?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    validatedAt?: Prisma.SortOrder;
    promotedAt?: Prisma.SortOrder;
};
export type MigrationBatchSumOrderByAggregateInput = {
    totalRows?: Prisma.SortOrder;
    validRows?: Prisma.SortOrder;
    rejectedRows?: Prisma.SortOrder;
    promotedRows?: Prisma.SortOrder;
};
export type MigrationBatchScalarRelationFilter = {
    is?: Prisma.MigrationBatchWhereInput;
    isNot?: Prisma.MigrationBatchWhereInput;
};
export type MigrationBatchCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput> | Prisma.MigrationBatchCreateWithoutUploadedByInput[] | Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput | Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.MigrationBatchCreateManyUploadedByInputEnvelope;
    connect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
};
export type MigrationBatchUncheckedCreateNestedManyWithoutUploadedByInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput> | Prisma.MigrationBatchCreateWithoutUploadedByInput[] | Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput | Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput[];
    createMany?: Prisma.MigrationBatchCreateManyUploadedByInputEnvelope;
    connect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
};
export type MigrationBatchUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput> | Prisma.MigrationBatchCreateWithoutUploadedByInput[] | Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput | Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.MigrationBatchUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.MigrationBatchUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.MigrationBatchCreateManyUploadedByInputEnvelope;
    set?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    disconnect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    delete?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    connect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    update?: Prisma.MigrationBatchUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.MigrationBatchUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.MigrationBatchUpdateManyWithWhereWithoutUploadedByInput | Prisma.MigrationBatchUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.MigrationBatchScalarWhereInput | Prisma.MigrationBatchScalarWhereInput[];
};
export type MigrationBatchUncheckedUpdateManyWithoutUploadedByNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput> | Prisma.MigrationBatchCreateWithoutUploadedByInput[] | Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput[];
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput | Prisma.MigrationBatchCreateOrConnectWithoutUploadedByInput[];
    upsert?: Prisma.MigrationBatchUpsertWithWhereUniqueWithoutUploadedByInput | Prisma.MigrationBatchUpsertWithWhereUniqueWithoutUploadedByInput[];
    createMany?: Prisma.MigrationBatchCreateManyUploadedByInputEnvelope;
    set?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    disconnect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    delete?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    connect?: Prisma.MigrationBatchWhereUniqueInput | Prisma.MigrationBatchWhereUniqueInput[];
    update?: Prisma.MigrationBatchUpdateWithWhereUniqueWithoutUploadedByInput | Prisma.MigrationBatchUpdateWithWhereUniqueWithoutUploadedByInput[];
    updateMany?: Prisma.MigrationBatchUpdateManyWithWhereWithoutUploadedByInput | Prisma.MigrationBatchUpdateManyWithWhereWithoutUploadedByInput[];
    deleteMany?: Prisma.MigrationBatchScalarWhereInput | Prisma.MigrationBatchScalarWhereInput[];
};
export type EnumMigrationBatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.MigrationBatchStatus;
};
export type MigrationBatchCreateNestedOneWithoutRowsInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutRowsInput, Prisma.MigrationBatchUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutRowsInput;
    connect?: Prisma.MigrationBatchWhereUniqueInput;
};
export type MigrationBatchUpdateOneRequiredWithoutRowsNestedInput = {
    create?: Prisma.XOR<Prisma.MigrationBatchCreateWithoutRowsInput, Prisma.MigrationBatchUncheckedCreateWithoutRowsInput>;
    connectOrCreate?: Prisma.MigrationBatchCreateOrConnectWithoutRowsInput;
    upsert?: Prisma.MigrationBatchUpsertWithoutRowsInput;
    connect?: Prisma.MigrationBatchWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MigrationBatchUpdateToOneWithWhereWithoutRowsInput, Prisma.MigrationBatchUpdateWithoutRowsInput>, Prisma.MigrationBatchUncheckedUpdateWithoutRowsInput>;
};
export type MigrationBatchCreateWithoutUploadedByInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
    rows?: Prisma.MigrationStagingRowCreateNestedManyWithoutBatchInput;
};
export type MigrationBatchUncheckedCreateWithoutUploadedByInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
    rows?: Prisma.MigrationStagingRowUncheckedCreateNestedManyWithoutBatchInput;
};
export type MigrationBatchCreateOrConnectWithoutUploadedByInput = {
    where: Prisma.MigrationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput>;
};
export type MigrationBatchCreateManyUploadedByInputEnvelope = {
    data: Prisma.MigrationBatchCreateManyUploadedByInput | Prisma.MigrationBatchCreateManyUploadedByInput[];
    skipDuplicates?: boolean;
};
export type MigrationBatchUpsertWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.MigrationBatchWhereUniqueInput;
    update: Prisma.XOR<Prisma.MigrationBatchUpdateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedUpdateWithoutUploadedByInput>;
    create: Prisma.XOR<Prisma.MigrationBatchCreateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedCreateWithoutUploadedByInput>;
};
export type MigrationBatchUpdateWithWhereUniqueWithoutUploadedByInput = {
    where: Prisma.MigrationBatchWhereUniqueInput;
    data: Prisma.XOR<Prisma.MigrationBatchUpdateWithoutUploadedByInput, Prisma.MigrationBatchUncheckedUpdateWithoutUploadedByInput>;
};
export type MigrationBatchUpdateManyWithWhereWithoutUploadedByInput = {
    where: Prisma.MigrationBatchScalarWhereInput;
    data: Prisma.XOR<Prisma.MigrationBatchUpdateManyMutationInput, Prisma.MigrationBatchUncheckedUpdateManyWithoutUploadedByInput>;
};
export type MigrationBatchScalarWhereInput = {
    AND?: Prisma.MigrationBatchScalarWhereInput | Prisma.MigrationBatchScalarWhereInput[];
    OR?: Prisma.MigrationBatchScalarWhereInput[];
    NOT?: Prisma.MigrationBatchScalarWhereInput | Prisma.MigrationBatchScalarWhereInput[];
    id?: Prisma.UuidFilter<"MigrationBatch"> | string;
    tplCode?: Prisma.StringFilter<"MigrationBatch"> | string;
    fileName?: Prisma.StringFilter<"MigrationBatch"> | string;
    uploadedByUserId?: Prisma.UuidFilter<"MigrationBatch"> | string;
    status?: Prisma.EnumMigrationBatchStatusFilter<"MigrationBatch"> | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFilter<"MigrationBatch"> | number;
    validRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    rejectedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    promotedRows?: Prisma.IntNullableFilter<"MigrationBatch"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"MigrationBatch"> | Date | string;
    validatedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
    promotedAt?: Prisma.DateTimeNullableFilter<"MigrationBatch"> | Date | string | null;
};
export type MigrationBatchCreateWithoutRowsInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
    uploadedBy: Prisma.AppUserCreateNestedOneWithoutMigrationBatchesUploadedInput;
};
export type MigrationBatchUncheckedCreateWithoutRowsInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    uploadedByUserId: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
};
export type MigrationBatchCreateOrConnectWithoutRowsInput = {
    where: Prisma.MigrationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationBatchCreateWithoutRowsInput, Prisma.MigrationBatchUncheckedCreateWithoutRowsInput>;
};
export type MigrationBatchUpsertWithoutRowsInput = {
    update: Prisma.XOR<Prisma.MigrationBatchUpdateWithoutRowsInput, Prisma.MigrationBatchUncheckedUpdateWithoutRowsInput>;
    create: Prisma.XOR<Prisma.MigrationBatchCreateWithoutRowsInput, Prisma.MigrationBatchUncheckedCreateWithoutRowsInput>;
    where?: Prisma.MigrationBatchWhereInput;
};
export type MigrationBatchUpdateToOneWithWhereWithoutRowsInput = {
    where?: Prisma.MigrationBatchWhereInput;
    data: Prisma.XOR<Prisma.MigrationBatchUpdateWithoutRowsInput, Prisma.MigrationBatchUncheckedUpdateWithoutRowsInput>;
};
export type MigrationBatchUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    uploadedBy?: Prisma.AppUserUpdateOneRequiredWithoutMigrationBatchesUploadedNestedInput;
};
export type MigrationBatchUncheckedUpdateWithoutRowsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    uploadedByUserId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MigrationBatchCreateManyUploadedByInput = {
    id?: string;
    tplCode: string;
    fileName: string;
    status?: $Enums.MigrationBatchStatus;
    totalRows: number;
    validRows?: number | null;
    rejectedRows?: number | null;
    promotedRows?: number | null;
    createdAt?: Date | string;
    validatedAt?: Date | string | null;
    promotedAt?: Date | string | null;
};
export type MigrationBatchUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rows?: Prisma.MigrationStagingRowUpdateManyWithoutBatchNestedInput;
};
export type MigrationBatchUncheckedUpdateWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    rows?: Prisma.MigrationStagingRowUncheckedUpdateManyWithoutBatchNestedInput;
};
export type MigrationBatchUncheckedUpdateManyWithoutUploadedByInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    tplCode?: Prisma.StringFieldUpdateOperationsInput | string;
    fileName?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumMigrationBatchStatusFieldUpdateOperationsInput | $Enums.MigrationBatchStatus;
    totalRows?: Prisma.IntFieldUpdateOperationsInput | number;
    validRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    rejectedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    promotedRows?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    validatedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    promotedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type MigrationBatchCountOutputType = {
    rows: number;
};
export type MigrationBatchCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    rows?: boolean | MigrationBatchCountOutputTypeCountRowsArgs;
};
export type MigrationBatchCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchCountOutputTypeSelect<ExtArgs> | null;
};
export type MigrationBatchCountOutputTypeCountRowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationStagingRowWhereInput;
};
export type MigrationBatchSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tplCode?: boolean;
    fileName?: boolean;
    uploadedByUserId?: boolean;
    status?: boolean;
    totalRows?: boolean;
    validRows?: boolean;
    rejectedRows?: boolean;
    promotedRows?: boolean;
    createdAt?: boolean;
    validatedAt?: boolean;
    promotedAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    rows?: boolean | Prisma.MigrationBatch$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.MigrationBatchCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationBatch"]>;
export type MigrationBatchSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tplCode?: boolean;
    fileName?: boolean;
    uploadedByUserId?: boolean;
    status?: boolean;
    totalRows?: boolean;
    validRows?: boolean;
    rejectedRows?: boolean;
    promotedRows?: boolean;
    createdAt?: boolean;
    validatedAt?: boolean;
    promotedAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationBatch"]>;
export type MigrationBatchSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    tplCode?: boolean;
    fileName?: boolean;
    uploadedByUserId?: boolean;
    status?: boolean;
    totalRows?: boolean;
    validRows?: boolean;
    rejectedRows?: boolean;
    promotedRows?: boolean;
    createdAt?: boolean;
    validatedAt?: boolean;
    promotedAt?: boolean;
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["migrationBatch"]>;
export type MigrationBatchSelectScalar = {
    id?: boolean;
    tplCode?: boolean;
    fileName?: boolean;
    uploadedByUserId?: boolean;
    status?: boolean;
    totalRows?: boolean;
    validRows?: boolean;
    rejectedRows?: boolean;
    promotedRows?: boolean;
    createdAt?: boolean;
    validatedAt?: boolean;
    promotedAt?: boolean;
};
export type MigrationBatchOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "tplCode" | "fileName" | "uploadedByUserId" | "status" | "totalRows" | "validRows" | "rejectedRows" | "promotedRows" | "createdAt" | "validatedAt" | "promotedAt", ExtArgs["result"]["migrationBatch"]>;
export type MigrationBatchInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
    rows?: boolean | Prisma.MigrationBatch$rowsArgs<ExtArgs>;
    _count?: boolean | Prisma.MigrationBatchCountOutputTypeDefaultArgs<ExtArgs>;
};
export type MigrationBatchIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type MigrationBatchIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    uploadedBy?: boolean | Prisma.AppUserDefaultArgs<ExtArgs>;
};
export type $MigrationBatchPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MigrationBatch";
    objects: {
        uploadedBy: Prisma.$AppUserPayload<ExtArgs>;
        rows: Prisma.$MigrationStagingRowPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        tplCode: string;
        fileName: string;
        uploadedByUserId: string;
        status: $Enums.MigrationBatchStatus;
        totalRows: number;
        validRows: number | null;
        rejectedRows: number | null;
        promotedRows: number | null;
        createdAt: Date;
        validatedAt: Date | null;
        promotedAt: Date | null;
    }, ExtArgs["result"]["migrationBatch"]>;
    composites: {};
};
export type MigrationBatchGetPayload<S extends boolean | null | undefined | MigrationBatchDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload, S>;
export type MigrationBatchCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MigrationBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MigrationBatchCountAggregateInputType | true;
};
export interface MigrationBatchDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MigrationBatch'];
        meta: {
            name: 'MigrationBatch';
        };
    };
    findUnique<T extends MigrationBatchFindUniqueArgs>(args: Prisma.SelectSubset<T, MigrationBatchFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MigrationBatchFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MigrationBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MigrationBatchFindFirstArgs>(args?: Prisma.SelectSubset<T, MigrationBatchFindFirstArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MigrationBatchFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MigrationBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MigrationBatchFindManyArgs>(args?: Prisma.SelectSubset<T, MigrationBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MigrationBatchCreateArgs>(args: Prisma.SelectSubset<T, MigrationBatchCreateArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MigrationBatchCreateManyArgs>(args?: Prisma.SelectSubset<T, MigrationBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends MigrationBatchCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, MigrationBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends MigrationBatchDeleteArgs>(args: Prisma.SelectSubset<T, MigrationBatchDeleteArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MigrationBatchUpdateArgs>(args: Prisma.SelectSubset<T, MigrationBatchUpdateArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MigrationBatchDeleteManyArgs>(args?: Prisma.SelectSubset<T, MigrationBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MigrationBatchUpdateManyArgs>(args: Prisma.SelectSubset<T, MigrationBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends MigrationBatchUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, MigrationBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends MigrationBatchUpsertArgs>(args: Prisma.SelectSubset<T, MigrationBatchUpsertArgs<ExtArgs>>): Prisma.Prisma__MigrationBatchClient<runtime.Types.Result.GetResult<Prisma.$MigrationBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MigrationBatchCountArgs>(args?: Prisma.Subset<T, MigrationBatchCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MigrationBatchCountAggregateOutputType> : number>;
    aggregate<T extends MigrationBatchAggregateArgs>(args: Prisma.Subset<T, MigrationBatchAggregateArgs>): Prisma.PrismaPromise<GetMigrationBatchAggregateType<T>>;
    groupBy<T extends MigrationBatchGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MigrationBatchGroupByArgs['orderBy'];
    } : {
        orderBy?: MigrationBatchGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MigrationBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMigrationBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MigrationBatchFieldRefs;
}
export interface Prisma__MigrationBatchClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    uploadedBy<T extends Prisma.AppUserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AppUserDefaultArgs<ExtArgs>>): Prisma.Prisma__AppUserClient<runtime.Types.Result.GetResult<Prisma.$AppUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    rows<T extends Prisma.MigrationBatch$rowsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MigrationBatch$rowsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MigrationStagingRowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MigrationBatchFieldRefs {
    readonly id: Prisma.FieldRef<"MigrationBatch", 'String'>;
    readonly tplCode: Prisma.FieldRef<"MigrationBatch", 'String'>;
    readonly fileName: Prisma.FieldRef<"MigrationBatch", 'String'>;
    readonly uploadedByUserId: Prisma.FieldRef<"MigrationBatch", 'String'>;
    readonly status: Prisma.FieldRef<"MigrationBatch", 'MigrationBatchStatus'>;
    readonly totalRows: Prisma.FieldRef<"MigrationBatch", 'Int'>;
    readonly validRows: Prisma.FieldRef<"MigrationBatch", 'Int'>;
    readonly rejectedRows: Prisma.FieldRef<"MigrationBatch", 'Int'>;
    readonly promotedRows: Prisma.FieldRef<"MigrationBatch", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"MigrationBatch", 'DateTime'>;
    readonly validatedAt: Prisma.FieldRef<"MigrationBatch", 'DateTime'>;
    readonly promotedAt: Prisma.FieldRef<"MigrationBatch", 'DateTime'>;
}
export type MigrationBatchFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where: Prisma.MigrationBatchWhereUniqueInput;
};
export type MigrationBatchFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where: Prisma.MigrationBatchWhereUniqueInput;
};
export type MigrationBatchFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where?: Prisma.MigrationBatchWhereInput;
    orderBy?: Prisma.MigrationBatchOrderByWithRelationInput | Prisma.MigrationBatchOrderByWithRelationInput[];
    cursor?: Prisma.MigrationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationBatchScalarFieldEnum | Prisma.MigrationBatchScalarFieldEnum[];
};
export type MigrationBatchFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where?: Prisma.MigrationBatchWhereInput;
    orderBy?: Prisma.MigrationBatchOrderByWithRelationInput | Prisma.MigrationBatchOrderByWithRelationInput[];
    cursor?: Prisma.MigrationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationBatchScalarFieldEnum | Prisma.MigrationBatchScalarFieldEnum[];
};
export type MigrationBatchFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where?: Prisma.MigrationBatchWhereInput;
    orderBy?: Prisma.MigrationBatchOrderByWithRelationInput | Prisma.MigrationBatchOrderByWithRelationInput[];
    cursor?: Prisma.MigrationBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationBatchScalarFieldEnum | Prisma.MigrationBatchScalarFieldEnum[];
};
export type MigrationBatchCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationBatchCreateInput, Prisma.MigrationBatchUncheckedCreateInput>;
};
export type MigrationBatchCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MigrationBatchCreateManyInput | Prisma.MigrationBatchCreateManyInput[];
    skipDuplicates?: boolean;
};
export type MigrationBatchCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    data: Prisma.MigrationBatchCreateManyInput | Prisma.MigrationBatchCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.MigrationBatchIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type MigrationBatchUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationBatchUpdateInput, Prisma.MigrationBatchUncheckedUpdateInput>;
    where: Prisma.MigrationBatchWhereUniqueInput;
};
export type MigrationBatchUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MigrationBatchUpdateManyMutationInput, Prisma.MigrationBatchUncheckedUpdateManyInput>;
    where?: Prisma.MigrationBatchWhereInput;
    limit?: number;
};
export type MigrationBatchUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MigrationBatchUpdateManyMutationInput, Prisma.MigrationBatchUncheckedUpdateManyInput>;
    where?: Prisma.MigrationBatchWhereInput;
    limit?: number;
    include?: Prisma.MigrationBatchIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type MigrationBatchUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where: Prisma.MigrationBatchWhereUniqueInput;
    create: Prisma.XOR<Prisma.MigrationBatchCreateInput, Prisma.MigrationBatchUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MigrationBatchUpdateInput, Prisma.MigrationBatchUncheckedUpdateInput>;
};
export type MigrationBatchDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
    where: Prisma.MigrationBatchWhereUniqueInput;
};
export type MigrationBatchDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MigrationBatchWhereInput;
    limit?: number;
};
export type MigrationBatch$rowsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationStagingRowSelect<ExtArgs> | null;
    omit?: Prisma.MigrationStagingRowOmit<ExtArgs> | null;
    include?: Prisma.MigrationStagingRowInclude<ExtArgs> | null;
    where?: Prisma.MigrationStagingRowWhereInput;
    orderBy?: Prisma.MigrationStagingRowOrderByWithRelationInput | Prisma.MigrationStagingRowOrderByWithRelationInput[];
    cursor?: Prisma.MigrationStagingRowWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MigrationStagingRowScalarFieldEnum | Prisma.MigrationStagingRowScalarFieldEnum[];
};
export type MigrationBatchDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MigrationBatchSelect<ExtArgs> | null;
    omit?: Prisma.MigrationBatchOmit<ExtArgs> | null;
    include?: Prisma.MigrationBatchInclude<ExtArgs> | null;
};
